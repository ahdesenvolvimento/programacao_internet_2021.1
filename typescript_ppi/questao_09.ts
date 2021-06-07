class Transacao{
    private _valor:number;
    private _desconto:number;

    constructor(x:number, y:number){
        this._valor = x;
        this._desconto = y;
    }

    calcule(){
        //-(this.getDesconto()/100);
        return (this.getvalor()*(1-(this.getdesconto()/100)));
    }
    getvalor(){
        return this._valor;
    }

    getdesconto(){
        return this._desconto
    }
}

let x = new Transacao(100, 10);

console.log(x.calcule());