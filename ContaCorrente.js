import { Cliente } from "./Cliente.js"

//classe ContaCorrente gera o objeto ContaCorrente
export class ContaCorrente {
    static numeroDeContas = 0
    agencia;
    _cliente;
    // "_" usado como convencao pela comunidade para atributo de classe
    //proposta para # se torar o private https://github.com/tc39/proposal-class-fields
    _saldo = 0;


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    //metodo sacar
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    // metodo depositar
    depositar(valor) {
        //Early return, verificar condicoes nao permitidas e retornar em caso de condicao nao desejada satisfeita
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    //metodo transferir
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}