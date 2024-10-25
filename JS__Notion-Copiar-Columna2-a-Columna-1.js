const rows = document.querySelectorAll('.notion-selectable.notion-page-block.notion-collection-item')

rows.forEach((row, indice) => {
  // Seleccionar el contenido de la columna 2
  const column2 = row.querySelector('[data-col-index="1"] div div span span')
  if (column2) {
    // Seleccionar la columna 1
    const column1 = row.querySelector('[data-col-index="0"] div div span')
    if (!column1.hasChildNodes()) {
      setTimeout(() => {
        column1.click()
        column1.value = column2.innerText
      }, 1500 * indice)
    }
  }
})


const rows = document.querySelectorAll('.notion-selectable.notion-page-block.notion-collection-item')
rows.forEach((row, indice) => {

  const column1 = row.querySelector('[data-col-index="0"] div div span')
  const column2 = row.querySelector('[data-col-index="1"] div div span span')

})
