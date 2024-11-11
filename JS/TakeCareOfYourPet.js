let health = 0;
let hunger = 0;
let happiness = 0;

function updatePetStatus() {
    document.getElementById('health').innerHTML = `Health: <span>${health}</span>%`;
    document.getElementById('hunger').innerHTML = `Hunger: <span>${hunger}</span>%`;
    document.getElementById('happiness').innerHTML = `Happiness: <span>${happiness}</span>%`;

    health = Math.max(0, Math.min(100, health));
    hunger = Math.max(0, Math.min(100, hunger));
    happiness = Math.max(0, Math.min(100, happiness));
}

function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        health += 5;
        happiness += 2;
        alert("You fed the Doberman! 🐾");
    } else {
        alert("The Doberman is already full.");
    }
    updatePetStatus();
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        health += 5;
        alert("You played with the Doberman! 🎾");
    } else {
        alert("The Doberman is already very happy!");
    }
    updatePetStatus();
}

function TakeANap() {
    if (health < 100) {
        health += 15;
        hunger += 5;
        alert("The Doberman is sleeping and resting.");
    } else {
        alert("The Doberman is already fully rested!");
    }
    updatePetStatus();
}



function showActionMessage(message) {
    const statusDiv = document.getElementById("pet-status");
    const messageDiv = document.createElement("p");
    messageDiv.textContent = message;
    statusDiv.appendChild(messageDiv);

    setTimeout(() => {
        statusDiv.removeChild(messageDiv);
    }, 3000);
}
