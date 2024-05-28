FROM node:lts
WORKDIR /backend
COPY package.json .
RUN yarn
COPY . .
RUN npm install -g apidoc prisma ts-node-dev
RUN yarn
EXPOSE 5000
CMD yarn dev
