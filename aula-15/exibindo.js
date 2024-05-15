var valores = [ 2, 5, 6 ,9 ,3]
console.log(valores)
valores.sort()
//                     metodo de exibir os valores de um Array usando o FOR
// for (var pos = 0 ; pos < valores.length ; pos++) {
//     console.log(`o elementos ${valores[pos]} estar na posição ${pos}`)
// }

for (pos in valores) {
    console.log(`o elemento na posição ${pos} tem o valor ${valores[pos]}`)
}
