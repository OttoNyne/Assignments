const readline = require("readline-sync");
const name = readline.question("What is your name? ");

let hasKey = false;
let isAlive = true;

function playGame() {
    while (isAlive) {
        let choice = prompt("You find yourself locked in a room. What would you like to do?\n1. Find the key\n2. Put hand in hole\n3. Open the door");

        switch (choice) {
            case "1":
                hasKey = true;
                alert("You found the key! Now you can open the door.");
                break;
            case "2":
                isAlive = false;
                alert("You put your hand in the hole and died. Game over.");
                break;
            case "3":
                if (hasKey) {
                    alert("You unlocked the door and escaped the room. Congratulations!");
                    return;  // End the game
                } else {
                    alert("The door is locked. You need to find the key first.");
                }
                break;
            default:
                alert("Invalid choice. Please enter 1, 2, or 3.");
        }
    }
}

// Start the game
playGame();
