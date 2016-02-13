function drawHeader(targetDiv) {
    // Handle the resize event
    var windowWidth = $(window).width(); //in px
    var digitWidth = 20;
    var numOfDigits = Math.floor(windowWidth / digitWidth);
    
    //Remove all children
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
    
    for (var i = 0; i < numOfDigits; i++) {
        var digitDiv = document.createElement("div");
        digitDiv.style.cssFloat = "left";
        digitDiv.style.backgroundColor = "gray";
        digitDiv.style.height = (digitWidth - 2).toString() + "px";
        digitDiv.style.width = (digitWidth - 2).toString() + "px";
        digitDiv.style.border = "1px solid black";
        
        targetDiv.appendChild(digitDiv);
    }
}

// 1. Draw the header when the page loads
$(document).ready(function() {
    var headerDiv = $("#header-js")[0];
    headerDiv.style.backgroundColor = "red";
    headerDiv.style.height = "20px";
    headerDiv.style.width = "100%";
    
    drawHeader(headerDiv);
});

// 2. Update the header when the page resizes
$(window).resize(function() {
    var headerDiv = $("#header-js")[0];    
    drawHeader(headerDiv);
});