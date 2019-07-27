"use strict"
const isHex = require("./is-hex");
module.exports = hex => {
    const finalHex = hex.replace(/ /g, "");
    if (isHex(finalHex, false)) {
        let str = "";
        for (let i = 0; i < finalHex.length; i += 2)
            str += String.fromCharCode(parseInt(finalHex.substr(i, 2), 16));
        return str;
    }
    return false;
}