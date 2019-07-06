"use strict"
const isHex = require("./is-hex");
module.exports = hex => {
    const finalHex = hex.replace(/ /g, "");

    if (isHex(finalHex)) {
        const str = decodeURIComponent(finalHex.replace(/(..)/g, "%$1"));
        return str;
    }
    return false;
}