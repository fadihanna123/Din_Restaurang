FROM node:20.14.0-alpine3.20
WORKDIR /adminpanel
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3001
CMD yarn dev
