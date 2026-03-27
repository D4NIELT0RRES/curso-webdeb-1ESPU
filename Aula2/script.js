// let a = 5, b = "5";

// console.log(a == b);   // false (igualdade)
// console.log(a === b);  // false (igualdade estrita)
// console.log(a != b);   // true (diferente)
// console.log(a !== b);  // true (diferente estrito)
// console.log(a < b);    // true (menor que)
// console.log(a > b);    // false (maior que)
// console.log(a <= b);   // true (menor ou igual)
// console.log(a >= b);   // false (maior ou igual)

//=========================================================

// let idade = 25;
// let temCarteira = true;

// // AND (&&) - ambas condições devem ser verdadeiras
// if (idade >= 18 && temCarteira) {
//   console.log("Pode dirigir");
// }

// // OR (||) - pelo menos uma condição deve ser verdadeira
// if (idade < 18 || !temCarteira) {
//   console.log("Não pode dirigir");
// }

// // NOT (!) - inverte o valor booleano
// if (!temCarteira) {
//   console.log("Precisa de carteira");
// }

//=========================================================


// let prioridade = 3; // 1: baixa, 2: média, 3: alta

// if (prioridade === 3) {
//   console.log("Prioridade Alta");
// }else if (prioridade === 2){
//     console.log("Prioridade Média")
// }else if (prioridade === 1){
//     console.log("Prioridade Baixa")
// }else if (prioridade === 4){
//     console.log("Prioridade Altissíma")
// }else {
//   console.log("Prioridade Desconhecida");
// }

//=========================================================

// letDiaSemana = new Date().getDay

// switch (letDiaSemana) {
//     case 0:
//         console.log("Domingo");
//         break;
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dia inválido");
//         break;
// }

//=========================================================


// for (let i = 0; i < 5; i++) {
//   console.log("Contagem:", i);
// }

//=========================================================


// let contador = 0;
// while (contador < 5) {
//   console.log("Contagem:", contador);
//   contador++;
// }

// let contador = 0;
// do {
//   console.log("Contagem:", contador);
//   contador++;
// }while(contador < 5)


//=========================================================




// let nivelAcesso = 3

// if(nivelAcesso == 2){
//     console.log("Acesso parcial")
// }else if(nivelAcesso == 3){
//     console.log("Acesso total")
// }else{
//     console.log("Acesso negado")
// }


//=========================================================


// let valor1 = 20
// let valor2 = 10
// let operador = "-"

// switch (operador) {
//     case "+":
//         console.log(valor1 + valor2)
//         break;
//     case "-":
//         console.log(valor1 - valor2)
//         break;
//     case "/":
//         console.log(valor1 / valor2)
//         break;
//     case "*":
//         console.log(valor1 * valor2)
//         break;
// }


let contador = 3;
do {
  console.log("Contagem:", contador);
  contador--;
}while(contador >= 1)
