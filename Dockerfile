# 1st stage build client
FROM node:latest as builder
# copy package-lock.json (mainly) and package.json
COPY /client/package*.json ./
# npm ci for better performance in dependency resolution
RUN npm ci
# bundle client
COPY /client /
# build with webpack
RUN npm run build

# 2nd stage: lightweight alpine container
FROM nginx:alpine

LABEL Name=occloxium.com Version=1.0.0

COPY --from=builder /dist/* /usr/share/nginx/html/