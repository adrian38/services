FROM eclipse-mosquitto:2.0.14

RUN apk add --update npm


COPY ./mosquitto/config/init-mqtt.sh /init-mqtt.sh
COPY ./mosquitto/config/start.js /start.js

RUN dos2unix /init-mqtt.sh
RUN npm init -y



ENTRYPOINT ["sh", "/init-mqtt.sh"]
CMD ["/usr/sbin/mosquitto", "-c", "/config/mosquitto.conf"]