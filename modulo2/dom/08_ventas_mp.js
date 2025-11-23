const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCasas');
let alimentos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('direccion').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const calorias = parseFloat(document.getElementById('precio').value.trim());

  if (nombre && descripcion && !isNaN(calorias)) {
    const nuevoAlimento = { id: Date.now(), nombre, descripcion, calorias };
    alimentos.push(nuevoAlimento);
    renderizarAlimento(nuevoAlimento);
    formulario.reset();
  }
});

function renderizarAlimento({ id, nombre, descripcion, calorias }) {
  const div = document.createElement('div');
  div.className = 'alimento';
  div.setAttribute('data-id', id);

  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <p><strong>Calorias: ${calorias.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;

  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.alimento');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    alimentos = alimentos.filter(a => a.id !== id);
    tarjeta.remove();
  }
});
