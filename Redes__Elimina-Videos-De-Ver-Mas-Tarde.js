(function () {
  let montoEliminar = 10;
  let rutaMenu =
    '#menu.style-scope.ytd-playlist-video-renderer  button[aria-label="Menú de acciones"]';
  let rutaEliminar = "#contentWrapper .style-scope.ytd-menu-popup-renderer";

  let botonesMenu = document.querySelectorAll(rutaMenu);

  // console.log(botonesMenu);
  botonesMenu.forEach((boton, index) => {
    if (index < montoEliminar) {
      setTimeout(() => {
        boton.click();

        setTimeout(
          () => {
            let opciones = Array.from(document.querySelectorAll(rutaEliminar));

            let eliminar = opciones.filter((el) =>
              el.innerText.includes("Eliminar"),
            );

            if (eliminar) {
              eliminar.forEach((element) => element.click());
              console.log(`✅ Eliminado el video ${index + 1}`);
            } else {
              console.warn(`⚠️ No se encontró opción para el video ${index}`);
            }
          },

          600,
        );
      }, index * 1000);
    }
  });

  //
  //
  //
})();

//Pidele a Chatgpt convertirlo en BookMarlets
