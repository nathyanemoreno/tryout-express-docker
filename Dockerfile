FROM node:14.5.3-alpine3.11

COPY . . 

RUN npm install

EXPOSE 5686

CMD ["npm", "start"]