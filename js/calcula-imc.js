const titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

const pacientes = document.querySelectorAll('.paciente')

for (let i = 0; 1 < pacientes.length; i++) {
  let paciente = pacientes[i]

  const tdPeso = paciente.querySelector('.info-peso')
  const peso = tdPeso.textContent //Pegando o conteúdo dele = peso.

  const tdAltura = paciente.querySelector('.info-altura')
  const altura = tdAltura.textContent

  const tdImc = paciente.querySelector('.info-imc')

  let pesoEhValido = validaPeso(peso)
  let alturaEhValida = validaAltura(altura)

  if (!pesoEhValido) {
    pesoEhValido = false
    tdImc.textContent = 'Peso inválido'
    paciente.classList.add('paciente-invalido')
  }

  if (!alturaEhValida) {
    alturaEhValida = false
    tdImc.textContent = 'Altura inválida!'
    paciente.classList.add('paciente-invalido')
  }

  if (alturaEhValida && pesoEhValido) {
    let imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}

function calculaImc(peso, altura) {
  let imc = 0

  imc = peso / (altura * altura)

  return imc.toFixed(2)
}

function validaPeso(peso) { //não tinha posto o parametro "peso" (bug1)
  if (peso >= 0 && peso <= 1000) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) { //não tinha posto o parametro "altura" (bug1). o que é este valor?
  if (altura >= 0 && altura <= 3.0){
    return true
  } else {
    return false
  }
}
