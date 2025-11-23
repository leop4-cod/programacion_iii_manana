let parrafo = null;
document.getElementById("crear").addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Este es unn parrafo dinamico desde JavaScript";
    document.getElementById("contenedor").appendChild(parrafo);
});
document.getElementById("eliminar").addEventListener("click", () =>{
    if (parrafo) parrafo.remove();
})

function saludar () {
    alert ("Hola desde una funcion")
}
document.getElementById("parrafo")
    .addEventListener("dbclick", () =>{
    alert ("Ss hizo doble click en el parrafo")
})

document.getElementById('nombre')
    .addEventListener('input', (e) =>{
    console.log("Escribiendo", e.target.value)
})