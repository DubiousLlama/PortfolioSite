function clearAll(){
    event.stopPropagation();
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
clear.addEventListener("click", clearAll, false);


/* This was very bad my apologies for writing this nonsense
event.stopPropogation I'm glad we found each other.

function clearing(){
    setTimeout(clearAll, 5);
}
*/