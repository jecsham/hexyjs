# HexyJS

[![Build Status](https://travis-ci.com/jecsham/hexy.svg?branch=master)](https://travis-ci.com/jecsham/hexy)

A simple library with some hexadecimal utilities.

## Install
```sh
    $ npm install hexyjs
```
## Basic Usage

 ```js

    const hexyjs = require("hexy");

    hexyjs.strToHex("Cave Story");
    // => 436176652053746f7279

    hexyjs.hexToStr("436176652053746f7279");
    // => Cave Story

    hexyjs.isHex("436176652053746f7279");
    // => true

    hexyjs.isHex("32JGD");  
    // => false

```

## strToHex() Options
You can use this function with options to change the output.

* grouped: string output will be grouped (default: false)
* uppercase: string letters will be transformed to upper case. (default: false)

 ```js

    hexyjs.strToHex("Cave Story", { uppercase: true });
    // => 436176652053746F7279

    hexyjs.strToHex("Cave Story", { grouped: true });
    // => 43 61 76 65 20 53 74 6f 72 79

```

Under construction :D
