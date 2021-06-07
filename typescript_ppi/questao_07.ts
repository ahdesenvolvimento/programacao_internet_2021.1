const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var pares = (array:any) =>{
    for (let valor of array){
        if (valor%2 == 0){
            console.log(valor);
        }
    }
}

pares(array);