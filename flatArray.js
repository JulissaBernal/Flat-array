// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
function flatArray(array) {
    const accumulatorArray=[];

    for(let i=0; i<array.length; i++){
        let currentArray=array[i];
        // console.log(current)

        if(Array.isArray(currentArray)){
            return flatArray(array.flat())
        } else{
            accumulatorArray.push(currentArray)
        }
    }
    return accumulatorArray;
}

let oneDimension=flatArray(multiDimension);
console.log(oneDimension);