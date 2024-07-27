FROM node:20.16.0-alpine3.20
WORKDIR /adminpanel
ENV NODE_ENV=development
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g serve
RUN yarn --silent --ignore-scripts
COPY . .
EXPOSE 3001
CMD ["yarn", "dev"]
