const productos = [
  { nombre: "Proteina whey", descripcion: "Suplemento de proteina en polvo", precio: 32, existencia: 20, ubicacion: "Estante A" },
  { nombre: "Vitaminas C", descripcion: "Tabletas de vitamina C 500mg", precio: 8, existencia: 40, ubicacion: "Estante B" },
  { nombre: "Avena integral", descripcion: "Avena natural sin azucar", precio: 3, existencia: 50, ubicacion: "Estante C" },
  { nombre: "Aceite de oliva", descripcion: "Extra virgen 500ml", precio: 6, existencia: 15, ubicacion: "Estante D" },
  { nombre: "Yogur griego", descripcion: "Natural bajo en grasa", precio: 1.5, existencia: 25, ubicacion: "Refrigerador" },
  { nombre: "Granola", descripcion: "Mezcla de granos y frutos secos", precio: 4, existencia: 18, ubicacion: "Estante E" },
  { nombre: "Frutos secos", descripcion: "Almendras y nueces mixtas", precio: 5, existencia: 30, ubicacion: "Estante F" },
  { nombre: "Pan integral", descripcion: "Alto en fibra", precio: 2, existencia: 22, ubicacion: "Estante G" },
  { nombre: "Agua mineral", descripcion: "Botella 1L", precio: 1, existencia: 60, ubicacion: "Estante H" },
  { nombre: "Suero oral", descripcion: "Hidratacion rapida", precio: 2.5, existencia: 12, ubicacion: "Estante I" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
