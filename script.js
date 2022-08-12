var start = new Date().getTime();   // DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN FOR THE PAGE TO LOAD, IN ms (SINCE CODE AT THE BEGINNING IS NATURALLY PARSED ON PAGE LOAD, UNLESS INSIDE AN EVENT LISTENER)
console.log(start);

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime()                                          //  DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN TO CLICK THE ELEMENT shape
    console.log(end);
    var timeTaken = (end - start) / 1000;                                   // RETURNS THE VALUE OF THE DIFFERENCE, IN s
    console.log(timeTaken);
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";       // APPEND THE VALUE TO THE HTML OF THE SPAN timeTaken WITH A CONCATENATION OF THE TIME UNIT, SINCE THIS VALUE CANNOT BE RETURNED DIRECTLY.
}

function makeShapeAppear() {
                                                                            // THIS IS JAVASCRIPT NOTATION, NOT LEVERAGING CSS PROPERTIES
}