import {ContaCorrente} from "./ContaCorrente.js"
import {Cliente} from "./Cliente.js"


//instanciando o objeto Cliente na constante cliente1
const cliente1 = new Cliente("Jose", 11122233309);

//instanciando o objeto Cliente na constante cliente2
const cliente2 = new Cliente("Elisa", 88822233309);

//instanciando o objeto ContaCorrente na constante contaCorrenteJose
const contaCorrenteJose = new ContaCorrente(1001, cliente1);

const contaCorrenteElisa = new ContaCorrente(1002, cliente2);

//executando metodo depositar
contaCorrenteJose.depositar(100);

//executando metodo sacar
const valorSacado = contaCorrenteJose.sacar(50);
console.log("O valor sacado foi de:", valorSacado);

//executando metodo transfer
contaCorrenteJose.transferir(20, contaCorrenteElisa);

console.log(contaCorrenteJose);
console.log(contaCorrenteElisa);
console.log("O numero de contas aberto no ByteBank é", ContaCorrente.numeroDeContas);

