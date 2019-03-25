
FROM node:alpine

WORKDIR /usr/src/app
COPY package.json .
RUN yarn
COPY . .
RUN yarn test

ENTRYPOINT [ "./entry.sh" ]
