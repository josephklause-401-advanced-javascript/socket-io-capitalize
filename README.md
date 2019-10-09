# socket-io-capitalize

# LAB - Class 18

## Socket.io Capitalization

### Author: Joe Klause

### Links and Resources
* [submission PR](https://github.com/josephklause-401-advanced-javascript/socket-io-capitalize/pull/1)
* [travis](https://travis-ci.com/josephklause-401-advanced-javascript/socket-io-capitalize)

### Running this app
Write some text in the 'data/text-file.txt' folder to be capitalized.
Type in npm run start
See how the text in 'text-file.txt' is transformed.

#### Running the app
Commands:
    "lint": "eslint .",
    "jest": "jest --runInBand",
    "start": "node server.js & node ./lib/writer.js & node ./lib/capitalizer.js & node ./lib/reader.js ./data/text-file.txt"
  

#### Tests
* Jest Tests: `npm run jest`
* Lint Tests: `npm run lint`
