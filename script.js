const headerContainer = document.querySelector('.header-container');

headerContainer.style.color = 'white';
headerContainer.style.backgroundColor = 'black';

const firstLine = headerContainer.firstElementChild;
const secondLine = headerContainer.lastElementChild;
firstLine.style.color = 'red';
secondLine.style.color = 'blue';

const buttons = document.querySelectorAll('.choice-btn');
const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the player's choice
        const playerChoice = button.id;

        // Randomly select a choice for the computer
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Get the parent button container
        const buttonContainer = document.querySelector('.button-container');

        // Clear the existing buttons
        buttonContainer.innerHTML = '';

        // Create the new buttons dynamically
        const playerButton = document.createElement('button');
        playerButton.classList.add('choice-btn');
        playerButton.innerHTML = `<img src="${playerChoice}.png" alt="${playerChoice}">`;
        playerButton.style.backgroundColor = 'aqua';

        const versusButton = document.createElement('button');
        versusButton.classList.add('choice-btn');
        versusButton.textContent = 'VS';
        versusButton.style.fontSize = '2rem'; // Make the ":" bigger
        versusButton.style.backgroundColor = 'aqua';

        const computerButton = document.createElement('button');
        computerButton.classList.add('choice-btn');
        computerButton.innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}">`;
        computerButton.style.backgroundColor = 'aqua';

        // Append the new buttons to the container
        buttonContainer.appendChild(playerButton);
        buttonContainer.appendChild(versusButton);
        buttonContainer.appendChild(computerButton);
    });
});