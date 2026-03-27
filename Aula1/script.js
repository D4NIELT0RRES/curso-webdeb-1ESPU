    
    console.log("Daniel")
    console.info("Informacao")
    console.warn("Aviso")
    console.error("Erro")

    console.tabble([
        { id: 1, tarefa: "Estudar JS"},
        { id: 2, tarefa: "Práticar código"}
    ])

    console.group("Grupo de logs")       
        console.log("Pedro")
        console.info("Informacao")
        console.warn("Aviso")
        console.error("Erro")
    console.groupEnd()

    console.timer("Timer")
    if (1===1) {
        console.log("Um é igual")
    }
    console.timerEnd("Timer")


    var antigo = "Forma antiga"

    let userName = "Maria"

    const API_URL = "url"





 let texto = "Ola"
console.log("texto =" + texto + "tipo:"+typeof(texto))

let numero = 42
console.log("numero =" + numero + "tipo:"+typeof(numero))

let isCompleted = false
console.log("isCompleted=" + isCompleted + "tipo:"+typeof(isCompleted))

let semValor 
console.log("semValor=" + semValor + "tipo:"+typeof(semValor))

let nulo = nulo
console.log("nulo:" + nulo + "tipo:"+typeof(nulo))

//Sinmbol cria um identificador unico para aquela variavel dentro dos parenteses
let uniqueId = Symbol("Id")
console.log(uniqueId)
console.log(typeof(uniqueId))

let bigNumero = 9999999999n
console.log("bigNumero:" + bigNumero + "tipo:"+typeof(bigNumero))


let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  }
};



const tasks = [ 
    {
        id: 1,
        title: "Aprender JavaScript",
        completed: false,
        assignee: {
            name: "João",
            email: "joao@example.com"
        }
    },
    []
]

console.log(tasks)
console.table(tasks)


let hoje = new Date()
console.log(hoje)

let amanha = new Date("03-20-2026")
console.log(amanha)



// let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
// console.log(pattern.test("+55(11)92299-0899")); // true
// console.log(pattern.test("+55(11)2299-0899"));  // true

let convertido1 = String(42)
console.log("Convertido:" + convertido1 + "tipo:" + typeof(convertido1))

let convertido2 = 42+""
console.log("Convertido:" + convertido2 + "tipo:" + typeof(convertido2))

let convertido3 = Number("42")
console.log("Convertido:" + convertido3 + "tipo:" + typeof(convertido3))

let convertido4 = parseInt("42")
console.log("Convertido:" + convertido4 + "tipo:" + typeof(convertido4))

let convertido5 = parseFloat("42.1")
console.log("Convertido:" + convertido5 + "tipo:" + typeof(convertido5))

let convertido6 = Boolean("texto")
console.log("Convertido:" + convertido6 + "tipo:" + typeof(convertido6))

let convertido7 = Boolean()
console.log("Convertido:" + convertido7 + "tipo:" + typeof(convertido7))


let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000


let contador1 = 0
let contador2 = 0

console.log(++contador1)
console.log(++contador1)

console.log(contador2++)
console.log(contador2++)



let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)




console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)



console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)

