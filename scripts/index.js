const teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        tocar(tecla);
    });
});

function tocar(nota){
    const som = document.getElementById(nota.dataset.nota);
    
    som.currentTime = 0;
    som.play();
}

async function doremifa(){
    const C = document.getElementById("C");
    const D = document.getElementById("D");
    const E = document.getElementById("E");
    const F = document.getElementById("F");
    const G = document.getElementById("G");
    const Pausa = document.getElementById("Pausa");

    const musica = [C, D, E, F, Pausa, F, F, Pausa, C, D, C, D, Pausa, D, D, Pausa, C, G, F, E, Pausa, E, E, Pausa, C, D, E, F];

    for(var i = 0; i < musica.length; i++){
        som = musica[i];
        
        await sleep(230);
        
        som.currentTime = 0;
        
        if(som != Pausa) som.play();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeColor(key) {
    const whites = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    var keyClass = 'preta-active'
    for(index in whites) {
        if(key.getAttribute('data-nota') == whites[index]) keyClass = 'branca-active'
    }
    for(let i = 0; i <= 1; i++) {
        key.classList.toggle(keyClass)
        await sleep(200)
    }
}

const playKeys = {
    //Notas Naturais
    A: () => {
        tocar(teclas[0])
        changeColor(teclas[0])
    },
    S: () => {
        tocar(teclas[2])
        changeColor(teclas[2])
    },
    D: () => {
        tocar(teclas[4])
        changeColor(teclas[4])
    },
    F: () => {
        tocar(teclas[5])
        changeColor(teclas[5])
    },
    G: () => {
        tocar(teclas[7])
        changeColor(teclas[7])
    },
    H: () => {
        tocar(teclas[9])
        changeColor(teclas[9])
    },
    J: () => {
        tocar(teclas[11])
        changeColor(teclas[11])
    },
    //Acidentes
    W: () => {
        tocar(teclas[1])
        changeColor(teclas[1])
    },
    E: () => {
        tocar(teclas[3])
        changeColor(teclas[3])
    },
    T: () => {
        tocar(teclas[6])
        changeColor(teclas[6])
    },
    Y: () => {
        tocar(teclas[8])
        changeColor(teclas[8])
    },
    U: () => {
        tocar(teclas[10])
        changeColor(teclas[10])
    },
}

document.body.onkeypress = evt => {
    const actualKey = evt.code.substring(3, evt.code.length)
    playKeys[actualKey]()
}
