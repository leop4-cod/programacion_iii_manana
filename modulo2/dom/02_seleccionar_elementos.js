const titulo = document.getElementById('titulo');
console.log(titulo.textContent);
const notas=document.getElementsByClassName('nota');
Array.from(notas).forEach(nota =>console.log(nota.textContent));
const items = document.getElementsByClassName('.item');
items.forEach(elemento => console.log(elemento.textContent));
const usuario = document.getElementsByName('usuario');
console.log(usuario.textContent);