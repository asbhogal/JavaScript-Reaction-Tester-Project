var start = new Date().getTime();   // DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN FOR THE PAGE TO LOAD, IN ms (SINCE CODE AT THE BEGINNING IS NATURALLY PARSED ON PAGE LOAD, UNLESS INSIDE AN EVENT LISTENER/FUNCTION)

function makeShapeAppear() {
    document.getElementById("shape").style.display = "block";
    var top = Math.random() * 400;                                                  // DECLARES THE VARIABLE top AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 AND 1) WHICH IS THEN MULTIPLIED BY 400 TO GIVE AN APPROPRIATE REAL VALUE TO 'SHIFT' THE ELEMENT
    var left = Math.random() * 1400;                                                // DECLARES THE VARIABLES left AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 and 1) WHICH IS THEN MULTIPLIED BY 1400 TO GIVE AN APPROPRIATE REAL VALUE TO 'SHIFT' THE ELEMENT - A LARGER ONE IS CHOSEN HERE OWING TO THE LANDSCAPE ORIENTATION OF THE SCREEN
    var heightAndWidth = (Math.random() * 300) + 100                                // DECLARES THE VARIABLE width AND ASSIGNS IT A RANDOM ARITHMETIC VALUE (BETWEEN 0 AND 1) WHICH IS THEN MULTIPLIED BY 300 TO GIVE AN APPROPRIATE REAL VALUE - A 1:1 RATIO IS USED TO MAINTAIN ITS SQUARE SIZING. ADDING 100 TO THE FINAL VALUE ENSURES A MIN WIDTH AND HEIGHT OF 100px - FOR UX, THIS ENSURES THE SIZE GENERATED ISN'T TOO SMALL FOR THE USER TO SEE/INTERACT WITH
    document.getElementById("shape").style.top = top + "px";                        // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE POSITIONING.
    document.getElementById("shape").style.left = left + "px";                      // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE POSITIONING
    document.getElementById("shape").style.height = heightAndWidth + "px";          // APPENDS THE px UNIT TO ENSURE IT APPLIES IT AS A STYLE TO THE HEIGHT OF THE ELEMENT
    document.getElementById("shape").style.width = heightAndWidth + "px";           // ENSURES THE SAME VALUE FOR heightAndWidth IS APPLIED TO THE RESPECTIVE PROPERTIES, MAINTAINING A 1:1 RATIO
    document.getElementById("shape").style.backgroundColor = getRandomColor()       // RETRIEVES THE VALUE FROM THE FUNCTION getRandomColor AND SENDS IT TO THE SHAPE'S BACKGROUND COLOR PROPERTY. THE UNIT DOESN'T NEED TO BE APPENDED HERE, AS IT IS ALREADY A STRING FROM THE FUNCTION
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    start = new Date().getTime();                                                   // UPDATE (ie. REPLACE THE VALUE OF) THE start VARIABLE WITH THE TIME TAKEN FOR THE SHAPE TO APPEAR - THIS IS JAVASCRIPT NOTATION, NOT LEVERAGING CSS PROPERTIES
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random() * 16)];
    }
    return color;
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime()                                                  // DECLARES AND INITIALISES A VARIABLE WITH THE TIME TAKEN TO CLICK THE ELEMENT shape
    var timeTaken = (end - start) / 1000;                                           // RETURNS THE VALUE OF THE DIFFERENCE, IN s
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
}

// INITIALISE THE start VARIABLE AND ASSIGN IT THE TIME TAKEN FOR THE PAGE TO LOAD IN THE BROWSER
// DISPLAY THE SHAPE TO BE SELECTED 1000ms AFTER THE PAGE HAS BEEN FULLY RENDERED
// CALCULATE THE TIME BETWEEN THE SHAPE APPEARING AND THE SHAPE BEING CLICKED ON
// DISPLAY THE TIME AND HIDE THE SHAPE

/* THE getRandomColor FUNCTION:
    -   CREATES A VARIABLE CALLED letters AND ASSIGNS IT THE STRING VALUE 0123456789ABCDEF TO ACCOUNT FOR ALL THE POSSIBLE HEX COLOR COMBINATIONS
    -   AT THE SAME TIME, IT THEN USES split TO CONVERT THIS STRING VALUE INTO AN ARRAY OF INDIVIDUAL VALUES
    -   CREATES A VARIABLE CALLED color AND ASSIGNS IT THE STRING VALUE #, TO WHICH THE color VARIABLE WILL BE APPENDED TO, TO GIVE A HEX VALUE
    -   RUNS A FOR LOOP WHICH PARSES THE FOLLOWING:
        -   SETS THE VARIABLE i TO 0 BEFORE THE LOOP STARTS
        -   WHILE i IS LESS THAN 6...(THE DEFINITION OF THE CONDITION)
        -   ...INCREMENT THE VALUE OF i AND...
        -   TAKE THE VARIABLE color WITH THE VALUE #, AND APPEND TO IT THE FOLLOWING:
            -   THE VALUE OF LETTERS, WHICH:
                    -   TAKES A RANDOM REAL NUMBER BETWEEN 0 AND 1,
                    -   MULTIPLIES THIS BY 16
                    -   LEVERAGES THE floor FUNCTION TO ROUND THIS TO AN INTEGER
                    -   RETURNS THIS VALUE TO letters
        -   WHEN THE for LOOP ENDS (ie. WHEN i BECOMES GREATER THAN 6, NOT EQUAL TOO ALSO, AS THIS NEEDS TO BE MET), RETURN THE VALUE OF color
        -   THE VALUE FOR color IS THEN SENT RETURNED TO THE CALLBACK FUNCTION
    -   THIS FUNCTION WILL RUN 6 TIMES, RETURNING SIX VALUES WITH THE # VALUE, THEREBY GIVING A HEX COLOR VALUE
    -   EACH TIME THE LOOP RUNS, THE VALUES ARE RANDOMISED, ENSURING A DIFFERENT COLOR VALUE ON EACH FUNCTION RUN
    -   THE FUNCTION CALL DOESN'T HAVE ANY PARAMETERS OUTLINED, AS NO VALUES NEED TO BE PASSED TO THE FUNCTION getRandomColor, ONLY RETRIEVED FROM IT AFTER THE RUN*/
