FROM nginx:latest

RUN mkdir /etc/nginx/sites-available && rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/

COPY scripts /root/scripts/
COPY certs /etc/ssl/

COPY sites /etc/nginx/templates

ARG WEB_REVERSE_PROXY_PORT=3000

ENV WEB_REVERSE_PROXY_PORT=$WEB_REVERSE_PROXY_PORT

CMD nginx