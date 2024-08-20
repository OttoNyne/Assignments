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
    changeTextContent('heading', 'Welcome to my website!');
    changeTextContent('paragraph', 'Keep at it!');
}

// Add event listener to the button
document.getElementById('changeButton').addEventListener('click', handleButtonClick);
