FROM node:20.17.0-alpine3.20
WORKDIR /backend
ENV NODE_ENV=development
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g apidoc prisma ts-node-dev
RUN yarn setup
COPY . .
EXPOSE 5000
CMD ["yarn", "dev"]
