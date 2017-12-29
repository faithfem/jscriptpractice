var saying = "Home Sweet Home ";

console.log(saying.length);
console.log(saying.toUpperCase());
console.log(saying.toLowerCase());
console.log(saying.charAt(8));
console.log(saying.indexOf("ee"));      //position of ee    
console.log(saying.lastIndexOf("e"));    //position of the last e
console.log(saying.substring(8,14));
console.log(saying.substr(8,14));
console.log(saying.split(""));          //splits after each letter (vertical display)
console.log(saying.split(" "));         //splits after each string/word
console.log(saying.trim());
console.log(saying.replace("me","w")); //only replaces the first one it finds