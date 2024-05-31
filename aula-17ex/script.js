var Valor = document.getElementById('txtv')
var tabela = document.getElementById('valores')
var res = document.getElementById('res')
var valores = []


function Adicionar() {
    if (VerificarNumero(Valor.value) || Dentro(Valor.value, valores)) {
        alert('[valor invalido ou ja encontrado na lista]')
        tabela.innerHTML = ''
        res.innerHTML = ''
    } else {
//criando o opt e adicionando dentro da tabela
        let itens = document.createElement('option')
        itens.innerHTML = `valor ${Valor.value} foi adicionado`
        tabela.appendChild(itens)

//adicionando o valor dentro do vetor        
        valores.push(Number(Valor.value))
    }

//para limpar o campo do numero e focar nele
    Valor.value = ''
    Valor.focus()
} 

function Finalizar() {
    if (vazio(valores)) {
        alert('[adicione algum valor]')
    } else {
    let tot = valores.length
    let maior = valores[pos]
    let menor = valores[pos]
    let soma = 0
    for (var pos in valores) {
        soma += valores[pos]
        
        if (valores[pos] > maior ) {
            maior = valores[pos]
        }

        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    let media = soma / tot

//local de exibição dos valores
    res.innerHTML += `a soma dos valores é igual a ${soma}`
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
    res.innerHTML += `<p> O maior valor é ${maior}</p>`
    res.innerHTML += `<p> O menor valor é ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>a media dos valores é ${media}</p>`
    }
}

//vendo se o valor ja existe dentro do vetor
function Dentro(n, Valores) {
    var res = Valores.indexOf(n)
     if (res == -1 ){
         return false
     } else {
         return true
     }
 }

 //verificando se o valor dele estar dentro do que pedimos
function VerificarNumero(n) {
    if (n == 0 || n < 1 || n >= 100) {
       return true
    } else {
        return false
    }
}

function vazio(l) {
    if (l == 0 ) {
        return true
    } else {
        return false
    }
}