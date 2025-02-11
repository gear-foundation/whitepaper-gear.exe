FROM node:22-alpine AS builder
WORKDIR /whitepaper
COPY . /whitepaper
RUN npm install --force
RUN npm run build

FROM nginx:alpine
RUN rm -vf /usr/share/nginx/html/*
COPY --from=builder /whitepaper/build /usr/share/nginx/html
