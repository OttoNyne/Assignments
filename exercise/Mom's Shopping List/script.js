
const initialItems = [
    "Milk", 
    "Eggs", 
    "Bread", 
    "Butter", 
    "Cheese",
    "Romaine Lettuce",
    "Radicchio Lettuce",
    "Green Leaf Lettuce",
    "Kale",
    "Spinach",
    "Red Cabbage"
];


function addItem(itemText) {
    const itemList = document.getElementById('itemList');

    if (itemText.trim() === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = itemText;

    const removeButton = document.createElement('button');
    removeButton.textContent = '[x]';
    removeButton.className = 'remove';
    removeButton.onclick = function() {
        itemList.removeChild(li);
    };

    li.appendChild(removeButton);
    itemList.appendChild(li);
}

window.onload = function() {
    initialItems.forEach(item => addItem(item));
};


document.querySelector('button').addEventListener('click', () => {
    const itemInput = document.getElementById('itemInput');
    addItem(itemInput.value);
    itemInput.value = '';
    itemInput.focus();
});
