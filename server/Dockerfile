FROM node:18.15.0-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000

CMD [ "npm", "run", "dev" ]