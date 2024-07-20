FROM node:20.15.1-alpine3.20
WORKDIR /adminpanel
ENV NODE_ENV development
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g serve
RUN yarn --silent --ignore-scripts
COPY . .
EXPOSE 3001
CMD yarn dev
