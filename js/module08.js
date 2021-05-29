newitem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem(e);
    }
});

function addItem() {

    var addition = document.getElementById("newitem").value;
    console.log(addition);

    if (addition === "") {
        document.getElementById("warnspot").innerHTML = "Please enter a value.";
        return false;
    };

    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');

    // Create a text node and store it in a variable.
    var newText = document.createTextNode(addition);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];

    document.getElementById("warnspot").innerHTML = "";

    // Insert the new element into its position.
    position.appendChild(newEl);

    newitem.value = null;
};