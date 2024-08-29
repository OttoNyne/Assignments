for (let i = 0; i <= 9; i++) {
    console.log(i);
}

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

const fruit = ["banana", "orange", "apple", "kiwi"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

const numbers = [];

for (let i = 0; i <= 9; i++) {
    numbers.push(i);
}

console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const selectedFruits = [];

for (let i = 0; i < fruit.length; i += 2) {
    selectedFruits.push(fruit[i]);
}

console.log(selectedFruits); // Output: ["banana", "apple", "pear"]
