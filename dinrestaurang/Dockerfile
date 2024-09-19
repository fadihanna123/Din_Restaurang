FROM node:20.17.0-alpine3.20
WORKDIR /dinrestaurang
ENV NODE_ENV=development
RUN npm i --silent --ignore-scripts -g serve
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
