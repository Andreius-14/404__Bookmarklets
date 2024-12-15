(function() {
    function toggleFullScreen() {
        // Verifica si hay un elemento en pantalla completa
        if (document.fullscreenElement) {
            // Si hay un elemento en pantalla completa, salimos de modo pantalla completa
            document.exitFullscreen && document.exitFullscreen();
        } else {
            // Si no hay un elemento en pantalla completa, solicitamos pantalla completa
            document.documentElement.requestFullscreen();
        }
    }
    toggleFullScreen(); // Llama a la función para alternar el estado
}());
