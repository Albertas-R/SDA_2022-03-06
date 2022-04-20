/*
const unsortedData = [11, 0, -2, 99, 69, 69, -9, 0, 0, 45, 6];

const selectionSort = (unsortedData) => {
  const result = [...unsortedData];

  for (let i = 0; i < result.length; i++) {
    let lowestI = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[lowestI] > result[j]) {
        lowestI = j;
      }
    }

    if (lowestI !== i) {
      const temp = result[i];
      result[i] = result[lowestI];
      result[lowestI] = temp;
    }
  }

  return result;
};

const sortedData = selectionSort(unsortedData);

console.log(sortedData);

*/

///////////////////////////////
// uzduotis perdaryti is naujo

const origArr = [11, 0, -2, 99, 69, 69, -9, 0, 0, 45, 6, 5];
console.log(origArr);

const sortArr = function (arr) {
  const data = [...origArr]; // copy array

  for (let i = 0; i < data.length; i++) {
    // console.log("i value:", data[i]);

    let minValueIndex = i;

    for (let j = i + 1; j < data.length; j++) {
      // console.log("---- j value:", data[j]);

      if (data[minValueIndex] > data[j]) {
        console.log(data[minValueIndex], data[j]); // if viduje
        console.log("new j value:", data[j]); // if viduje
        minValueIndex = j;
      }
    }

    if (minValueIndex !== i) {
      const temp = data[i];
      data[i] = data[minValueIndex];
      data[minValueIndex] = temp;
    }
  }
  return data;
};
console.log(sortArr(origArr));

// salygos paga; prioriteta
// 1. jei arrow funkcijoje yra this, tai this bus outer scope
// 2. jeigu callas su 'new', tai naujai sukurtas objektas yra this
// 3. bind funckija panaudota issaugoti this reiksme
// 4. kai kurios funkcijos leidzia this nurodyti e.g. forEach, map
// 5. funkcija callinama su call arba apply funkcijomis
// 6. call site is this e.g. o.callName()

// 7.
//   isoriniame scope - globalus objektas (window)
//   funkcijos scope  - globalus objektas (window)
//                    - jei strict mode, tai undefined

// function f() {
//   console.log(this);
// }
// const boundF = f.bind('juozapas');
// boundF();

// a.forEach(function() {
//   console.log(this);
// }, 'aaa');

// function f(a,b,c) {
//   console.log(this, a,b,c);
// }

// f.apply('juozapas', [1,2,3]);
