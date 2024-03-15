//  1 - задание
for (let i = 0; i < 3; i++) {
    console.log(`number ${i}`);
}
// Переписала на while
let i = 0;
while (i < 3) {
    console.log(`number ${i}`);
    i++;
}
//////////////////////////////////////////////////

// 3 - задание
const arr = [1, 2, 3, 4, 5, 6, 7];
let reverseArray = [];
for (let idx = arr.length - 1; idx >= 0; idx--) {
    reverseArray = reverseArray.concat(arr[idx]);
}
console.log(reverseArray);

// 4 - задание
let idx = 3;
while (idx < 8) {
    console.log(`number ${idx}`);
    idx++;
}

// 5 - задание
const numArr = [123, 53, 33, 23, 234];
for (let idx = 0; idx < numArr.length; idx++) {
    if (numArr[idx] % 2 === 0) {
        console.log(numArr[idx]);
        break;
    } else if (numArr[idx] % 2 !== 0) {
        console.log("Нет четных чисел");
    }
}

// 6 - задание
for (let idx = 1; idx <= 10; idx++) {
    if (idx === 5) {
        continue;
    }
    console.log(`Number ${idx}`);
}
