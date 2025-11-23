const cuadro = document.getElementById('cuadro');

function cambiarColor() {
  const colores = ['#7ed957', '#ffb347', '#a3d977', '#f4a261', '#90be6d'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = randomColor;
}

function aumentarTamano() {
  const width = parseInt(cuadro.style.width);
  const height = parseInt(cuadro.style.height);
  cuadro.style.width = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';
}

function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#7ed957';
}
