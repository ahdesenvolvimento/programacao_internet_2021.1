enum DiasSemana{
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo"
}

namespace DiasSemana{
    export function isDiaUtil(s:string){
        if (s == 'sabado' || s =='domingo'){
            return false;
        }
        return true;
    }
}

