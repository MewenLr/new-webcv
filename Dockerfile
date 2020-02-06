FROM node:12-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
EXPOSE 3000
ENV HOST 0.0.0.0

CMD [ "npm", "start" ]
