function verInfo(elemento, titulo, descripcion) {
    const overlay = elemento.querySelector('.info');
    overlay.innerHTML = `<h3>${titulo}</h3><p>${descripcion}</p>`;
    overlay.style.opacity = '1';
}

function ocultarInfo(elemento) {
    const overlay = elemento.querySelector('.info');
    overlay.style.opacity = '0';
}

const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modalVideo');

function verPelicula(videoSrc) {
    modal.style.display = 'flex';
    modalVideo.src = videoSrc;
    modalVideo.load();
    modalVideo.play().catch(err => {
        console.warn('No se pudo reproducir automáticamente:', err);
    });
}

function cerrarModal() {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.removeAttribute('src');
    modalVideo.load();
    modal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target === modal) {
        cerrarModal();
    }
};
