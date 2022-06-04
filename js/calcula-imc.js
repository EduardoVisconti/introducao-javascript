const titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

const pacientes = document.querySelectorAll('.paciente')

for (let i = 0; 1 < pacientes.length; i++) {
  let paciente = pacientes[i]

  const tdPeso = paciente.querySelector('.info-peso')
  const peso = tdPeso.textContent //Pegando o conteúdo dele = 100.

  const tdAltura = paciente.querySelector('.info-altura')
  const altura = tdAltura.textContent

  const tdImc = paciente.querySelector('.info-imc')

  let pesoEhValido = true
  let alturaEhValida = true

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false
    paciente.classList.add('paciente-invalido')
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaEhValida = false
    tdAltura.textContent = 'Altura inválida!'
  }

  if (alturaEhValida && pesoEhValido) {
    const imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  } else {
    tdImc.textContent = 'Altura e/ou peso inválidos!'
  }
}

function calculaImc(peso, altura){
  let imc = 0;

  imc = peso / (altura * altura)

  return imc.toFixed(2)
}
