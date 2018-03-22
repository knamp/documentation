"use strict";

const TransmitterBridge = require("knamp-transmitter-bridge").default;

const start = async () => {

    const server = await TransmitterBridge({
        clientName: "transmitter-client",
        groupId: "transmitter-group",
        produceTo: "transmitter-consume",
        webserver: {
            port: 8844
        }
      });
    
    server.on("error", (error) => {
      console.error(error);
    });
  
    server.on("request", data => {
      console.log(data);
    });

    console.log("TransmitterBridge ready.");
};

start();