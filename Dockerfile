FROM node:latest
COPY . /var/www/html
WORKDIR /var/www/html
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]