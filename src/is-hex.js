"use strict"
module.exports = hex => {
    hex = hex.replace(/ /g, "");
    if (hex.length % 2 === 0) {
        return typeof hex === "string" &&
        (hex.match(/([0-9]|[a-f])/gim) || []).length === hex.length;
    }
    return false;
}