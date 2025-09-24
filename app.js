// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo'); 
    const nombre = input.value.trim();

   
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

   
    amigos.push(nombre);
    input.value = '';

    
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    
    if (amigos.length === 0) {
        lista.innerHTML = '<li>No hay amigos en la lista</li>';
        return;
    }

    let html = '';
    for (let i = 0; i < amigos.length; i++) {
        html += `<li>${amigos[i]}</li>`; 
    }
    lista.innerHTML = html;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }

   
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

   
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}</li>`;
}



mostrarAmigos();
