function Banco (conta, saldo, tipcont, agencia){
    conta = '12956';
    saldo = '200';
    tipcont = 'Conta corrente';
    agencia = '70224-0';

    this.buscarSaldo = function(){
        console.log('Seu saldo é de: R$'+ Banco.saldo);
    }

    this.deposito = function (valor){
        this.saldo += valor;
        console.log('Depósito efetuado.')
    }

    this.saque = function (valor){
        if(this.saldo < valor){
            console.log('Saldo insuficiente para saque.')
            return false
        }else{
            this.saldo -= valor;
            console.log('Saque efetuado.');
        }
    }

    this.conta = function (){
        console.log(conta);
    }
}

var info_conta = function() {
    console.log('Conta:' + Banco.conta)
    console.log('Agência: ' + Banco.agencia)
    console.log('Tipo de conta:' + Banco.tipcont)
    console.log('Saldo disponível: ' + Banco.saldo)
}

info_conta()
    //Depósito:
    deposito(100)
    printdeposito()
    buscarSaldo()
    //Saque:
    saque(50)
    printsaque()
    buscarSaldo