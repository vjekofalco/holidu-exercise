# Stage 1 - the build process
FROM node:12.18 as build-step
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-step /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

