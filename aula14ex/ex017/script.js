function calcular() {
//pegando as variaveis
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabu')

    if (num.value == 0 ) { //caso o input esteja vazia 
        alert('Adicione um valor abaixo')
    } else { // caso tenha um valor adicionado
        
        var c = 0 //crinando a variavel contador
        n = Number(num.value)
 // transformando o valor da variavel em tipo de Number
        tab.innerHTML = ''
 // deixando o valor da tabuada vazia
        for ( c ; c <= 10; c++) {
            var item = document.createElement('option') 
// criando um opt dentro da tabuada 

            item.value = `valor${c}` 
// adicionando o valor para ser exebido para o PHP

            var soma = c * n 
//criando uma variavel que guarde a soma do multiplicação do numero recebido com o valor do contador

            item.innerHTML += `${n} X ${c} = ${soma}` 
// dando um valor de texto ao opt, que sera o seu texto de exibição

            tab.appendChild(item)
// adicionando o opt dentro da tabuada.
        }
    }
}