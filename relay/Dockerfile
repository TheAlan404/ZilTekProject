FROM node:16-alpine

USER node
WORKDIR /home/node

COPY . .

RUN npm install

CMD ["node", "relay.js"]
