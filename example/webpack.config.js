const path = require('path');

console.log(__dirname+"/src/index.js")

module.exports = {
    "mode": "development",
    "entry": __dirname+"/src/index.js",
    "output": {
        "path": __dirname+'/dist/',
        filename: "index.js"
    },
    "devtool": "source-map",
    "target": "web"
}