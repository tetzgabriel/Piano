const teclas = document.querySelectorAll('.tecla');
console.log(teclas)
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