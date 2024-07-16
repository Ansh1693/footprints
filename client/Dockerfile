FROM node:21

WORKDIR /footprints/client

COPY package* .

RUN npm install


COPY . .

COPY .env.local .env.local

EXPOSE 5001

CMD ["npm", "run", "dev"]
