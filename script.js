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
    var top = Math.random() * 400;                                          // DECLARES THE VARIABLE top AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 AND 1) WHICH IS THEN MULTIPLIED BY 400 TO GIVE AN APPROPRIATE VALUE TO 'SHIFT' THE ELEMENT
    var left = Math.random() * 800;                                         // DECLARES THE VARIABLES left AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 and 1) WHICH IS THEN MULTIPLIED BY 800 TO GIVE AN APPROPRIATE VALUE TO 'SHIFT' THE ELEMENT - A LARGER ONE IS CHOSEN HERE OWING TO THE LANDSCAPE ORIENTATION OF THE SCREEN
    var height = Math.random() * 300;                                       // DECLARES THE VARIABLE height AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 AND 1) WHICH IS THEN MULTIPLIED BY 300 TO GIVE AN APPROPRIATE VALUE
    var width = Math.random() * 300;                                        // DECLARES THE VARIABLE width AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 AND 1) WHICH IS THEN MULTIPLIED BY 300 TO GIVE AN APPROPRIATE VALUE - A 1:1 RATIO IS USED TO MAINTAIN ITS SQUARE SIZING
    document.getElementById("shape").style.top = top + "px";                // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE POSITIONING
    document.getElementById("shape").style.left = left + "px";              // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE POSITIONING
    document.getElementById("shape").style.height = height + "px";          // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE POSITIONING
    document.getElementById("shape").style.widows = width + "px";           // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE POSITIONING
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime()                                          // DECLARES AND INITIALISES A VARIABLE WITH THE TIME TAKEN TO CLICK THE ELEMENT shape
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