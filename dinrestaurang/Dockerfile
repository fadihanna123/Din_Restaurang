FROM node:22.17.1-slim
WORKDIR /dinrestaurang
ENV NODE_ENV=development
RUN npm i --silent --ignore-scripts -g serve
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
