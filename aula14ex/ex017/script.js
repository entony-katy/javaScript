function Calcular() {
    var txtnumero = document.getElementById('txtn')
    var dados = document.getElementById('dados')
    var res = document.getElementById('res')
    var c = 0
    var soma = 0
    var numero = Number(txtnumero.value)
    res.innerHTML = '' // para quando alterar o valor adicionado, no ficar se repetindo varias vezes 
    while (c <= 10) {
        soma = c * numero 
        res.innerHTML += `${numero} X ${c} = ${soma} <br> `
        c++
    }
}