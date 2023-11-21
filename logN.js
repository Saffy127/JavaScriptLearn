let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let target = 8;

for (let i = 1; i <= 1024; i++) {
    arr.push(i)
}

let end = arr.length - 1;

console.log(arr);


function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start, end));
    if (start > end) return false; 
    // To start off we have to find the middle index of our array
    let midIndex = Math.floor((start + end) / 2);
    // Check to see if our midpoint is actually the number we are searching for 
    if (arr[midIndex] === target) return true;

    // Check to see if the value at our mid index is greater or less than our target
    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex -1, target)
    else return binarySearch(arr, midIndex + 1, end, target)
}

binarySearch(arr, start, end, target)


