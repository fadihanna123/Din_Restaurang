FROM node:20.14.0-alpine3.20
WORKDIR /dinrestaurang
RUN npm i --ignore-scripts -g serve
COPY package.json .
RUN yarn --ignore-scripts
COPY . .
RUN yarn build:prod
EXPOSE 3000
CMD serve build
