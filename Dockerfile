
FROM node:alpine

WORKDIR /usr/src/app
COPY package.json .
RUN yarn
COPY . .
ENTRYPOINT ["yarn"]
CMD ["start"]
