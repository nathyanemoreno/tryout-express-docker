FROM node:alpine

COPY . . 

CMD npm install

EXPOSE 5686

CMD ["npm", "start"]