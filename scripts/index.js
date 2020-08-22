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
        await sleep(230);
        som = musica[i];
        som.currentTime = 0;
        
        if(som != Pausa) som.play();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}