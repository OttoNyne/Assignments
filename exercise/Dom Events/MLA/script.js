// Change element text
function changeTextContent(elementId, newText) {
    var element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        
    }
}

// Function to handle button click event
function handleButtonClick() {
    console.log("button click")
    changeTextContent('heading', 'Welcome to my website!');
    changeTextContent('paragraph', 'Keep at it!');
}

// Executes the wanted change
document.getElementById('changeButton').addEventListener('click', handleButtonClick);
