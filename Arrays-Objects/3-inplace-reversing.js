function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}


console.log(reverseArr ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))