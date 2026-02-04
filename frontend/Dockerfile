#stage 1 create a react app
# Stage 1: build
FROM node:20-alpine AS build
WORKDIR /app

# Copiamos archivos de dependencias primero
COPY package.json package-lock.json* ./

# Instalamos todo de cero
RUN npm install

# RECIÉN AQUÍ copiamos el código (el .dockerignore evitará copiar node_modules locales)
COPY . ./

# Ejecutamos el build
RUN npm run build

#stage 2 Development enviroment
FROM node:18-alpine AS development
WORKDIR /app
COPY ./package*.json ./
RUN npm install 
COPY . ./
EXPOSE 3000
CMD ["npm","start"]

#stage 3 production enviroment
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]



