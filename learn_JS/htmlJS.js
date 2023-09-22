const title = document.createElement('h1');

title.innerText = 'Hola mundo desde JS';

const button = document.createElement('button');
button.innerText='click'; 

button.addEventListener('click',function () {
    title.innerText='Texto actualizado desde JS'
    alert('se hizo un clickazo alv');
})
document.body.append(title); 

document.body.append(button);