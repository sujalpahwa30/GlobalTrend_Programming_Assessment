function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArray = [...uniqueSet];
    return uniqueArray;
}

const arrayWithDuplicates = [1,1,2,3,3,4,5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);