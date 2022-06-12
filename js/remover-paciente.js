let tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function (event) {
  /* event.target.parentNode.classList.add('fadeOut')
     
     setTimeout(function () {
       event.target.parentNode.remove()
     }, 500)
  */
  let alvoEvento = event.target //quem sofre o evento em si
  let paiDoAlvo = alvoEvento.parentNode // tr = paciente = remover
  paiDoAlvo.classList.add('fadeOut')

  setTimeout(function () {
    paiDoAlvo.remove()
  }, 500)

  
})
