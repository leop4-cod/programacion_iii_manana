const boton = document.getElementById('agregar')
boton.addEventListener('click', () => {
    const texto=document.getElementById('texto').ariaValueMax;
    if (texto.trim ()!==''){
        const li =document.createElement('li');
        li.textContent=texto;
        document.getElementById('listaTareas').appendChild(li);
        document.getElementById('tarea').ariaValueMax('');
    }
})