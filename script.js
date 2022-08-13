var start = new Date().getTime();   // DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN FOR THE PAGE TO LOAD, IN ms (SINCE CODE AT THE BEGINNING IS NATURALLY PARSED ON PAGE LOAD, UNLESS INSIDE AN EVENT LISTENER/FUNCTION)

function makeShapeAppear() {
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();   // UPDATE (ie. REPLACE THE VALUE OF) THE start VARIABLE WITH THE TIME TAKEN FOR THE SHAPE TO APPEAR - THIS IS JAVASCRIPT NOTATION, NOT LEVERAGING CSS PROPERTIES
}

setTimeout(makeShapeAppear, 1000);      // THE COMMAND WHICH CALLS THE FUNCTION. THE SECOND PARAMETER, 1000ms HERE, INDICATES THE NUMBER OF ms PRIOR TO EXECUTION

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime()                                          //  DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN TO CLICK THE ELEMENT shape
    var timeTaken = (end - start) / 1000;                                   // RETURNS THE VALUE OF THE DIFFERENCE, IN s
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";       // APPEND THE VALUE TO THE HTML OF THE SPAN timeTaken WITH A CONCATENATION OF THE TIME UNIT, SINCE THIS VALUE CANNOT BE RETURNED DIRECTLY.
}

