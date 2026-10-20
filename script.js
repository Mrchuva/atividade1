const cores = [
    'red',
    'blue',
    'pink',
    'purple',
    'orange',
    'green',
    'gold',
    'teal'
];

function mudarCor() {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corAleatoria = cores[indiceAleatorio];
    const quadrado = document.getElementById('quadrado');

    quadrado.style.background = corAleatoria;
    quadrado.style.backgroundImage = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('sortear');

    if (botao) {
        botao.addEventListener('click', mudarCor);
    }
});
