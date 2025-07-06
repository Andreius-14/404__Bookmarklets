let montoEliminar = parseInt(prompt("Cantidad de Seguidos a eliminar:", "100"));
let contador = 0;
let eliminados = 0;

let intervaloA = 100;
let intervaloB = 400;

let listaSiguiendo = "button[data-testid*='unfollow']";
let listaDejarDeSeguir = "button[data-testid='confirmationSheetConfirm']";

function clickUno() {
  let boton = document.querySelectorAll(listaSiguiendo);

  if (boton.length === 0) {
    globalThis.scrollBy(0, 1000); // baja para cargar más
    setTimeout(clickUno, intervaloA);
    return;
  }

  for (const value of [...boton].entries()) {
    if (contador >= montoEliminar) break;
    value.click();
    contador++;
  }

  setTimeout(() => {
    let confirmar = document.querySelectorAll(listaDejarDeSeguir);
    confirmar.forEach((el, i) => {
      if (eliminados < montoEliminar) {
        setTimeout(() => {
          el.click();
          eliminados++;
          console.log(`✅ Dejó de seguir: ${eliminados}`);
          if (eliminados === montoEliminar) {
            console.log("🎉 Proceso terminado.");
          }
        }, intervaloB * i);
      }
    });

    if (eliminados < montoEliminar) {
      setTimeout(clickUno, intervaloA + intervaloB * confirmar.length);
    }
  }, 300); // esperar que aparezca el popup
}

clickUno();
