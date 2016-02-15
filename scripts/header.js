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
    //var divWidth = $(window).width(); //in px
    var divWidth = targetDiv.offsetWidth;
    var digitWidth = 20;
    var numOfDigits = Math.floor(divWidth / digitWidth);
    
    // Remove all children
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
    
    for (var i = 0; i < numOfDigits; i++) {
        var digitDiv = document.createElement("div");
        digitDiv.style.cssFloat = "left";        
        digitDiv.style.height = (digitWidth).toString() + "px";
        digitDiv.style.width = (digitWidth).toString() + "px";
        
        digitDiv.innerText = (i % 10).toString();
        digitDiv.style.color = colorForIndex(i);
        digitDiv.style.fontSize = "18px";
        digitDiv.style.textAlign = "center";
        
        targetDiv.appendChild(digitDiv);
    }
}

// 1. Draw the header when the page loads
$(document).ready(function() {
    var headerDivs = $(".number-color-strip");
    for (var headerDiv of headerDivs) {
        headerDiv.style.height = "20px";
        headerDiv.style.width = "100%";
    
        drawHeader(headerDiv);
    }
    
});

// 2. Update the header when the page resizes
$(window).resize(function() {
    var headerDivs = $(".number-color-strip");  
    for (var headerDiv of headerDivs) {
        drawHeader(headerDiv);
    }  
});