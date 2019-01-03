const fs = require("fs");
const fetch = require("node-fetch");

var dom = JSON.parse(fs.readFileSync("../../public/mtgJSONs/DOM.json"));
var grn = JSON.parse(fs.readFileSync("../../public/mtgJSONs/GRN.json"));
var m19 = JSON.parse(fs.readFileSync("../../public/mtgJSONs/M19.json"));
var rix = JSON.parse(fs.readFileSync("../../public/mtgJSONs/RIX.json"));
var xln = JSON.parse(fs.readFileSync("../../public/mtgJSONs/XLN.json"));

function postData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }); // parses response to JSON
}

// postData("http://127.0.0.1:1880/uploadSet", dom)
postData("http://127.0.0.1:1880/uploadSet", grn)
postData("http://127.0.0.1:1880/uploadSet", m19)
postData("http://127.0.0.1:1880/uploadSet", rix)
postData("http://127.0.0.1:1880/uploadSet", xln)
