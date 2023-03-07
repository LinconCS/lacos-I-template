// // Prática Guiada
// // Exercício 1
// function somaNUmerosInseridos (){
//     let numero = Number(prompt(`Digite um número:`))

//     let soma = 0
//     console.log(`Soma antes do laço: ${soma}`)

//     while(numero !== 0){
//         soma = soma + numero
//         numero = Number(prompt(`Digite outro número:`))

//         console.log(numero)

//         console.log(`Soma depois de cada repetição: ${soma}`)
//     }

//     console.log(`A soma dos números inseridos é: ${soma}`)
// }

// somaNUmerosInseridos()



// // Exercícios 2
// function imprimeNumerosAteNumeroEscolhido(){
//     const numeroEscolhido = Number(prompt(`Digite um número:`))

//     // 'i++ é igual a 'i = i + 1' ou 'i += 1'
//     for(let i = 0; i <= numeroEscolhido; i++){
//         console.log(i)        
//     }

// }

// imprimeNumerosAteNumeroEscolhido()



// // Exercício 3
// const numeros = [78, -643, 0 , 37, 429, 10742, 24]

// const numeros2 = [400, 32, 77, 1]

// function imprimeMsgArray(paramArray){
//     console.log(paramArray)

//     for(let i = 0; i < array.length; i++){
//         console.log(`O elemento de índice ${i} é ${array[i]}`)
//     }
// }

// imprimeMsgArray(numeros)
// imprimeMsgArray(numeros2)
// imprimeMsgArray([1, 4, 67, 8, 93])



// Exercícios de Fixação - Para Guardar na Cabeça - I
// function usuarioAdmin (){

//     let tipoUsuario = prompt(`Digite o tipo de usuário de acordo com a legenda abaixo:
//     'A' para administrador
//     'B' para usuário comum
//     'C' para usuário assinante`).toUpperCase()


//     while(tipoUsuario !== 'A'){
//         console.log('Acesso negado!')

//         tipoUsuario = prompt(`Digite o tipo de usuário de acordo com a legenda abaixo:
//     'A' para administrador
//     'B' para usuário comum
//     'C' para usuário assinante`).toUpperCase()
//     }

//     console.log(`Boas-vindas, admin!`)
// }

// usuarioAdmin()


// // Exercícios de Fixação - Para Guardar na Cabeça - II
// function tabuadaDois () {
//   for(let i = 1; i <= 10; i++){
// 	    console.log(`2 x ${i} = ${2*i}`)
//   }
// }

// tabuadaDois()

// // Outra Forma
// function tabuada(numero) { 
//     for(i = 1; i <= 10 ;i++) {
//         let resultado = numero * i
//         console.log(`${numero} x ${i} = ${resultado}`)
//     }
// }
// tabuada(2)


// Exercícios de Fixação - Para Guardar na Cabeça - III
const palavrasArray = ['elefante', 'gato', 'cachorro', 'macaco', 'capivara']

function meuArray(array) {
    console.log(array)

    for(let i = 0; i < array.length; i++){
        const palavraMaiuscula = array[i].toUpperCase()
        
        console.log(i, palavraMaiuscula)
    }

    console.log(`Saiu do laço!`)
}

meuArray(palavrasArray)
