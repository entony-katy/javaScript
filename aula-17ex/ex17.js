var valores = [5, 8, 3, 9, 7 ]
var menor = 0 
var maior = 0
var soma = 0
var cadastro = 0
var media = 0
for (pos in valores) {
    if ( menor == 0 || valores[pos] < menor) {
        menor = valores[pos]
    }

    if (valores[pos] > maior) {
        maior = valores[pos]
    }
    cadastro = cadastro + 1 
    soma = soma + valores[pos]
    media = soma / cadastro
}

console.log(`temos ao todo ${cadastro} numeros`)
console.log(`o maior numero dentro de ${valores} é ----------- ${maior}`)
console.log(`o menor valorer dentro do vetor acima é ----------- ${menor}`)
console.log(`a soma de todos é ----------- ${soma}`)
console.log(`a media de todos os numeros é ---------- ${media}`)