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
// below, i can re-use variable names due to scope

var area = function(w, l){      //function declared by variable
    return w * l;               //return belongs to functions and you'll get an error if you use outside of that
};

var size = area(7,4);         
console.log(size); //PS: Remember, console.log is used in test mode, not in production. In production, it's usually document.write




