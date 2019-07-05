"use strict"
module.exports = hex => {

    const finalHex = hex.replace(/ /g, "");
    try {
        const str = decodeURIComponent(finalHex.replace(/(..)/g, "%$1"));
        return str;
    } catch (e) {
        return false;
    }
}