
// This is messy but I'm done dealing with it
function clearing(){
    setTimeout(clearAll, 5);
}

function clearAll(){
    document.querySelectorAll('.dot').forEach(e => e.remove());
}


function clicked() {
    console.log("clicked");
    // from https://eloquentjavascript.net/15_event.html
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
}

addEventListener("click", clicked, false);
clear = document.getElementById("clear");
clear.addEventListener("click", clearing, false);



// Let us stop the propagation of events
/*
event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
});
*/