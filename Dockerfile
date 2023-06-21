FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --force or --legacy-peer-deps

COPY . /app

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]