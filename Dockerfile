# 1st stage build client
FROM node:latest as builder
# copy package-lock.json (mainly) and package.json
COPY /package*.json ./
# npm ci for better performance in dependency resolution
RUN npm ci
# bundle client
COPY . .
# build with webpack
RUN npm run build

# 2nd stage: lightweight alpine container
FROM nginx:alpine

LABEL Name=occloxium.de Version=1.0.0

ADD . /usr/share/nginx/html

COPY --from=builder bundle.* /usr/share/nginx/html/