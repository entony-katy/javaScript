var botao = document.getElementById('botao')
botao.addEventListener('click' , contar)
function contar() {
   var ini = document.getElementById('txti') 
   var fim = document.getElementById('txtf') 
   var passo = document.getElementById('txtp')
   var res = document.getElementById('res')
   
   
   if (ini.value == 0 || fim.value == 0) {
      alert('preencha todos os dados !')
      res.innerHTML = 'preencha todos os campos !'
   } else {
      ini = Number(ini.value)
      fim = Number(fim.value)
      passo = Number(passo.value)

      if (passo == 0) {
         window.alert('[erro] valor de passo invalido ! Considerando PASS0 1')  
         
         passo = 1
      }
      
      res.innerHTML = `contando: <br> `
      res.style.textAlign = 'left'

      if (ini < fim ) { 
      for ( ini ; ini <= fim ; ini += passo) {
         res.innerHTML += `${ini} 👉 `
      }
      } else {
      for (ini ; ini >= fim ; ini -= passo) {
         res.innerHTML += `${ini} 👉 `
      }
   }
   res.innerHTML += "🏁"
   }

}
