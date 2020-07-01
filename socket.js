const socket = (io) => {
  io.on("connection", (client) => {
    console.log("New Connection");

    // socket event for client subscription
    client.on("subscribeToDateEvent", (interval) => {
      console.log("Client is subscribing with interval: ", interval);

      // emit message to the client side
      setInterval(() => {
        client.emit("getDate", new Date().toUTCString());
      }, interval);
    });
  });
};

module.exports = socket;
