"use strict"
module.exports = (str, options) => {
    let hex = "";
    for (let i = 0, l = str.length; i < l; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    if (options) {
        if (options.grouped) {
            hex = hex.replace(/(.{2})/g, "$1 ").slice(0, -1);
        }
        if (options.uppercase) {
            hex = hex.toUpperCase();
        }
    }
    return hex;
}