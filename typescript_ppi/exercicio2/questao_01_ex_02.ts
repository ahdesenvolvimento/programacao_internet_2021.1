interface Iteravel<T>{
    value: T
    getAtual: () => T
    getProximo: () => T
    isPrimeiro: () => T
    isUltimo: () => T
    irParaPrimeiro: () => T
}

class ColecaoArray<T> implements Iteravel{
    value: T
    constructor(value:T){
        this.value = value
    }
    getAtual(i) : T{
        return this.value[i]
    }
    getProximo(i) : T{
        return this.value[i+1]
    }
    isUltimo(i:number) : boolean{
        if (i==this.value.length-1){
            return true
        }
        return false
    }
    isPrimeiro(i:number) : boolean{
        if (i==0){
            return true
        }
        return false
    }
}

const x = new ColecaoArray<Array>([4, 10, 3, 'a'])
// x.getAtual();
console.log(x.getAtual(2));
for (let i = 0;i < x.value.length;i++){
    console.log("Estou no " + x.getAtual(i));
    console.log("Proximo: "+ x.getProximo(i));
    if (x.isUltimo(i)){
        console.log('Estou no último')
    }
    if (x.isPrimeiro(i)){
        console.log('Estou no primeiro')
    }
}

