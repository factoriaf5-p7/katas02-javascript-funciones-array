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

export function sumArray(array) {
    if (array.length === 0) {
        return 0;
    } else if (array.length === 1) {
        return array[0];
    } else if (array.every(x => x === 0)) {
        return 0;
    } else {
        return array.reduce((acc, curr) => acc + curr, 0);
    }
}

export function averageNumbers(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length === 1) {
        return array[0];
    }
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

export function averageWordLength(array) {
    if (array.length === 0) {
        return undefined;
    } else {
        const totalLength = array.reduce((acc, word) => acc + word.length, 0);
        return totalLength / array.length;
    }
}
export function uniquifyArray(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length === 1){
        return array;
    } 
}
export function doesWordExist(array, palabra){}
export function howManyTimes(){}
export function greatestProduct(){}