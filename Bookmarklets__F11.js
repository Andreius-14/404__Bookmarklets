(function() {
    function toggleFullScreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen && document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
    toggleFullScreen(); 
}());
