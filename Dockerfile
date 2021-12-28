FROM node:16

WORKDIR /app
COPY . /app

ENV PORT=3000
ENV NODE_ENV=development

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
