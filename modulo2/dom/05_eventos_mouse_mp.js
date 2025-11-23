const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.background = 'orange';
});
caja.addEventListener('mouseout', () => {
    caja.style.background = 'gray';
});
caja.addEventListener('click', () => {
    alert('Registro dietetico abierto');
});

const areaTouch = document.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'purple';
});
areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'green';
});
areaTouch.addEventListener('click', () => {
    alert('Consulta dietetica tocada');
});
