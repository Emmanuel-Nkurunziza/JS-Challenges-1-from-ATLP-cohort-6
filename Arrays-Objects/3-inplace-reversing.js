
function inPlaceReversing (array) {
    var arrLength = array.length;
    for (var i = 0; i < arrLength/2; i++) {
        var temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
    return array
}


console.log(inPlaceReversing ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))