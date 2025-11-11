FROM node:25.1.0-alpine
WORKDIR /backend
ENV NODE_ENV=development
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g apidoc ts-node-dev
RUN apk add --no-cache openssl
RUN yarn setup
COPY ./ ./
EXPOSE 5000
CMD ["yarn", "dev"]
