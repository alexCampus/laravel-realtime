FROM node:lts-alpine

WORKDIR /app

### Install Laravel Echo Server and dependencies
RUN yarn global add --prod --no-lockfile laravel-echo-server \
     && yarn cache clean \
     && mkdir -p /app/database
#apk add --update --no-cache sqlite openssl \
# && apk add --update --no-cache --virtual  \
#        .build-deps \
#        binutils-gold \
#        curl \
#        g++ \
#        gcc \
#        gnupg \
#        libgcc \
#        linux-headers \
#        make \
#        python \

# && apk del .build-deps \


COPY . /usr/local/

ENTRYPOINT ["docker-entrypoint"]

VOLUME /app

EXPOSE 6001

#HEALTHCHECK --interval=30s --timeout=5s \
#        CMD /usr/local/bin/health-check
#
CMD ["start"]
