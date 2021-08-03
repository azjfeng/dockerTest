FROM node:16.4.2

WORKDIR /usr/src/web

COPY . .

RUN npm i

EXPOSE 5000

CMD ['node' , 'index.js']
