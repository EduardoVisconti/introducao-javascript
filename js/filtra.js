const campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function () {
  console.log(this.value)
  const pacientes = document.querySelectorAll('.paciente')

  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i]
      const tdNome = paciente.querySelector('.info-nome')
      const nome = tdNome.textContent
      //const expressao = new RegExp(this.value, 'i')
      const comparavel = nome.substr(0, this.value.length)
      const comparavelMinusculo = comparavel.toLowerCase()
      const valorDigitadoMinusculo = this.value.toLowerCase()

      if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
        paciente.classList.add('invisivel')
      } else {
        paciente.classList.remove('invisivel')
      }
    }
  }
})
