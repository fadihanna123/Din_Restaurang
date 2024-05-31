FROM node:20.14.0-alpine3.20
WORKDIR /dinrestaurang
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD yarn dev
