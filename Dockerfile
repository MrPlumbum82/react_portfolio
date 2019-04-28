# Stage 1 - npm build 
FROM node:10 as build-deps
WORKDIR /app
COPY . ./
RUN npm install
RUN npm build
CMD ["npm", "start"]