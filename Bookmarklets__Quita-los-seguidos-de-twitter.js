(function () {
  let montoEliminar = prompt("Cantidad de Seguidos a eliminar:", "100");
  let eliminados = 0;

  let intervaloA = 800;
  let intervaloB = 400;

  let listaSiguiendo = "button[data-testid*='unfollow']";
  let listaDejarDeSeguir = "button[data-testid='confirmationSheetConfirm']";

  function clickUno() {
    let boton = document.querySelector(listaSiguiendo);

    if (!boton) {
      globalThis.scrollBy(0, 1000); // baja para cargar más
      setTimeout(clickUno, intervaloA);
      return;
    }

    boton.click();

    //Segundo Boton
    setTimeout(() => {
      let confirmar = document.querySelector(listaDejarDeSeguir);
      if (confirmar) confirmar.click();

      eliminados++;
      console.log(`✅ Dejó de seguir: ${eliminados}`);

      if (eliminados < montoEliminar) {
        setTimeout(clickUno, intervaloA);
      } else {
        console.log("🎉 Proceso terminado.");
      }
    }, intervaloB);
  }

  clickUno();

  //
  //
  //
})();

//Pidele a Chatgpt convertirlo en BookMarlets
