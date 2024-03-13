let mensajes = ["Buenos días", "Eres increíble", "Te quiero mucho", "¡Feliz San Valentín!"];
let indiceActual = 0;

document.getElementById("cambiarMensajeBtn").addEventListener("click", function() {
    indiceActual = (indiceActual + 1) % mensajes.length;
    document.getElementById("mensaje").innerText = mensajes[indiceActual];
    sueltaRosas();
});

function sueltaRosas() {
    let maxRosas = 10; // Número máximo de rosas
    for (let i = 0; i < maxRosas; i++) {
        let rosa = document.createElement('div');
        rosa.innerText = '🌹';
        document.body.appendChild(rosa);
        rosa.style.position = 'absolute';
        rosa.style.left = Math.random() * window.innerWidth + 'px';
        rosa.style.animation = 'caer 3s linear ' + (i / maxRosas) + 's forwards';

        // Estilos adicionales para las "rosas"
        rosa.style.fontSize = '24px';
        rosa.style.color = 'red';

        // Limpieza después de que la animación termine
        rosa.addEventListener('animationend', function() {
            rosa.remove();
        });
    }
}
