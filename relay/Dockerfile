FROM node:16-alpine
EXPOSE 3000

USER node
WORKDIR /home/node

COPY . .

RUN npm install

CMD ["npx", "tsx", "relay.ts"]
