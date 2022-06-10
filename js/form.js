const botaoAdicionar = document.querySelector('#adicionar-paciente')
//criando função anonima v
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault() //previnir que faça o default do click (enviar, att pag, etc). ;

  const form = document.querySelector('#form-adiciona')

  //pegando os dados/valores do form
  const paciente = obtemPacienteDoFormulario(form)

  //cria a tr e a td do paciente
  const pacienteTr = montaTr(paciente)

  const erros = validaPaciente(paciente)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }

  //adicionando o paciente na tabela
  const tabela = document.querySelector('#tabela-pacientes')

  //trazendo os tr's ^ pra tabela
  tabela.appendChild(pacienteTr)

  form.reset() //limpar o form qnd enviar o paciente
  const mensagensErro = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''
})

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = '' //controlar o HTML dentro de um elemento. Sempre que exibir uma mensagem de erro ele apaga e mostra as novas.

  erros.forEach(function (erro) {
    //para cada erro do meu array, executar a função abaixo
    let li = document.createElement('li') //essa função recebe o erro que está passando e cria uma li preenchendo com o valor do erro e coloca dentra da ul. v
    li.textContent = erro
    ul.appendChild(li)
  })
}

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
  const erros = []

  if (paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso é inválido')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('A Altura é inválida')
  }

  if (paciente.gordura.length == 0) {
    erros.push('A gordura não pode ser em branco')
  }

  if (paciente.peso.length == 0) {
    erros.push('O peso não pode ser em branco')
  }

  if (paciente.altura.length == 0) {
    erros.push('A altura não pode ser em branco')
  }

  return erros
}
