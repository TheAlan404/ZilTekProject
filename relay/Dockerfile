FROM node:16-alpine

USER node
WORKDIR /home/node

COPY . .

RUN npm install

RUN npm install -g ts-node

CMD ["ts-node", "relay.ts"]
