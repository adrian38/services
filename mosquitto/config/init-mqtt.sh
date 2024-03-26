#!/bin/ash

set -e
if [ ! -d "/config" ]; then
    mkdir /config
fi
if [ ! -d "/var/run/mosquitto/" ]; then
    mkdir /var/run/mosquitto/
fi
chown mosquitto: /var/run/mosquitto

node /start.js

mosquitto_passwd -U /passwordfile

exec "$@"
