"use strict";

const ContentTransmitter = require("knamp-content-transmitter").default;

const start = async () => {

    const processor = await ContentTransmitter({
        clientName: "transmitter-client",
        consumeFrom: "transmitter-consume",
        groupId: "transmitter-group",
        produceTo: "generator-consume",
      });
    
    processor.on("error", (error) => {
        console.error(error);
    });

    console.log("ContentTransmitter ready.");
};

start();