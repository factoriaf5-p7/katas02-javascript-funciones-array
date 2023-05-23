import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import { //arraySum,
  //compareResult,
 // findIndex,
 // fourBiggestNbr,
 // getDiagonal,
  //getTotalperLine,
  //inverseMatrix,
  //rowMultiply,
greatestProduct }  from '../src/bonus.js';

//test
// it('1+1 = 2',()=>assert.strictEqual(1+1,2));


// describe('Count the sum total of one array', ()=> {
//     it('Check if is a function', ()=> {
//         assert.strictEqual(typeof arraySum,'function');
//       });

//       it('Return 20 when all numberof the array are 5',() => {
//         let array = [5, 5, 5, 5];
//         assert.strictEqual(arraySum(array),20);
//       });
// });

// describe('Return a new array with total sum of each line', () => {
//   it('Check if is a function', () => {
//     assert.strictEqual(typeof getTotalperLine, 'function');
//   });

//   it('should return [5, 10, 15, 20, 25]', () => {
//     let matriz = [
//       [1, 1, 1, 1, 1],
//       [2, 2, 2, 2, 2],
//       [3, 3, 3, 3, 3],
//       [4, 4, 4, 4, 4],
//       [5, 5, 5, 5, 5]
//     ];
//     assert.deepStrictEqual(getTotalperLine(matriz),[5, 10, 15, 20, 25])
//   })
// })


// describe('Return the index of the bigest number of the array', () => {
//   it('Check if is a function', () => {
//     assert.strictEqual(typeof findIndex, 'function');
//   });

//   it('Should return 2 when the third one is the biggest nbr', () => {
//     let array = [2, 12, 45, 3, 20];
//     assert.strictEqual(findIndex(array), 2);
//   });

// });

// describe('return an array with teh biggest 4 numbers of the array', () => {
//   it('Check if is a function', () => {
//     assert.strictEqual(typeof fourBiggestNbr, 'function');
//   });

//   it('Should return 80', () => {
//     let matriz =[
//       [2, 12, 45, 3, 20],
//       [2, 2, 2, 2, 2],
//       [3, 3, 3, 3, 3],
//       [4, 4, 4, 4, 4],
//       [5, 5, 5, 5, 5]
//     ];
//     assert.deepStrictEqual(fourBiggestNbr(matriz), [45, 20, 12, 3]);
//   });

//   it('Return 1 when all the numbers of the arrays are 1', ()=> {
//     let matriz = [
//       [1, 1, 1, 1],
//       [1, 1, 1, 1],
//       [1, 1, 1, 1],
//       [1, 1, 1, 1]
//     ];
//     assert.deepStrictEqual(fourBiggestNbr(matriz),[1, 1 ,1, 1]);
//   });

// })

// describe('return the product of the 4 biggest number of the array', () => {
//   it('Check if is a function', () => {
//     assert.strictEqual(typeof rowMultiply, 'function');
//   });

//   it('Should return 80', () => {
//     let array = [45, 20, 12, 3];
//     assert.strictEqual(rowMultiply(array), 32400);
//   });
// });

// describe('Inverse matrix - transform columns to lines and vice-versa', () => {
//   it('Check if is a function', () => {
//     assert.strictEqual(typeof inverseMatrix, 'function');
//   });

//   it('Should return inverse matrix', () => {
//     let matriz = [
//       [2, 12, 45, 3],
//       [2, 2, 2, 2],
//       [3, 3, 3, 3],
//       [4, 4, 4, 4],
//     ];
//     assert.deepStrictEqual(inverseMatrix(matriz), [
//       [2, 2, 3, 4],
//       [12, 2, 3, 4],
//       [45, 2, 3, 4],
//       [3, 2, 3, 4]
//     ]);
//   });
// });


// describe('Get diagonals and transform into matrix', () => {
//   it('Check if it is a function', () => {
//     assert.strictEqual(typeof getDiagonal, 'function');
//   });

//   it('Should return diagonal matrix', () => {
//     let matriz = [
//       [2, 12, 45, 3],
//       [2, 2, 2, 2],
//       [3, 3, 3, 3],
//       [4, 4, 4, 4],
//     ];
    
//     assert.deepStrictEqual(getDiagonal(matriz), [[2, 2, 3, 4], [4, 3, 2, 3]]);
//   });
// });


// describe('Compare results: line, column , diagonal', () => {
//   it('Check if it is a function', () => {
//     assert.strictEqual(typeof compareResult, 'function');
//   });

//   it('Should return the biggest number: 40', () => {
//     let bigNbrRow = 23;
//     let bigNbrCol = 40;
//     let bigDiagonal = 3;
    
//     assert.strictEqual(compareResult(bigNbrRow, bigNbrCol, bigDiagonal), 40);
//   });
// });

      /* ------------------------------------- */
      /*            GREATEST PRODUCT           */
      /* ------------------------------------- */

describe('Counting Repetion - greatestProduct', ()=> {
it('Defines greatestProduct #9', ()=> {
    assert.strictEqual(typeof greatestProduct,'function');
  });

it('Return 1 when all the numbers of the arrays are 1', ()=> {
    let matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    assert.strictEqual(greatestProduct(matrix),1);
  });

it('Return maxProduct when all max is horizontal', ()=> {
    let matrix = [
      [9, 9, 9, 9],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    assert.strictEqual(greatestProduct(matrix),6561);
  });

it('Return maxProduct when all max is horizontal, not first row', ()=> {
    let matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [9, 9, 9, 9],
      [1, 1, 1, 1]
    ];
    assert.strictEqual(greatestProduct(matrix),6561);
  });

it('Return maxProduct when all max is vertical', ()=> {
    let matrix = [
      [9, 1, 1, 1],
      [9, 1, 1, 1],
      [9, 1, 1, 1],
      [9, 1, 1, 1]
    ];
    assert.strictEqual(greatestProduct(matrix),6561);
  });

it('Return maxProduct when all max is vertical, not first column', ()=> {
    let matrix = [
      [1, 9, 1, 1],
      [1, 9, 1, 1],
      [1, 9, 1, 1],
      [1, 9, 1, 1]
    ];
    assert.strictEqual(greatestProduct(matrix),6561);
  });

  it('Return maxProduct when all max is diagonal', ()=> {
    let matrix = [
      [9, 1, 1, 1],
      [1, 9, 1, 1],
      [1, 1, 9, 1],
      [1, 1, 1, 9]
    ];
    assert.strictEqual(greatestProduct(matrix),6561);
  });



  it('Return 16 when all the numbers of the arrays are 2', ()=> {
    let matrix = [
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      
    ];
    assert.strictEqual(greatestProduct(matrix),16);
  });

  it('The product of four biggest numbers is 51267216', ()=> {
    let matrix = [
      [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
      [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
      [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
      [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
      [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
      [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
      [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
      [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
      [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
      [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
      [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
      [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
      [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
      [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
      [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
      [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
      [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
      [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
      [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
      [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
    ];
    assert.strictEqual(greatestProduct(matrix),51267216);
  });


});