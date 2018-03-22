# Architecture Overview

## Requirements

- Apache Kafka on `127.0.0.1:9092`
- Node.js (npm)
- Yarn `npm install -g yarn`

## How to install and run?

* `git clone git@github.com:knamp/documentation.git`
* `cd documentation/setup`
* `yarn install`
* `yarn start`

* example CURL to create request transmitter request

```
curl -X POST \
  http://localhost:8844/produce \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{ "url": "https://google.de" }'
````

* the webservice will return a key, for example like this: `c947e700-b6cb-4a38-8adf-f2df3c34d131`

* visit `http://localhost:8855/content/{KEY HERE}` to see content via provider after transmitting and generation
