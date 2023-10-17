let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(
    function(duvida){
        duvida.addEventListener('click', () => {
            duvida.classList.toggle('ativa');
        })
    }
)