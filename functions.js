function getSize (width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    var perimeter = 2*(width + height);
    var sizes = [area, volume, perimeter];
    return sizes;
}

var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];
var perimeter = getSize(3,2,3)[2];

console.log(areaOne);
console.log(volumeOne);
console.log(perimeter);

// sometimes you can have the function inside a variable, so when you call the variable, it runs the function

var area2 = function(w, l){      //function declared by variable
    return w * l;
};

var size2 = area2(7,4);         
console.log(size2);


