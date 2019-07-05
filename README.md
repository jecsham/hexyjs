# HEXY

[![Build Status](https://travis-ci.com/jecsham/hexy.svg?branch=master)](https://travis-ci.com/jecsham/hexy)

A simple library with some hexadecimal utilities.

## Install
```sh
    $ npm install ?
```
## Usage

 ```js

    const hexy = require("hexy");

    hexy.strToHex("Cave Story");
    // => 436176652053746f7279

    hexy.hexToStr("436176652053746f7279");
    // => Cave Story

    hexy.isHex("436176652053746f7279");
    // => true

    hexy.isHex("32JGD");  
    // => false

```

under construction :D