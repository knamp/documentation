"use strict";

const ContentProvider = require("knamp-content-provider").default;

const start = async () => {

    const server = await ContentProvider({
        clientName: "transmitter-client",
        consumeFrom: "produce-topic",
        groupId: "transmitter-group",
        database: {
          fromMemory: true
        },
        webserver: {
          port: 8855,
        },
      });
    
    server.on("served", (data) => {
      console.log("served", data);
    });
  
    server.on("missed", (data) => {
      console.log("missed", data);
    });
  
    server.on("stored", (data) => {
      console.log("stored", data);
    });
  
    server.on("deleted", (data) => {
      console.log("deleted", data);
    });
  
    server.on("error", (error) => {
      console.error(error);
    });

    console.log("ContentProvider ready.");
};

start();