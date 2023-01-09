/* eslint-disable no-console */

import { sum } from './utils/sum.js';
import { dublicate } from './utils/dublicate.js';

console.log('process.env.MODE', process.env.MODE);

console.log(sum(1, 2));

console.log(dublicate('hello'));

console.log('process.env.MODE', process.env.VALIK);

const paragraph = document.createElement('p');

paragraph.textContent = `Mode is ${process.env.MODE}`;

document.body.append(paragraph);
