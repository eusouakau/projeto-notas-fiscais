import { handleStatus } from '../utils/promiseHelpers.js';

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filtersItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notasService = {
    listAll() { return fetch(API).then(handleStatus); },
    sumItems(code) { return this.listAll().then(sumItems(code)) }
}