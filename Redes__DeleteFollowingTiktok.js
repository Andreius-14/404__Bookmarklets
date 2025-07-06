let montoEliminar = parseInt(prompt("Cantidad de Seguidos a eliminar:", "100"));
let eliminados = 0;

let intervaloA = 300;
let intervaloB = 300;

let listaSiguiendo =
  "button[data-e2e='follow-button'][aria-label*='Siguiendo']";
let contenedor = document.querySelector(
  "div[data-e2e='follow-info-popup'] [class*='DivUserListContainer']",
);

function clickUno() {
  let procesados = 0;

  let botones = document.querySelectorAll(listaSiguiendo);

  if (botones.length === 0) {
    contenedor.scrollBy(0, 1000); // baja para cargar más
    setTimeout(clickUno, intervaloA);
    return;
  }

  for (const [i, value] of [...botones].entries()) {
    if (procesados >= montoEliminar - eliminados) break;
    // value.click();
    setTimeout(() => {
      value.scrollIntoView({ behavior: "smooth", block: "start" });

      value.click();
      eliminados++;
      //msm
      console.log(`✅ Dejó de seguir: ${eliminados}`);
      if (eliminados === montoEliminar) {
        console.log("🎉 Proceso terminado.");
      }
    }, intervaloB * i);

    procesados++;
  }

  if (eliminados < montoEliminar) {
    setTimeout(clickUno, intervaloA + intervaloB * botones.length);
  }
}

clickUno();
