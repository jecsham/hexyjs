"use strict"
const hexy = require("../");
const test = require('tape');

test("hexy", t => {
    
    /* hexToStr */
    t.equal(hexy.hexToStr("436176652053746f7279"), "Cave Story");
    t.equal(hexy.hexToStr("436176652053746F7279"), "Cave Story");
    t.equal(hexy.hexToStr("43 61 76 65 20 53 74 6f 72 79"), "Cave Story");
    t.equal(hexy.hexToStr("43 61 76 65 20 53 74 6F 72 79"), "Cave Story");
    t.equal(hexy.hexToStr("43 61 76 65 20 53 74 6F 72 7H"), false);
    t.equal(hexy.hexToStr("J436176652053746F727H"), false);

    t.notEqual(hexy.hexToStr("436176652053746f7279"), "cave story");
    t.notEqual(hexy.hexToStr("436176652053746F7279"), "cave story");
    t.notEqual(hexy.hexToStr("43 61 76 65 20 53 74 6f 72 79"), "cave story");
    t.notEqual(hexy.hexToStr("43 61 76 65 20 53 74 6F 72 79"), "cave story");
    t.notEqual(hexy.hexToStr("436176652053746F72793"), "cave story");
    t.notEqual(hexy.hexToStr("43 61 76 65 20 53 74 6F 72 79 3"), "cave story");

    /* strToHex */
    t.equal(hexy.strToHex("Cave Story"), "436176652053746f7279");
    t.equal(hexy.strToHex("Cave Story", { grouped: true }), "43 61 76 65 20 53 74 6f 72 79");
    t.equal(hexy.strToHex("Cave Story", { grouped: true, uppercase: true }), "43 61 76 65 20 53 74 6F 72 79");
    t.equal(hexy.strToHex("Cave Story", { uppercase: true }), "436176652053746F7279");
    
    t.notEqual(hexy.strToHex("cave story"), "436176652053746f7279");
    t.notEqual(hexy.strToHex("Cave Story"), "436176652053746F7279");
    t.notEqual(hexy.strToHex("Cave Story", { grouped: true }), "436176652053746f7279");
    t.notEqual(hexy.strToHex("Cave Story", { grouped: true, uppercase: true }), "43 61 76 65 20 53 74 6f 72 79");
    t.notEqual(hexy.strToHex("Cave Story", { uppercase: true }), "436176652053746f7279");

    /* isHex */
    t.ok(hexy.isHex("436176652053746f7279"));
    t.ok(hexy.isHex("436176652053746F7279"));
    t.ok(hexy.isHex("43 61 76 65 20 53 74 6f 72 79"));
    t.ok(hexy.isHex("43 61 76 65 20 53 74 6F 72 79"));
    t.ok(hexy.isHex("436176652053746f727", false));
    t.ok(hexy.isHex("436176652053746f7279", false));
    t.ok(hexy.isHex("43 61 76 65 20 53 74 6f 72 79 3", false));
    
    t.notOk(hexy.isHex("436176652053746f727"));
    t.notOk(hexy.isHex("43 61 76 65 20 53 74 6F 72 7"));
    t.notOk(hexy.isHex("43 61 76 65 20 53 74 6f 72 79 H", false));
    t.notOk(hexy.isHex("436176652053746f7279H", false));

    t.end();
})