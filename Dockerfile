# build base image
FROM  node:18.0.0 as build-stage

ARG BUILD_ENV

# set working directory
WORKDIR /app

# install app dependencies and run build
COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install
COPY ./ .
RUN pnpm build

# production base image
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
