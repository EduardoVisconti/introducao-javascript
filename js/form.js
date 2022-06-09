const botaoAdicionar = document.querySelector('#adicionar-paciente')
//criando função anonima v
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault() //previnir que faça o default do click (enviar, att pag, etc). ;

  const form = document.querySelector('#form-adiciona')

  //pegando os dados/valores do form
  const paciente = obtemPacienteDoFormulario(form)

  //cria a tr e a td do paciente
  const pacienteTr = montaTr(paciente)

  const erro = validaPaciente(paciente)

  if (erro.length > 0) {
    const mensagemErro = document.querySelector('#mensagem-erro')
    mensagemErro.textContent = erro
    return
  }

  //adicionando o paciente na tabela
  const tabela = document.querySelector('#tabela-pacientes')

  //trazendo os tr's ^ pra tabela
  tabela.appendChild(pacienteTr)

  form.reset() //limpar o form qnd enviar o paciente
})

function obtemPacienteDoFormulario(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente
}

function montaTr(paciente) {
  //criando tr
  const pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente') //adicionando a classe

  //criando os td's
  /*const nomeTd = document.createElement(td)
  nomeTd.classList.add('info-nome')
  nomeTd.textContent = paciente.nome;*/

  //preenchendo os td's com os valores que trouxemos do form ^
  const nomeTd = montaTd(paciente.nome, 'info-nome')
  const pesoTd = montaTd(paciente.peso, 'info-peso')
  const alturaTd = montaTd(paciente.altura, 'info-altura')
  const gorduraTd = montaTd(paciente.gordura, 'info-gordura')
  const imcTd = montaTd(paciente.imc, 'info-imc')

  //colocando os td's dentro dos tr's
  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  return pacienteTr
}

function montaTd(dado, classe) {
  const td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {
  if (validaPeso(paciente.peso)) {
    return '' //se for vdd retorna uma string vazia
  } else {
    return 'O peso é inválido'
  }
}
