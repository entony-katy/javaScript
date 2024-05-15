function carregar() {
//convertendo as tags em obejtos
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
//pegando a hora do dispositivo
   var agora = new Date()
    var hora = agora.getHours()

//criando as funções
    if (hora >= 0 && hora < 12 ) {
        //bom dia
        msg.innerHTML = `agora são ${hora} horas`
        document.body.style.background = '#E0AE1C'
    } else if (hora <= 18 ) {
        //boa tarde
        msg.innerHTML = `agora são ${hora} horas`
        document.body.style.background = '#f14603'
        foto.src = 'imagens/tarde.png'
        
    } else {
        //boa noite
        msg.innerHTML = `agora são ${hora} horas`
        document.body.style.background = '#054065'
        foto.src = 'imagens/noite.png'
    }
    

}