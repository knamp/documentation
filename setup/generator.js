"use strict";

const ContentGenerator = require("knamp-content-generator").default;

const start = async () => {

    ContentGenerator({
        clientName: "generator-client",
        consumeFrom: "generator-consume",
        groupId: "generator-group",
        produceTo: "produce-topic",
      });

    console.log("ContentGenerator ready.");
};

start();