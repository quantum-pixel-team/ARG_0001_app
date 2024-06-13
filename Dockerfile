##### Stage 1
FROM node:lts AS node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

##### Stage 2

FROM nginx:alpine

# Install build dependencies
RUN apk add --no-cache --virtual .build-deps \
    build-base \
    openssl-dev \
    pcre-dev \
    zlib-dev \
    cmake \
    git \
    go \
    libc-dev

# Install Rust
RUN apk add --no-cache rust cargo

# Clone quiche
RUN git clone --recursive https://github.com/cloudflare/quiche /usr/local/src/quiche

# Download and extract Nginx source
RUN wget http://nginx.org/download/nginx-1.21.0.tar.gz && \
    tar -zxvf nginx-1.21.0.tar.gz && \
    rm nginx-1.21.0.tar.gz

# Compile Nginx with Quiche
WORKDIR /nginx-1.21.0
RUN ./configure \
    --prefix=/etc/nginx \
    --sbin-path=/usr/sbin/nginx \
    --modules-path=/usr/lib/nginx/modules \
    --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --http-log-path=/var/log/nginx/access.log \
    --pid-path=/var/run/nginx.pid \
    --lock-path=/var/run/nginx.lock \
    --http-client-body-temp-path=/var/cache/nginx/client_temp \
    --http-proxy-temp-path=/var/cache/nginx/proxy_temp \
    --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
    --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
    --http-scgi-temp-path=/var/cache/nginx/scgi_temp \
    --with-compat \
    --with-http_ssl_module \
    --with-http_v2_module \
    --with-http_v3_module \
    --with-openssl=/usr/local/src/quiche/deps/boringssl \
    --with-quiche=/usr/local/src/quiche && \
    make && \
    make install

# Clean up
WORKDIR /
RUN rm -rf /nginx-1.21.0 /usr/local/src/quiche

VOLUME /var/cache/nginx
COPY --from=node /app/dist/aragosta-app /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./config/nginx-selfsigned.crt /etc/nginx/ssl/nginx-selfsigned.crt
COPY ./config/nginx-selfsigned.key /etc/nginx/ssl/nginx-selfsigned.key

EXPOSE 80 443

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
# docker build -t nginx-angular -f nginx.prod.dockerfile .
# docker run -p 8080:80 nginx-angular
