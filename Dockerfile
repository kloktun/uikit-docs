FROM node:18-alpine

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN yarn install
RUN yarn build

EXPOSE 3000

USER node

CMD ["yarn", "start"]