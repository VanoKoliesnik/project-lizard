FROM node:22 AS builder

WORKDIR /frontend

COPY ./package.json ./
RUN yarn install --silent

COPY . .

ENV VITE_API_URL=https://lizard-438618.lm.r.appspot.com
ENV VITE_API_VERSION=v1

RUN yarn build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
