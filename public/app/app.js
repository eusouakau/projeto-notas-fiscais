import './utils/arrayHelpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';
import { log } from './utils/promiseHelpers.js';

const action = debounceTime(500,takeUntil(3, () => service.sumItems('2143').then(log).catch(log)));


document.querySelector('#myButton').onclick = action;