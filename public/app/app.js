import './utils/arrayHelpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import { log, timeoutPromise, retry } from './utils/promiseHelpers.js';
import { EventEmitter } from './utils/eventEmitter.js';

const operations = pipe(partialize(takeUntil, 3), partialize(debounceTime, 500));
const action = operations(() => retry(3, 300, () => timeoutPromise(200, service.sumItems('2143'))
    .then(total => EventEmitter.emit('itensTotalizados', total)).catch(log)));

document.querySelector('#myButton').onclick = action;