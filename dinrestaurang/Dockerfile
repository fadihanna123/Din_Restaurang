FROM node:20.16.0-alpine3.20
WORKDIR /dinrestaurang
ENV NODE_ENV=development
RUN npm i --silent --ignore-scripts -g serve
COPY yarn.lock package.json ./
RUN yarn --silent --ignore-scripts --emoji
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
