document.querySelector('#myButton').onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(res => {
        if(res.ok) return res.json();
        return Promise.reject(res.statusText);
    })
    .then(notas => console.log(notas))
    .catch(err => console.log(err));