FROM node:14.15.4-alpine3.12

USER root

WORKDIR /app

RUN yarn install

