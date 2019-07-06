"use strict"
module.exports = (hex, stric) => {
    hex = hex.replace(/ /g, "");
    let val = typeof hex === "string" &&
        (hex.match(/([0-9]|[a-f])/gim) || []).length === hex.length;
    if (stric == false) {
        return val;
    } else if (hex.length % 2 === 0) {
        return val;
    }
    return false;
}