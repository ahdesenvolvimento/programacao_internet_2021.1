class MeuNumero{
    numero: number;
    constructor(numero: number){
        this.numero = numero;
    }

    getInteiro(){
        return Math.floor(this.numero);
    }

    getDecimal(){
        return this.numero%1
    }
}

let a = new MeuNumero(123.53);
console.log(a.getInteiro());
console.log(a.getDecimal());