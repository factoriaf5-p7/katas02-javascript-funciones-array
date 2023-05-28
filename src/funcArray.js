
export function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
export function findLongestWord(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length === 1) {
        return array[0];
    } else if (array.length > 1) {
        let longestWord = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > longestWord.length) {
                longestWord = array[i];
            }
        }
        return longestWord;
    }

}

export function sumArray(array) {
    if (array.length === 0) {
        return 0;
    } else if (array.length === 1) {
        return array[0];
    } else if (array.length > 1) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}

export function averageNumbers(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length === 1) {
        return array[0];
    } else if (array.length > 1) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }

}
export function averageWordLength(array) {
    if (array.length === 0) {
        return undefined;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].length;
    }
    return sum / array.length;

}

export function uniquifyArray(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length === 1) {
        return array;
    } else if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            for (let j = array.length; j > i; j--) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                }
            }
        }
    }
    return array;
}

export function doesWordExist(array, palabra) {
    if (array.length === 0) {
        return false;
    } else {
        let isIn = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === palabra) {
                isIn = true;
            }
        }
        return isIn;
    }
}
export function howManyTimes(array, palabra) {
    if (array.length === 0) {
        return undefined;
    } else {
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === palabra) {
                counter++
            }
        }
        return counter;
    }
}
export function greatestProduct(matrix) {

    let product = 1, resH = 1, resV = 1, resD = 1;

    for (let pV = 0; pV < matrix.length; pV++) {
        for (let pH = 0; pH < matrix[pV].length; pH++) {
            let tH = 1;
            let counter = 0;
            for (let h = pH; counter < 4 && h < matrix[pV].length; h++, counter++) {
                tH *= matrix[pV][h];
            }
            if (tH > resH) {
                resH = tH;
            }
            let tV = 1;
            counter = 0;
            for (let v = pV; counter < 4 && v < matrix.length; v++, counter++) {
                tV *= matrix[v][pH];
            }
            if (tV > resV) {
                resV = tV;
            }
            let tD = 1;
            counter = 0;
            for (let dV = pV, dH = pH; counter < 4 && dV < matrix.length && dH < matrix[pV].length; dV++, dH++, counter++) {
                tD *= matrix[dV][dH];
            }
            if (tD > resD) {
                resD = tD;
            }
        }
        if (product < resH || product < resV || product < resD) {
            if (resH > resV && resH > resD) {
                product = resH;
            } else if (resV > resH && resV > resD) {
                product = resV;
            } else if (resD > resH && resD > resV) {
                product = resD;
            }
        }
    }
    return product;
}