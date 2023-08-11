/* Encuentra el máximo */
/* 
export function maxOfTwoNumbers(numero1,numero2){}
export function findLongestWord(array){}
export function sumArray(array){}
export function averageNumbers(array){}
export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(array, palabra){}
export function howManyTimes(){}
export function greatestProduct(){} */


export function maxOfTwoNumbers(numero1, numero2)  {
    //return Math.max(numero1, numero2)
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

export function findLongestWord(array){
    let longestWord = array[0];
    for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
    longestWord = array[i];
         }  
      }
        return longestWord
    }


//can also be written as return array.length > 0 ? array.sort((a, b) => b.length - a.length)[0]:undefined


export function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//Calculating the Average - averageNumbers #4'


export function averageNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } 

    if (sum == 0) {
        return undefined
    } else {
        return sum / array.length;
    }
}


export function averageWordLength(array){
    let aveWordLength = 0;
    for (let i = 0; i < array.length; i++) {
        aveWordLength += array[i].length;
    } 
    
    if (aveWordLength == 0) {
        return undefined
    } else { 
        return aveWordLength / array.length;
    }
}

//Unique Arrays - uniquifyArray #6

export function uniquifyArray(array){
    if (array.length === 0) {
        return undefined;
      }
    
      const uniqueArray = array.reduce((accumulator, currentElement) => {
        if (!accumulator.includes(currentElement)) {
          accumulator.push(currentElement);
        }
        return accumulator;
      }, []);
    
      return uniqueArray;
    
}

//Finding Elements - doesWordExist #7

export function doesWordExist(array, word) {
    if (array.includes(word)) {
        return true;
      }
      return false;
}

// Counting Repetion - howManyTimes #8

export function howManyTimes(array, times) {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((count, element) => {
        if (element === times) {
          count++;
        }
        return count;
      }, 0);
}

export function greatestProduct(matrix) {



    const numRows = matrix.length;
    //number of rows is equal to the number of columns
    const numCols = matrix[0].length;
    //keeping track of the largest number found
    let maxProduct = 0;
  
    // Helper function to calculate the product of an array of numbers
    function calculateProduct(array) {
      return array.reduce((product, num) => product * num, 1);
    }
  
    // Check horizontally
    //iterating over each row
    for (let row = 0; row < numRows; row++) {
        //for each row we iterate, iterate over each column
      for (let col = 0; col < numCols -3; col++) {
        //we are extracting a 4 value slice from the array to calculate the prodct and then we store the value in the product variable
        const horizontalSlice = matrix[row].slice(col, col + 4);
        const product = calculateProduct(horizontalSlice);
        //update the max product if the new calculate product larger
        maxProduct = Math.max(maxProduct, product);
      }
    }
  
    // Check vertically
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows - 3; row++) {
        const verticalSlice = [matrix[row][col], matrix[row + 1][col], matrix[row + 2][col], matrix[row + 3][col]];
        const product = calculateProduct(verticalSlice);
        maxProduct = Math.max(maxProduct, product);
      }
    }
  
    // Check diagonally
    for (let row = 0; row < numRows - 3; row++) {
      for (let col = 0; col < numCols - 3; col++) {
        const diagonalSlice = [
          matrix[row][col], matrix[row + 1][col + 1], matrix[row + 2][col + 2], matrix[row + 3][col + 3]
        ];
        const product = calculateProduct(diagonalSlice);
        maxProduct = Math.max(maxProduct, product);
      }
    }
  
    return maxProduct; 
  }