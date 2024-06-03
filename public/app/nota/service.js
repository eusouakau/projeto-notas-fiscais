import { handleStatus } from '../utils/promiseHelpers.js';

const API = 'http://localhost:3000/notas';

export const notasService = {
    listAll() { return fetch(API).then(handleStatus); }
}