##### Stage 1
FROM node:lts AS node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/aragosta-app /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./config/nginx-selfsigned.crt /etc/nginx/ssl/nginx-selfsigned.crt
COPY ./config/nginx-selfsigned.key /etc/nginx/ssl/nginx-selfsigned.key

# docker build -t nginx-angular -f nginx.prod.dockerfile .
# docker run -p 8080:80 nginx-angular
