//                        estrutura de repetição com o teste logico no começo
var c = 1
while (c <= 6) {
    console.log(`estamos no passo ${c}`)
    c++
}
console.log('=========================')

//                       estrutura de repetiçaõ com teste logico no final 
c = 1 //tivemos que reiniar o valor do contador pois ele pegou o valor anterios.
do {
    console.log(`estamos no passo ${c}`)
    c++
} while (c <= 6 )
