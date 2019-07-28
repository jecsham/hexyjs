# hexyjs
[![NPM](https://nodei.co/npm/hexyjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hexyjs/)

[![Build Status](https://travis-ci.com/jecsham/hexyjs.svg?branch=master)](https://travis-ci.com/jecsham/hexyjs) [![Codecov branch](https://img.shields.io/codecov/c/github/jecsham/hexyjs/master.svg)](https://codecov.io/gh/jecsham/hexyjs) [![GitHub package.json version](https://img.shields.io/github/package-json/v/jecsham/hexyjs.svg)](https://github.com/jecsham/hexyjs/releases)

A simple library with some hexadecimal utilities.

## Install
```sh
    $ npm install hexyjs
```
## Basic Usage

 ```js

    const hexyjs = require("hexyjs");
    
    /* String to Hexadecimal  */

    hexyjs.strToHex("Cave Story");
    // => 436176652053746f7279


    /* Hexadecimal to String */

    hexyjs.hexToStr("436176652053746f7279");
    // => Cave Story

    hexyjs.hexToStr("W36176652053746f727P"); // invalid hex string
    // => false


    /* Validate a Hexadecimal string */

    hexyjs.isHex("436176652053746f7279");
    // => true

    hexyjs.isHex("43 61 76 65 20 53 74 6f 72 79");
    // => true

    hexyjs.isHex("32JGD");  
    // => false

```

## API

### `hexToStr(hex: string): string | false`
Decode a hexadecimal string
### `isHex(hex: string, stric?: boolean): boolean`
Validate a hexadecimal string.
* **strict:** If enabled, this will return false if the string length is not divisible by 2 (invalid hexadecimal string length). If you disabled it, you can validate strings with any length. Check the following example. (*default: true*)

 ```js

    hexyjs.isHex("1"); // strict enabled  
    // => false

    hexyjs.isHex("1", false); // strict disabled  
    // => true
```

### `strToHex(str: string, options?: strToHexOptions): string`
Encode a string to a hexadecimal string.
You can use this function with options to change the output.

* **grouped:** Enable/disable grouped output. (*default: false*)
* **uppercase:** Enable/disable the uppercase output. (*default: false*)

```js
strToHexOptions {
    uppercase?: boolean,
    grouped?: boolean
}
```
```js

    hexyjs.strToHex("Cave Story", { uppercase: true });
    // => 436176652053746F7279

    hexyjs.strToHex("Cave Story", { grouped: true });
    // => 43 61 76 65 20 53 74 6f 72 79

```

## License

[MIT](license) © [Jecsham Castillo](https://jecsham.com)