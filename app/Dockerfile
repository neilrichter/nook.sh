FROM node:12

ENV NODE_ENV=development

RUN mkdir /app

WORKDIR /app

ADD . /app

RUN NODE_ENV=development npm install
