/*Faça um programa para calcular o valor gasto de uma viagem.

Você terá 3 variáveis:
Preço do combustível; (R$/L)
Distãncia percorrida por litro de combustível (L/Km);
Distância da viagem (Km);

Imprima no console o valor do combustível que será gasto nessa viagem.
*/

const precoCombustivel = 5.79;
let kmPorLitro = 10;
let distanciaViagem = 100

let combustivelgasto = distanciaViagem / kmPorLitro;
let valorCombustivelGasto = combustivelgasto * precoCombustivel;

console.log('Serão gastos ' + valorCombustivelGasto + ' litros de gasolina');
