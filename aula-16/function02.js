//primeiro numero 
let numero1 = 5

//segundo numero
let numero2 = 7

function Somar(n1=0, n2=0) { //colocar o "=0" quer dizer que se não for enviado primeiro ou o segundo numero,considere que tenha o valor de "0". Se não tivesse isso, quando fosse somar um numero com NADA, então iria dar o problema de NaN (não é um numero)
    return n1 + n2 
}

let resul = Somar(numero1, numero2)
console.log(`a soma entre ${numero1} + ${numero2} é igual a ${resul}`)