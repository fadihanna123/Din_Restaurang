FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /dinrestaurang
ENV NODE_ENV development
RUN npm i --silent --ignore-scripts -g serve
COPY yarn.lock package.json .
RUN yarn --silent --ignore-scripts
COPY . .
USER fadi
EXPOSE 3000
CMD yarn dev
