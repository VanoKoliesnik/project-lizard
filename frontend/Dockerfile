FROM node:22 AS builder

WORKDIR /frontend

COPY ./package.json ./
RUN yarn install --silent

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
