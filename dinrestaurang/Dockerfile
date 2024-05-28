FROM node:lts
WORKDIR /dinrestaurang
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD yarn dev
