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
    } else if (array.length === 1) {
        return array;
    }

    const uniqueArray = [];
    for (const item of array) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

export function doesWordExist(array, palabra){
    if (array.includes(palabra)){
        return true;
    } return false
}
export function howManyTimes(array, word) {
    if (array.length === 0) {
        return undefined;
    }

    const occurrences = array.filter(item => item === word);

    return occurrences.length;
}

export function greatestProduct(matrix) {
    if (matrix.length === 0) {
        return undefined;
    }

    let maxProduct = -Infinity;

    // Recorre la matriz y calcula el producto máximo
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Multiplica hacia la derecha
            if (j + 3 < matrix[i].length) {
                const productRight = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
                maxProduct = Math.max(maxProduct, productRight);
            }

            // Multiplica hacia abajo
            if (i + 3 < matrix.length) {
                const productDown = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
                maxProduct = Math.max(maxProduct, productDown);
            }

            // Multiplica en diagonal hacia abajo a la derecha
            if (i + 3 < matrix.length && j + 3 < matrix[i].length) {
                const productDiagonal = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
                maxProduct = Math.max(maxProduct, productDiagonal);
            }

            // Multiplica en diagonal hacia abajo a la izquierda
            if (i + 3 < matrix.length && j - 3 >= 0) {
                const productDiagonal = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
                maxProduct = Math.max(maxProduct, productDiagonal);
            }
        }
    }

    return maxProduct;
}