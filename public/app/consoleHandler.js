import { EventEmitter } from "./utils/eventEmitter.js";
import { log } from "./utils/promiseHelpers.js";

EventEmitter.on('itensTotalizados', log);