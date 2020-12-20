var product = 1;

function MyFunct(arr) {
    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var arr1 = [[1,2], [3,4]];
MyFunct(arr1);
console.log(MyFunct(arr1));