const array1 = [
  "iPhone",
  "Samsung",
  "Android",
  "iOS",
  "iPhone",
  "Samsung",
  "Nokia",
  "Blackberry",
  "Android",
];

function uniquifyArray(array) {
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

    console.log(uniqueArray);
  }
}
uniquifyArray(array1);
