var start = new Date().getTime();   // DECLARE AND INITIALISE A VARIABLE WITH THE TIME TAKEN FOR THE PAGE TO LOAD, IN ms (SINCE CODE AT THE BEGINNING IS NATURALLY PARSED ON PAGE LOAD, UNLESS INSIDE AN EVENT LISTENER)
console.log(start)

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime()  //  DECLARE AND INITIALISE A VARIABLE WITH THE TIME THAT HAS PASSED FROM CLICKING THE ELEMENT
}