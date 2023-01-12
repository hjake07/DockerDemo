FROM node:18.8.0

LABEL maintainer="Jacob Davies"
LABEL description="First time building. Kind of a demo"
LABEL cohort="15"

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]