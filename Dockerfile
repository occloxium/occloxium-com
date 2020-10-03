FROM node:alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
# npm ci for better performance in dependency resolution
RUN npm ci
# bundle client
COPY . .
# build with webpack
RUN npm run build

# 2nd stage: lightweight alpine container
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/ /usr/share/nginx/html/
