/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
    if (numero1 < numero2){
        return numero2
    } else if(numero2<numero1){
        return numero1
    } else if (numero1==numero2){
        return numero1
    }
}
export function findLongestWord(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length === 1) {
        return array[0];
    } else {
        return array.reduce((longestWord, currentWord) => {
            if (currentWord.length > longestWord.length) {
                return currentWord;
            }
            return longestWord;
        }, array[0]);
    }
}
export function sumArray(array){}
export function averageNumbers(array){}
export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(array, palabra){}
export function howManyTimes(){}
export function greatestProduct(){}





