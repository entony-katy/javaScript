var agora = new Date()
var DiaSen = agora.getDay() //função para retornar o valor do dia da semana
/*
    domingo =  0
    segunda =  1
    terça =    2
    quarta =   3
    quinta =   4
    sexta =    5
    sabado =   6
*/ 
var hoje = "" //estamos criando uma variavel vazia, pois iremos ainda atribuir um valor a ela. que seria o nome do dia da semana
switch (DiaSen) {
    case 0:
       var hoje = 'domingo' // dando um valor para a variavel 'hoje'
       break
    case 1:
        var hoje = 'segunda'
        break
    case 2:
        var hoje = 'terça'
        break
    case 3:
        var hoje = 'quarta'
        break
    case 4:
        var hoje = 'quinta'
        break
    case 5: 
        var hoje = 'sexta'
        break
    case 6:
        var hoje = 'sabado'
        break
    default:
        console.log('[dia da semana invalido]')
}
console.log(`hoje é ${hoje}`)