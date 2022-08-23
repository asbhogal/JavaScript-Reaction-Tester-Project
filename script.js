var start = new Date().getTime();   // DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN FOR THE PAGE TO LOAD, IN ms (SINCE CODE AT THE BEGINNING IS NATURALLY PARSED ON PAGE LOAD, UNLESS INSIDE AN EVENT LISTENER/FUNCTION)

function makeShapeAppear() {
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();   // UPDATE (ie. REPLACE THE VALUE OF) THE start VARIABLE WITH THE TIME TAKEN FOR THE SHAPE TO APPEAR - THIS IS JAVASCRIPT NOTATION, NOT LEVERAGING CSS PROPERTIES
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {
    var top = Math.random() * 400;
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime()                                          //  DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN TO CLICK THE ELEMENT shape
    var timeTaken = (end - start) / 1000;                                   // RETURNS THE VALUE OF THE DIFFERENCE, IN s
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
    // makeShapeAppear();       // APPEND THE VALUE TO THE HTML OF THE SPAN timeTaken WITH A CONCATENATION OF THE TIME UNIT, SINCE THIS VALUE CANNOT BE RETURNED DIRECTLY.
}


// setTimeout(makeShapeAppear, 1000);      // THE COMMAND WHICH CALLS THE FUNCTION. THE SECOND PARAMETER, 1000ms HERE, INDICATES THE NUMBER OF ms PRIOR TO EXECUTION

// INITIALISE THE start VARIABLE AND ASSIGN IT THE TIME TAKEN FOR THE PAGE TO LOAD IN THE BROWSER
// DISPLAY THE SHAPE TO BE SELECTED 1000ms AFTER THE PAGE HAS BEEN FULLY RENDERED
// CALCULATE THE TIME BETWEEN THE SHAPE APPEARING AND THE SHAPE BEING CLICKED ON
// DISPLAY THE TIME AND HIDE THE SHAPE