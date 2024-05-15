var num = [8 , 9 , 4, 2 , 6]
num[5] = 3 //adicionndo o valor 3 na 5° posição.
num.push(7) // adicionando o valor 7 na ultima posição.
num.sort() //ordenando os valores dentro do vetor, do menor para o maior.
console.log(`o vetor NUM tem ${num}`) // exibindo a variavel composta
console.log(`o vetor NUM tem ${num.length} elementos`) //vendo quantos elementos tem o vetor 

var res = 3 //criando uma variavel que tenha o valor da posição pesquisada

if (res == -1) { //caso o valor seja igual -1
    console.log('o numero pesquisado não existe dentro do vetor')
} else { //caso o valor pesquisado dentro do vetor exista
    console.log(`o valor pesquisado estar na posição ${num.indexOf(res)}`)
}
