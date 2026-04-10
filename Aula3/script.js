// function saudacao(nome) {
//   return `Olá, ${nome}!`;
// }

// console.log(saudacao("Daniel")); // Saída: Olá, Daniel!

//===========================================================================


// Exemplo: Parâmetros e Valores Padrão

// // Função que exibe detalhes de uma tarefa
// function exibirTarefa(id, titulo, prioridade) {
//   console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
// }
// exibirTarefa(1, "Estudar JavaScript", "alta");

// // Função com valores padrão para parâmetros não informados
// function criarTarefa(titulo, descricao = "Sem descrição", 
//                      prioridade = "média", concluida = false) {
//   return {
//     id: Date.now(), // Gera um ID único com base no timestamp
//     titulo,
//     descricao,
//     prioridade,
//     concluida,
//     criada: new Date()
//   };
// }

// const tarefa = criarTarefa("Estudar funções");
// console.log(tarefa);