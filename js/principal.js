const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

const paciente = document.querySelector("#primeiro-paciente");

const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent; //Pegando o conteúdo dele = 100.

const tdAltura = paciente.querySelector(".info-altura");
const altura = tdAltura.textContent;

const tdImc = paciente.querySelector(".info-imc")
const imc = peso / (altura * altura);

tdImc.textContent = imc;