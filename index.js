import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente1
const cliente1 = new Cliente("Pietro", 11122233309);


//cliente2
const cliente2 = new Cliente("Dora", 11133322209);


//Conta cliente 1
const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);



let valor = 0;
ContaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrenteRicardo);
console.log(cliente2);

console.log("Numero de contas abertas: ", ContaCorrente.numeroDeContas);