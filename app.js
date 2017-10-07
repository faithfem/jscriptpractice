//FOR LOOPS CODE ACADEMY//

var totalTrains = 12;
var trainsOperational = 8;

var trainNumber = 1;
while(trainNumber <=trainsOperational){
console.log("Train#" + trainNumber + " is running.");
trainNumber++;
}

for(var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++){
    console.log("Train#" + stoppedTrain + " is not operational.");
}

//WHILE LOOP THAT COUNTS DOWN

var num = 10;
while (num>0) {
  console.log(num--);
}

//WHILE LOOP THAT COUNTS UP FROM 0
var x = 0;
while (x<11) {
  console.log(x++);
}