/* 

Desafio
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída
A saída corresponde a um valor Booleano como no exemplo abaixo:

Entrada	Saída
[ ]

        true
( )

          true
[ ) 

          false
 
/ IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var isValid = function(s) {    
    const stack = []; 

 //TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.


}

*/

let valor = gets()

print(isValid(valor))

function isValid(s) {    
    
  let letras = s.split('')
  const stack = ["(",")","{","}","[","]"]; 
  let b = false
  
  for(let i = 0; i < stack.length; i++){
    if ((letras[0] === stack[i]) && (letras[1] === stack [i + 1])){
     b = true;
    } 
  }
  return b;
}