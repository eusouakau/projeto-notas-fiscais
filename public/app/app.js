import { handleStatus, log } from "./utils/promiseHelpers.js";
import './utils/arrayHelpers.js';

document.querySelector('#myButton').onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(notas => notas
        .$flatMap(nota => nota.itens)
        .filter(item => item.codigo == '2143')
        .reduce((total, item) => total + item.valor, 0))
    .then(console.log)
    .catch(console.log);