


function fromArrayToNestedObject (strArr) {

    var nestedObj = {};

    for (let i = 0; i < strArr.length; i++) {

        var firstName = strArr[i].split(",")[0].split(" ")[0];
        var secondName = strArr[i].split(",")[0].split(" ")[1];
        var age = strArr[i].split(",")[1];

        nestedObj[firstName] = { "secondName" : secondName, "age": age };

        // add a condition that allow to include those having at least one different property value
        
    }

    return nestedObj;
}



console.log(fromArrayToNestedObject([
    "Patrick wyne, 30",
     "lil wyne, 32",
     "Eric mimi, 21",
     "Dodos deck, 21",
     "Alian Dwine, 22",
     "Patrick wyne, 33",
     "Patrick wyne, 100",
     "Patrick wyne, 40"
    ]));


