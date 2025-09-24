
    const info = document.getElementById('info');

    function verinfo(e, texto) {
        info.textContent = texto;
        info.style.left = e.pageX + 'px';
        info.style.top = (e.pageY - 20) + 'px';
        info.style.opacity = '1';
  }

    function ocultarInfo() {
        info.style.opacity = '0';
  }
