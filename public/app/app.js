import { handleStatus } from "./utils/promiseHelpers.js";

document.querySelector('#myButton').onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(notas => notas.map(nota => nota.itens))
    .then(itens => itens.filter(item => item.codigo == '2143'))
    .then(itens => itens.reduce((total, item) => total + item.valor, 0))
    .then(total => console.log(total))
    .catch(err => console.log(err));