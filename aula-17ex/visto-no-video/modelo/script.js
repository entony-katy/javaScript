let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

//verificando se o valor estar dentro do que pedimos
function IsNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 1000 ) {
        return true
    } else {
        return false
    }
}

//verificando se o valor ja foi adicionado no vetor
function InLista (n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false 
    }
}

function Adicionar () {
    if (IsNumero(num.value) && InLista(num.value, valores)) {
//adicionando o valor dentro do vetor.       
        valores.push(Number(num.value)) 

//criando o elemento que ira ficar dentro da lista e dando o seu conteudo.
        var itens = document.createElement('option')
        itens.innerHTML += `o valor ${Number(num.value)} foi adicionado.`

//adicionando a tag criada dentro do select.
        lista.appendChild(itens)

    } else { //caso o valor seja invalido ou ja exista dentro do vetor.
        alert('valor invalido ou ja encontrado na lista.')
    }

//para a area de adicionar ficar vazia e logo em seguida ficar focada
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function Finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
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
    let  media = soma / tot

    res.innerHTML += `<p>Ao todo temos ${tot} cadastro.</p>`
    res.innerHTML += `<p>O maior numero inserido é ${maior}.</p> `
    res.innerHTML += `<p>O menor valor inserido foi o ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores é igual a ${soma}.</p>`
    res.innerHTML += `<p>A media dos numeros é igual a ${media.toFixed(2).replace('.' , ',')}</p>`
}

