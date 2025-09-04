let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
        return;
    }
    listaAmigos.push(nombre);
    mostrarLista();
    limpiarCampo();
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos dos amigos para hacer el sorteo.');
        return;
    }

    let amigoSorteo = [...listaAmigos];
    for (let i = amigoSorteo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigoSorteo[i], amigoSorteo[j]] = [amigoSorteo[j], amigoSorteo[i]];
    }

    for (let i = 0; i < amigoSorteo.length; i++) {
        if (listaAmigos[i] === amigoSorteo[i]) {
            sortearAmigo();
            return;
        }
    }

    const ul = document.getElementById('resultado');
    ul.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${listaAmigos[i]} -> ${amigoSorteo[i]}`;
        ul.appendChild(li);
    }
}

function limpiarLista() {
    listaAmigos = [];
    mostrarLista();
    document.getElementById('resultado').innerHTML = '';
    limpiarCampo();
}