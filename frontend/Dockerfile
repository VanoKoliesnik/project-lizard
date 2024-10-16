FROM node:22 AS builder

WORKDIR /frontend

COPY ./package.json ./
RUN yarn install --silent

COPY . .

ARG VITE_API_URL
ARG VITE_API_VERSION

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_VERSION=$VITE_API_VERSION

RUN yarn build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
