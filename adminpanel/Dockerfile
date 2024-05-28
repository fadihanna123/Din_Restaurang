FROM node:lts
WORKDIR /adminpanel
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3001
CMD yarn dev
