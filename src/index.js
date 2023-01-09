/* eslint-disable no-console */

import { sum } from './utils/sum.js';
import { dublicate } from './utils/dublicate.js';

console.log(sum(1, 2));

console.log(dublicate('hello'));

const paragraph = document.createElement('p');

paragraph.textContent = `Mode is ${process.env.MODE}, base url is: ${process.env.BASE_URL}`;

document.body.append(paragraph);
