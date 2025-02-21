let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value.trim();
    
    if (amigo === "") { 
        alert("Campo vacío. Por favor ingrese el nombre de un amigo");
    } else if (!isNaN(amigo)) {
        alert("No ingrese números. Por favor ingrese el nombre del amigo.");
    } else {
        listaAmigos.push(amigo);
        mostrarAmigos();
        limpiar();
    }
}

function mostrarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; // Limpia la lista antes de agregar los elementos
    let parrafo = document.querySelector('p');

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    let cantidadAmigos = listaAmigos.length;
    parrafo.innerHTML = `Ha ingresado ${cantidadAmigos} ${(cantidadAmigos === 1) ? 'amigo' : 'amigos'}`;
}

function limpiar() {
    document.querySelector('#amigo').value = "";
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega amigos antes de realizar el sorteo.");
        return;
    }

    const elementoAleatorio = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultadoSorteo = document.querySelector('#resultado');
    resultadoSorteo.innerHTML = `El amigo seleccionado es: ${elementoAleatorio}`;
    
}
    // alert("El amigo seleccionado es: " + elementoAleatorio);

function reiniciar() {
    listaAmigos = []; // Vaciar la lista de amigos
    document.querySelector('#listaAmigos').innerHTML = ""; // Borrar la lista en la web
    document.querySelector('#resultado').innerHTML = ""; // Borrar el resultado del sorteo
    document.querySelector('p').innerHTML = "No hay amigos ingresados."; // Reiniciar el contador
    limpiar(); // Limpiar el campo de entrada
}