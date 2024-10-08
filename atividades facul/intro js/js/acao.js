const dolar = 5.65  // Valor constante, nao vai mudar durante o código
var nome = "Kinho"
var sobrenome = "Bolan"

var texto = document.getElementById("textoB")
const liLista = document.querySelectorAll("li")

console.log(liLista[0].innerHTML)
liLista[0].hidden = true
liLista[1].hidden = true
liLista[2].innerHTML = "Chocolate"


texto.innerHTML = nome + " " + sobrenome
console.log(nome + " " + sobrenome) // + além de somar, também concatena | " " vazio serve como espaço
console.log(dolar)

