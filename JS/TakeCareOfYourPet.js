let health = 100;
let hunger = 0;
let happiness = 100;

function updatePetStatus() {
    document.getElementById('health').innerHTML = `Health: <span>${health}</span>%`;
    document.getElementById('hunger').innerHTML = `Hunger: <span>${hunger}</span>%`;
    document.getElementById('happiness').innerHTML = `Happiness: <span>${happiness}</span>%`;

    health = Math.max(100, Math.min(0, health));
    hunger = Math.max(100, Math.min(0, hunger));
    happiness = Math.max(100, Math.min(0, happiness));
}

function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        health += 5;
        happiness += 2;
        showActionMessage("You fed the Doberman! 🐾");
    } else {
        showActionMessage("The Doberman is already full.");
    }
    updatePetStatus();
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        health -= 5;
        showActionMessage("You played with the Doberman! 🎾");
    } else {
        showActionMessage("The Doberman is already very happy!");
    }
    updatePetStatus();
}

function putPetToSleep() {
    if (health < 100) {
        health += 15;
        hunger += 5;
        showActionMessage("The Doberman is sleeping and resting.");
    } else {
        showActionMessage("The Doberman is already fully rested!");
    }
    updatePetStatus();
}

// Function to show action feedback below pet status
function showActionMessage(message) {
    const statusDiv = document.getElementById("pet-status");
    const messageDiv = document.createElement("p");
    messageDiv.textContent = message;
    statusDiv.appendChild(messageDiv);

    // Remove the message after a few seconds
    setTimeout(() => {
        statusDiv.removeChild(messageDiv);
    }, 3000);
}
