FROM node:20.14.0-alpine3.20
WORKDIR /adminpanel
COPY package.json .
RUN npm i --ignore-scripts -g serve
RUN yarn --ignore-scripts
COPY . .
EXPOSE 3001
CMD yarn dev
