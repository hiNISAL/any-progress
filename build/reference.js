const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const file = readFileSync(resolve(__dirname, '../dist/any-progress.js'), 'utf-8').split('\n');

file.unshift("///<reference path='../index.d.ts' />");

writeFileSync(resolve(__dirname, '../dist/any-progress.js'), file.join('\n'));
