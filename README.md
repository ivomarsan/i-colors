<p align="center">
  <a href="http://ivomarsan.com/" target="_blank">
    <img width="128" src="http://ivomarsan.com/favicon.png">
  </a>
</p>

<p align="center">i-colors</p>

<p align="center">

  <a href="https://www.npmjs.com/package/i-colors">
    <img src="https://img.shields.io/npm/dt/i-colors.svg" alt="Downloads">
  </a>

  <a href="https://www.npmjs.com/package/i-colors">
    <img src="https://img.shields.io/npm/v/i-colors.svg" alt="Version">
  </a>

  <a href="https://www.npmjs.com/package/i-colors">
    <img src="https://img.shields.io/npm/l/i-colors.svg" alt="License">
  </a>
</p>

----------

<a href="https://www.npmjs.com/package/i-colors">`i-colors`</a> A tiny css librarie to use inside my i-components.

## Installation

Install via `npm`
``` bash
npm install i-colors --save
```

## Usage

Inside `package.json` has been declared
``` javascript
{
  "style": "dist/i-colors.css"
}
```
But if you need, just use like
<!-- ``` html
<link rel="stylesheet" type="text/css" href="node-modules/i-colors/dist/i-colors.css">
<!-- Or -- >
<style lang="css" src="node-modules/i-colors/dist/i-colors.css" scoped></style>
<!-- Or if you want -- >
<script src="node-modules/i-colors/dist/i-colors.css"></script>
```
Or also on this way -->
``` js
import 'i-colors/dist/i-colors.css'

// or

require('i-colors/dist/i-colors.css')
```

## Colors

Actually we have 10 colors, are:
* <img src="https://img.shields.io/badge/red-                    -d43f3a.svg?style=for-the-badge" alt="red">
* <img src="https://img.shields.io/badge/pink-                    -ff067c.svg?style=for-the-badge" alt="pink">
* <img src="https://img.shields.io/badge/blue-                    -0488bb.svg?style=for-the-badge" alt="blue">
* <img src="https://img.shields.io/badge/gray-                    -ada8a5.svg?style=for-the-badge" alt="gray">
* <img src="https://img.shields.io/badge/black-                    -000000.svg?style=for-the-badge" alt="black">
* <img src="https://img.shields.io/badge/white-                    -ffffff.svg?style=for-the-badge" alt="white">
* <img src="https://img.shields.io/badge/green-                    -4cae4c.svg?style=for-the-badge" alt="green">
* <img src="https://img.shields.io/badge/purple-                    -9400c8.svg?style=for-the-badge" alt="purple">
* <img src="https://img.shields.io/badge/yellow-                    -ffdf00.svg?style=for-the-badge" alt="yellow">
* <img src="https://img.shields.io/badge/orange-                    -ff9e00.svg?style=for-the-badge" alt="orange">

## Classes

Classes are formed by `prefix-type-color`, examples:
* `is-color-green`
* `is-outline-green`
* `is-background-green`

## Example

[JSFiddle](https://jsfiddle.net/y3z3uu82/)