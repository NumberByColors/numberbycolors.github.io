function colorClassForIndex(index) {
    switch(index % 10) {
        case 0: return "zero-color";
        case 1: return "one-color";
        case 2: return "two-color";
        case 3: return "three-color";
        case 4: return "four-color";
        case 5: return "five-color";
        case 6: return "six-color";
        case 7: return "seven-color";
        case 8: return "eight-color";
        case 9: return "nine-color";
    }
}

function drawHeader(targetDiv) {
    // Handle the resize event
    var divWidth = targetDiv.offsetWidth;
    var digitWidth = 25;
    var numOfDigits = Math.floor(divWidth / digitWidth)
    
    // Remove all children
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
    
    for (var i = 0; i < numOfDigits; i++) {
        var digitDiv = document.createElement("div");
        digitDiv.classList.add("digit");  
        digitDiv.classList.add("no-select"); 
        digitDiv.style.height = (digitWidth).toString() + "px";
        digitDiv.style.width = (digitWidth).toString() + "px";
        
        digitDiv.innerText = (i % 10).toString();
        digitDiv.classList.add(colorClassForIndex(i));
        
        targetDiv.appendChild(digitDiv);
    }
}

function drawAllNumberColorStrips() {
    $(".number-color-strip").each(function(i, div) {
        drawHeader(div);
    });
}

// 1. Draw the header when the page loads
$(document).ready(function() {
    drawAllNumberColorStrips();    
});

// 2. Update the header when the page resizes
$(window).resize(function() {
    drawAllNumberColorStrips(); 
});