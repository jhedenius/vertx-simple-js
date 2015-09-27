var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();

var router = Router.router(vertx);

router.get("/").handler(function (ctx) {
  ctx.response().putHeader("content-type", "text/plain").end("Hello Jockes World!");
});

server.requestHandler(router.accept).listen(7080);

var eb = vertx.eventBus();
eb.consumer("test-channel", function (message) {
  console.log("I have received a message: " + message.body());
});

console.log('listening for messages');
