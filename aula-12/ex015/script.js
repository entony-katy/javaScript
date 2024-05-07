function Carregar(){
//pegando as tag e colocando numa variavel
    var txtIdade = document.getElementById('txtIdade')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')
    var botaoFem = document.getElementById('fem')
    var botaoMas = document.getElementById('mas')

//pegando o ano atual e convertendo o tipo do dado recebido
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = Number(txtIdade.value)
    var idade = ano - fano
    var teste = document.getElementById('teste')
//-----------------------------------------
    var genero = '' //variavel vazia
    var Uma = '' //para mudar de 'um homem' para 'uma mulher'
//-----------------------------------------
//              ESTRUTURA DE VALIDAÇÃO
    if (String(fano).length == 1 || String(fano).length == 2 || String(fano).length == 3 ||fano > ano ) {
       alert('[erro] preencha o campo de idade corretamente')
    } else if (botaoMas.checked)  {
        genero = 'homem'
        Uma = 'um'
        if (idade < 12 ) {
            img.src = 'imagens/crianca-mas.png'
        } else if (idade <= 17 ) {
            img.src = 'imagens/adolecente-mas.png'
        } else if (idade <= 40 ) {
            img.src = 'imagens/adulto-mas.png'
        } else {
            img.src = 'imagens/idoso-mas.png'
        }
    } else {
        genero = 'mulher'
        Uma = 'uma'
        if (idade < 12 ) {
            img.src = 'imagens/crianca-fem.png'
        } else if (idade <= 17) {
            img.src = 'imagens/adolecente-fem.png'
        } else if (idade <= 40 ) {
            img.src = 'imagens/adulta-fem.png'
        } else {
            img.src = 'imagens/idosa-fem.png'
        }

        
    }
//modificando o texto para depois ficar centralizado e a imagem para ficar mais distante
    res.style.textAlign = 'center'
    img.style.padding = '10px'
//exibindo o texto e a imagem
    res.innerHTML = `Detectamos ${Uma} ${genero} de ${idade} anos`
    res.appendChild(img)
    

//

//TESTANDO ADICIOANAR E MUDAR UMA TAG CRIADA PELO JS
    var p = document.createElement('p')
    p.setAttribute('id', 'paragr')
    var p = 'ola, isso é mais um teste'
    teste.innerHTML = p
    
    
}