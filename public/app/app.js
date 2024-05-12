import { handleStatus } from "./utils/promiseHelpers.js";

document.querySelector('#myButton').onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(notas => console.log(notas))
    .catch(err => console.log(err));