# Stage 1 - npm build 
FROM node:10 as build-deps
WORKDIR /app
COPY . ./
RUN npm install
RUN npm build

# Stage 2 - prod image creation
FROM nginx:1.12-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]