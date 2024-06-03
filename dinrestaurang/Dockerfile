FROM node:20.14.0-alpine3.20
WORKDIR /dinrestaurang
RUN npm i -g serve
COPY package.json .
RUN yarn
COPY . .
RUN yarn build:prod
EXPOSE 3000
CMD serve build
