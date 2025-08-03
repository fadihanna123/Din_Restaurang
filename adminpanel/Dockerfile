FROM node:22.17.1-slim
WORKDIR /adminpanel
ENV NODE_ENV=development
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g serve
RUN yarn setup
COPY . .
EXPOSE 3001
CMD ["yarn", "dev"]
