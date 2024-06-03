import { handleStatus, log } from "./utils/promiseHelpers.js";
import './utils/arrayHelpers.js';

const sumItems = notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == '2143')
    .reduce((total, item) => total + item.valor, 0);
document.querySelector('#myButton').onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(sumItems)
    .then(console.log)
    .catch(console.log);