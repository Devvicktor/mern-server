FROM node:16

#env

ENV DB_URL=mongodb://127.0.0.1:27017/pet_db

#working directory
WORKDIR /usr/src/app
#install dependencies
COPY package*.json ./

RUN npm install

#bundle app source
COPY . .

EXPOSE 8000

CMD [ "node","server.js" ]