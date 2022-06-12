var lis = document.querySelectorAll('li')

lis.addEventListener('click', function () {
  alert(this.textContent)
})

var botao = document.querySelector('#botao')
var input = document.querySelector('#campo')
var lista = document.querySelector('.lista')

botao.addEventListener('click', function (event) {
  var li = document.createElement('li')
  li.textContent = input.value
  lista.appendChild(li)
})
