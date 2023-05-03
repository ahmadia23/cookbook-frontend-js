const arr1 = [1, 10, 50];
const arr2 = [2, 1, 99, 100];

//

const mergeArrays = (arr1, arr2) => {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        arr.push(arr1[i]);
        break;
      }
      arr.push(arr2[j]);
      arr2 = arr2.slice(1);
    }
  }

  arr = arr.concat(arr2);

  return arr;
};

console.log(mergeArrays(arr1, arr2));
