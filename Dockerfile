# Custom Image in Jenkins Build Environment
FROM foggy/build-image:latest as builder
WORKDIR /build/
RUN git clone https://github.com/Foggy-J/Oxi-Revised.git
WORKDIR /build/Oxi-Revised/
RUN npm i

FROM alpine:3.18
RUN apk --no-cache add nodejs npm git
WORKDIR /app/
COPY --from=builder /build/Oxi-Revised .
ENTRYPOINT ["npm", "start"]