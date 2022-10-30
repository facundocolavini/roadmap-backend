"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require('colors/safe');
exports.default = colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
module.exports = colors;
