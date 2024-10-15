FROM node:22 AS builder

WORKDIR /frontend

COPY ./package.json ./
RUN yarn install --silent

COPY . .

ENV VITE_API_URL=https://lizard-772778801149.europe-west3.run.app/
ENV VITE_API_VERSION=v1

RUN yarn build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
