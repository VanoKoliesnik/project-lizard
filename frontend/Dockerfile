FROM node:22 AS builder

WORKDIR /frontend

COPY ./package.json ./
RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
