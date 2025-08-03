FROM node:22.17.1-slim
WORKDIR /backend
ENV NODE_ENV=development
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g apidoc prisma ts-node-dev
RUN yarn setup
COPY . .
EXPOSE 5000
CMD ["yarn", "dev"]
