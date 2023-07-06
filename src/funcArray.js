/* Encuentra el máximo */

/* export function maxOfTwoNumbers(numero1,numero2){
    if (numero1 > numero2){
        return numero1;
    } else if (numero2 > numero1){
        return numero2;
    } else
    return numero1;
}

export function findLongestWord(array){
    let arrayLongest = array[0];

        for (let i = 0; i < array.length; i++) {
            
                if (array[i].length > arrayLongest.length) {
                    arrayLongest = array[i];
                }     
        }
        return arrayLongest;

        // return array.length > 0? array.sort((a,b) => b.length - a.length) [0] : undefined;     (ternari operator)
    }
  

export function sumArray(array){
    let sum = 0;
    for (const num of array){
        sum += num;
    }
    return sum;
}

export function averageNumbers(array){
    if (array.length == 0){
        return undefined;
    }
    else{
    let sum = 0;
    for (const num of array){
        sum += num;
    }
    sum = sum / array.length

    return sum;
}
}

export function averageWordLength(array){
    if (array.length == 0){
        return undefined;
    }
    else{
    let sum = 0;
    for (const num of array){
        sum += num.length;
    }
    sum = sum / array.length

    return sum;
}
}

export function uniquifyArray(array){

    if (array.length == 0){
        return undefined;
    }
        let answer=[];
        for (const num of array){
            if (answer.indexOf(num) === -1){
                answer.push(num);
            }
            console.log("valor de num: "+num);
        }
        console.log("valor de answer: "+answer);
        return answer;
}
*/
export function doesWordExist(array, palabra){
    
}
/*
export function howManyTimes(){}
export function greatestProduct(){}
 */




