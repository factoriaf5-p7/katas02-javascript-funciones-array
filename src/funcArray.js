/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
  if(numero1 > numero2) return numero1
  if(numero1 < numero2) return numero2
  return numero1
}

export function findLongestWord(array){
  if(array.length === 0) return undefined 
  array.sort((a,b) => a.length - b.length)
  const result = array.reduce((acc, curr) => {
    acc = curr.length > acc.length ? curr : acc 
    return acc
  },'')
  return result

}
export function sumArray(array){
  if(array.length === 0) return 0
  const result = array.reduce((acc, curr) => {
    return curr + acc 

  },0)
  return result
}
export function averageNumbers(array){
  if(array.length === 0) return undefined 
  const result = array.reduce((acc, curr) => {
    return curr + acc 

  })
  return result / array.length
}
export function averageWordLength(array){
  if(array.length === 0) return undefined 
  const result = array.reduce((acc, curr) => {
    return curr.length + acc 
  },0)
  return result / array.length
}
export function uniquifyArray(array){
  if(array.length === 0) return undefined 
  const result = new Set(array)
  return Array.from(result)
}
export function doesWordExist(array, palabra){
  if(array.length === 0) return false 
  const result = array.includes(palabra) ? true : false
  return result

}
export function howManyTimes(array, palabra){
  if(array.length === 0) return undefined 
  let occurrences = 0
  let idx = array.indexOf(palabra)
  while(idx !== -1) {
    occurrences++
    idx = array.indexOf(palabra, idx + 1)
  }
  return occurrences

}
export function greatestProduct(matrix){
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxProduct = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - 3; j++) {
      const product = matrix[i].slice(j, j + 4).reduce((a, b) => a * b, 1);
      maxProduct = Math.max(maxProduct, product);
    }
  }

  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < cols; j++) {
      const product = matrix.slice(i, i + 4).reduce((acc, row) => acc * row[j], 1);
      maxProduct = Math.max(maxProduct, product);
    }
  }

  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < cols - 3; j++) {
      let product = 1;
      for (let k = 0; k < 4; k++) {
        product *= matrix[i + k][j + k];
      }
      maxProduct = Math.max(maxProduct, product);
    }
  }


  return maxProduct;
}





