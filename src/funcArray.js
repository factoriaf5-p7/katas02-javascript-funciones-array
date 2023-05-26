/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
  let numMax = 0;
  if (numero1 > numero2) {
    numMax = numero1;
  } else if (numero2 > numero1) {
    numMax = numero2;
  } else if (numero1 === numero2) {
    numMax = numero1;
  }

  return numMax;
}
export function findLongestWord(array) {
  let longestWord = "";
  if (array.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (longestWord.length < array[i].length) {
        longestWord = array[i];
      } else if (longestWord.length === array[i].length) {
        longestWord = longestWord;
      }
    }
  }

  return longestWord;
}
export function sumArray(array) {
  const suma = array.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  return suma;
}
export function averageNumbers(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    const suma = array.reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
    const total = suma / array.length;
    return total;
  }
}
export function averageWordLength(array) {
  let sumWordLength = 0;
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    sumWordLength = array[0].length;
  } else {
    sumWordLength = array.join("").length;
  }

  return sumWordLength / array.length;
}
export function uniquifyArray(array) {
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    return array;
  } else {
    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }

    return uniqueArray;
  }
}
export function doesWordExist(array, palabra) {
  let existWord = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
      existWord = true;
    }
  }
  return existWord;
}
export function howManyTimes(array, palabra) {
  if (array.length === 0) {
    return undefined;
  }
  let sumTimes = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
      sumTimes++;
    }
  }
  return sumTimes;
}
export function greatestProduct() {}
