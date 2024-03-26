var fs = require("fs");
try {

  var user;
  var password;
  console.log("intializing MQTT");


  if ("MQTT_USERNAME" in process.env) {
    user = process.env.MQTT_USERNAME;
  } else {
    console.log("no user configured");
    process.exit(1);
  }
  if ("MQTT_PASSWORD" in process.env) {
    password = process.env.MQTT_PASSWORD;
  } else {
    console.log("no password configured");
    process.exit(1);
  }
  if ("MQTT_PORT" in process.env) {
    port = process.env.MQTT_PORT;
  } else {
    console.log("no port configured");
    process.exit(1);
  }
  var config =
    "pid_file /var/run/mosquitto/mosquitto.pid\n\
    require_certificate false\n\
    allow_anonymous false\n\
    password_file /passwordfile\n\
    listener 8883\n\
    persistence true\n\
    persistence_location /mosquitto/data/\n\
    protocol mqtt";

  // cafile /certs/ca.crt\n\
  // certfile /certs/server.crt\n\
  // keyfile /certs/server.key\n\
  // acl_file /config/acl"
  var configModified = config.replace("8883", port);
  var password = user + ":" + password;

  fs.writeFileSync("/config/mosquitto.conf", configModified);
  fs.writeFileSync("/passwordfile", password);
} catch (e) {
  console.log(e.message);
  console.log("SOMETHING IS WRONG IN CONFIG VARS");
  process.exit(1);
}
