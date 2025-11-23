let parrafo = null;

document.getElementById("crear").addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Registro dietetico creado desde JavaScript";
    document.getElementById("contenedor").appendChild(parrafo);
});

document.getElementById("eliminar").addEventListener("click", () =>{
    if (parrafo) parrafo.remove();
});

function saludar () {
    alert("Mensaje nutricional desde una funcion");
}

document.getElementById("parrafo")
    .addEventListener("dblclick", () =>{
        alert("Se hizo doble click para ver recomendaciones dieteticas");
});

document.getElementById("nombre")
    .addEventListener("input", (e) =>{
        console.log("Escribiendo nombre del paciente", e.target.value);
});
