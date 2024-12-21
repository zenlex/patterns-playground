FROM node:22-alpine

WORKDIR /app
VOLUME /app


RUN set -x \
    && apk add --no-cache \
        bash 

COPY rootfs /
RUN chmod +x /entrypoint

ENTRYPOINT ["/entrypoint"]
