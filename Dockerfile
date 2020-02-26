########
# Stage 1 - the build process
########
FROM node:12.13.0-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./

RUN npm run build

########
# Stage 2 - the production environment
########
FROM nginx:1.17.8-alpine
COPY --from=build /app/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
