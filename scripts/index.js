const teclas = document.querySelectorAll('.tecla');
var isPlaying = false;
var stop = false;

async function stop_song(){
    stop=true;
    await sleep(500);
    stop = false;
}

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
    if (isPlaying==false){
        const C = document.getElementById("C");
        const D = document.getElementById("D");
        const E = document.getElementById("E");
        const F = document.getElementById("F");
        const G = document.getElementById("G");
        const Pausa = document.getElementById("Pausa");

        const musica = [C, D, E, F, Pausa, F, F, Pausa, C, D, C, D, Pausa, D, D, Pausa, C, G, F, E, Pausa, E, E, Pausa, C, D, E, F];

        isPlaying=true;
        for(var i = 0; i < musica.length; i++){
            if (stop==true) break;

            som = musica[i];
            
            await sleep(230);
            
            som.currentTime = 0;
            
            if(som != Pausa) som.play();
        }
        isPlaying=false;
    }
}

async function brilhaBrilhaEstrelinha(){
    if (isPlaying==false){
        const C = document.getElementById("C");
        const D = document.getElementById("D");
        const E = document.getElementById("E");
        const F = document.getElementById("F");
        const G = document.getElementById("G");
        const A = document.getElementById("A")
        const Pausa = document.getElementById("Pausa");

        const musica = [C, C, G, G, A, A, G, G, F, F, E, E, D, D, Pausa, C, Pausa, F, F, E, E, D, D, G, G, F, F, E, E, D, D, Pausa, C, Pausa, C, G, G, A, A, G, G, F, F, E, E, D, D, Pausa, C];

        isPlaying=true;
        for(var i = 0; i < musica.length; i++){
            if (stop==true) break;

            som = musica[i];
            
            await sleep(410);
            
            som.currentTime = 0;
            
            if(som != Pausa) som.play();
        }
        isPlaying=false;
    }
}

async function maryHadALittleLamb(){
    if (isPlaying==false){
        const C = document.getElementById("C");
        const D = document.getElementById("D");
        const E = document.getElementById("E");
        const Pausa = document.getElementById("Pausa");
        musica = [E, D, C, D, E, E, E, Pausa, D, D, D, Pausa, E, E, E, Pausa, E, D, C, D, E, E, E, Pausa, E, D, D, E, D, C]

        isPlaying=true;
        for(var i = 0; i < musica.length; i++){
            if (stop==true) break;
            await sleep(425);
            musica[i].currentTime = 0;
            if(musica[i] != Pausa) musica[i].play();
        }
        isPlaying=false;
    }    
}

async function parabensPraVoce(){
    if (isPlaying==false){
        const A = document.getElementById("A");
        const B = document.getElementById("B");
        const C = document.getElementById("C");
        const D = document.getElementById("D");
        const E = document.getElementById("E");
        const F = document.getElementById("F");
        const G = document.getElementById("G");
        const Pausa = document.getElementById("Pausa");
        musica = [C, C, D, C, F, E, Pausa, C, C, D, C, G, F, F, Pausa, A, A, B, A, F, E, D, Pausa, B, B, A, F, G, F, F,]

        isPlaying=true;
        for(var i = 0; i < musica.length; i++){
           
            if (stop==true) break;
            
            await sleep(350);
            
            musica[i].currentTime = 0;
           
            if(musica[i] != Pausa) musica[i].play();
        }
        isPlaying=false;
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
