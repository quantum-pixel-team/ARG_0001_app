##### Stage 1: Build Angular App #####
FROM node:lts AS node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

##### Stage 2: Build Nginx with HTTP/3 support #####
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
    libc-dev \
    rust cargo

# Clone quiche
RUN git clone --recursive https://github.com/cloudflare/quiche /usr/local/src/quiche

# Download and extract Nginx source
RUN wget https://nginx.org/download/nginx-1.21.0.tar.gz && \
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
    --with-http_v3=../quiche \
    --with-openssl=../quiche/deps/boringssl \
    --with-quiche=../quiche && \
    make && \
    make install

# Clean up build dependencies and source
WORKDIR /
RUN apk del .build-deps && \
    rm -rf /nginx-1.21.0 /usr/local/src/quiche

# Copy Angular build artifacts
COPY --from=node /app/dist/aragosta-app /usr/share/nginx/html

# Copy Nginx configuration and SSL certificates
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/nginx-selfsigned.crt /etc/nginx/ssl/nginx-selfsigned.crt
COPY ./config/nginx-selfsigned.key /etc/nginx/ssl/nginx-selfsigned.key

# Expose ports
EXPOSE 80 443

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
