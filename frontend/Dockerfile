ARG VITE_API_URL
ARG VITE_API_VERSION

FROM node:22 AS builder

WORKDIR /frontend

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_VERSION=$VITE_API_VERSION

COPY ./package.json ./
RUN yarn install --silent

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html

RUN echo "VITE_API_URL=$VITE_API_URL" >> /usr/share/nginx/html/.env
RUN echo "VITE_API_VERSION=$VITE_API_VERSION" >> /usr/share/nginx/html/.env

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]
