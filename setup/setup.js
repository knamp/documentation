"use strict";

const path = require("path");
const fork = require("child_process").fork;

const children = ["bridge", "transmitter", "generator", "provider"]
    .map(service => {
        return fork(path.join(__dirname, 
            `./${service}.js`));
    });