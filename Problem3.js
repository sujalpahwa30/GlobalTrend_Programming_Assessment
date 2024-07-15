function flattenArray(nestedArray) {
    let flatArray = [];
    nestedArray.forEach(element => {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flattenArray(element));
        } else {
            flatArray.push(element);
        }
    });
    return flatArray;
}

const nestedArray = [1 , 2 , [3,4] , [5,6] , 7];
const flatArray = flattenArray(nestedArray);
console.log(flatArray);