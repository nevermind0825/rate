FROM node:18-alpine AS build


WORKDIR /app
COPY . .


RUN npm install gatsby-cli
RUN npm install gatsby
RUN npm run build