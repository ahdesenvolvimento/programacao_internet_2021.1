class Personagem{
    id:number
    nome:string
    energia:number
    constructor(i:number, n:string, e:number){
        this.id = i
        this.nome = n
        this.energia = e
    }
    estaVivo(){
        if (this.energia == 0){
            return false
        }
        return true
    }
    defenderAtk(atk:number){
        if (atk > this.energia){
            this.energia = 0
        }else{
            this.energia -= atk
        }
    }
}

class Soldado extends Personagem{
    forca:number
    constructor(i:number, n:string, e:number, f:number){
        super(i, n, e)
        this.forca = f
    }

    atacar(p:Personagem){
        console.log("Energia do personagem antes do ataque: " + p.energia)
        p.defenderAtk(this.forca)
        console.log("Energia do personagem atacado: " + p.energia)
    }
    defenderAtk(atk:number){
        if (atk > this.energia){
            this.energia = 0
        }else{
            this.energia -= (atk/2)
        }
    }
}

class Cavaleiro extends Soldado{
    constructor(i:number, n:string, e:number, f:number){
        super(i, n, e, f)
    }
    atacar(p:Personagem){
        console.log("Energia do personagem antes do ataque: " + p.energia)
        p.defenderAtk(this.forca*2)
        console.log("Energia do personagem atacado: " + p.energia)
    }
    defenderAtk(atk:number){
        if (atk > this.energia){
            this.energia = 0
        }else{
            this.energia -= (atk/3)
        }
    }
}

let s = new Soldado(1, 'Jose', 100, 10)
let p = new Personagem(3, 'Pedro', 100)
let s2 = new Soldado(2, 'Carlos', 100, 8)
let c = new Cavaleiro(4, 'Nome', 100, 10)
s.atacar(c)