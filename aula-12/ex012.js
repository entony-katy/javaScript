var agora = new Date() //funçao para armazenar o dados de hora, mes, ano... do dispotivo
var hora = agora.getHours() //função para pegar a hora do dispotivo e adicionando a variavel "hora"
console.log(`agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('bom dia')
} else if (hora <= 18) {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}