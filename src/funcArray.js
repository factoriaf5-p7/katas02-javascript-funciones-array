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

export function doesWordExist(array, palabra){
    if(array.length === 0) return false 
    const result = array.includes(palabra) ? true : false
    return result
}

export function howManyTimes(array, palabra){
      if(array.length === 0) return undefined 
  let occurrences = 0
  let arrayIndex = array.indexOf(palabra)
  while(arrayIndex !== -1) {
    occurrences++
    arrayIndex = array.indexOf(palabra, arrayIndex + 1)
  }
  return occurrences
}
*/

export function greatestProduct(array){
    let greatestP = 0;

    // Horizontal
    for (let i = 0; i < array.length; i++) {
        for (let ii = 0; ii <= array[ii].length - 4; ii++) {
          const singleP =
            array[i][ii] * array[i][ii + 1] * array[i][ii + 2] * array[i][ii + 3];
          if (singleP > greatestP) {
            greatestP = singleP;
          }
        }
      }
    
    // Vertical
    for (let i = 0; i <= array.length - 4; i++) {
        for (let ii = 0; ii < array[i].length; ii++) {
          const singleP =
            array[i][ii] * array[i + 1][ii] * array[i + 2][ii] * array[i + 3][ii];
          if (singleP > greatestP) {
            greatestP = singleP;
          }
        }
      }

    // Esquina Diagonal inferior
    for (let i = 0; i <= array.length - 4; i++) {
        for (let ii = 0; ii <= array[i].length - 4; ii++) {
          const singleP =
            array[i][ii] *
            array[i + 1][ii + 1] *
            array[i + 2][ii + 2] *
            array[i + 3][ii + 3];
          if (singleP > greatestP) {
            greatestP = singleP;
          }
        }
      }

    // Esquina Diagonal superior 
    for (let i = 3; i < array.length; i++) {
        for (let ii = 0; ii <= array[i].length - 4; ii++) {
          const singleP =
            array[i][ii] *
            array[i - 1][ii + 1] *
            array[i - 2][ii + 2] *
            array[i - 3][ii + 3];
          if (singleP > greatestP) {
            greatestP = singleP;
          }
        }
      }

      return greatestP;
}





