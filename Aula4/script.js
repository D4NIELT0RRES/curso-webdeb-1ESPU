// Criação de strings
let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';

// console.log("Título:", titulo);
// console.log("Descrição:", descricao);

// // Comprimento da string
// console.log("Comprimento do título:", titulo.length);

// // Acesso a caracteres individuais
// console.log("Primeiro caractere:", titulo[0]);
// console.log("Último caractere:", titulo[titulo.length - 1]);
// console.log("Caractere na posição 8:", titulo.charAt(8));

// // Concatenação tradicional
// let categoria = "Estudo";
// let infoCompleta = `Categoria:${categoria} - ${titulo}`;
// console.log(infoCompleta);

////////////////////////////////////////////////////////////////////////

// // Template strings (ES6+)
// let dataCriacao = "01/06/2025";
// let resumo = `Tarefa: ${titulo} (${categoria})
// Criada em: ${dataCriacao}
// Descrição: ${descricao}`;
// console.log("Template string:");
// console.log(resumo);

////////////////////////////////////////////////////////////////////////


// // Métodos para busca em strings
// console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript"));
// console.log("'JavaScript' está presente?", titulo.includes("JavaScript"));
// console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));
// console.log("Termina com 'Script'?", titulo.endsWith("Script"));

////////////////////////////////////////////////////////////////////////

// Função que trunca uma string se ela for maior que um tamanho máximo

// neste cenário é opcional o valor da variavel maxLenght entao se o usuario nao digitar nada vai ser automaticamente atribuido o valor 30
// ja na variavel texto, como nao foi atribuido um valor caso nao digitado, vai dar erro
// function truncarDescricao(texto, maxLength = 30) {
//   if (texto.length <= maxLength) {
//     return texto;
//   }
//   return texto.substring(0, maxLength) + "...";
// }

// let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";
// console.log(descricaoLonga);
// console.log(descricaoLonga.length);
// console.log(truncarDescricao(descricaoLonga, 20));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let tags = "javascript,programação,web,frontend";

// let arrayTags = tags.split(",");

// console.log(arrayTags);

// let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];

// let textoTarefas = listaTarefas.join(" | ");

// console.log("Lista de tarefas formatada:", textoTarefas);

//////////////////////////////////////////////////////////////////////////

const numero = 9.7;
console.log("Math.round(9.7):", Math.round(numero)); //arredonda para o mais perto do 9.7 
console.log("Math.floor(9.7):", Math.floor(numero)); //arredonda pra baixo
console.log("Math.ceil(9.7):", Math.ceil(numero)); // arredonda pra cima
console.log("Math.trunc(9.7):", Math.trunc(numero)); // anula oque tem depois do ponto


// Função para gerar número aleatório entre min e max
function numeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatório entre 1 e 10:", numeroAleatorioEntre(1, 10));