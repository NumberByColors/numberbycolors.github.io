function colorForIndex(index) {
    switch(index % 10) {
        case 0: return "black";
        case 1: return "lightgray";
        case 2: return "#3f51b5";
        case 3: return "#ffeb3b";
        case 4: return "#d32f2f";
        case 5: return "#388e3c";
        case 6: return "#ec407a";
        case 7: return "goldenrod" /*"#ffc107"*/;
        case 8: return "#e65100";
        case 9: return "#880e4f";
    }
}

function drawHeader(targetDiv) {
    // Handle the resize event
    var divWidth = targetDiv.offsetWidth;
    var digitWidth = 20;
    var numOfDigits = Math.floor(divWidth / digitWidth);
    
    // Remove all children
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
    
    for (var i = 0; i < numOfDigits; i++) {
        var digitDiv = document.createElement("div");
        digitDiv.classList.add("digit-div");   
        digitDiv.style.height = (digitWidth).toString() + "px";
        digitDiv.style.width = (digitWidth).toString() + "px";
        
        digitDiv.innerText = (i % 10).toString();
        digitDiv.style.color = colorForIndex(i);
        
        targetDiv.appendChild(digitDiv);
    }
}

function resizeHeaderColumns() {
    var headerWidth = $(".full-width")[0].offsetWidth;
    var siteTitleWidth = $(".site-title")[0].offsetWidth;
    var signatureWidth = $("#signature")[0].offsetWidth;
    
    var leftWidth = 80;
    var rightWidth = 80;
    var centerWidth = headerWidth - (siteTitleWidth + signatureWidth) - (leftWidth + rightWidth) - 1;
    
    $(".left-width").width(80);
    $(".center-width").width(centerWidth);
    $(".right-width").width(80);
}

function drawAllNumberColorStrips() {
    $(".number-color-strip").each(function(i, div) {
        drawHeader(div);
    });
}

// 1. Draw the header when the page loads
$(document).ready(function() {
    resizeHeaderColumns();
    drawAllNumberColorStrips();    
});

// 2. Update the header when the page resizes
$(window).resize(function() {
    resizeHeaderColumns();
    drawAllNumberColorStrips(); 
});