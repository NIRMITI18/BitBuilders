// Maze dimensions and player position
const mazeWidth = 400;
const mazeHeight = 400;
let playerX = 0;
let playerY = 0;

// Function to move the player
function move(direction) {
    switch(direction) {
        case 'up':
            if (playerY > 0) playerY -= 20; // If statement to check if moving up is within maze boundaries
            break;
        case 'down':
            if (playerY < mazeHeight - 20) playerY += 20; // If statement to check if moving down is within maze boundaries
            break;
        case 'left':
            if (playerX > 0) playerX -= 20; // If statement to check if moving left is within maze boundaries
            break;
        case 'right':
            if (playerX < mazeWidth - 20) playerX += 20; // If statement to check if moving right is within maze boundaries
            break;
    }

    // Update player position
    document.getElementById('player').style.left = playerX + 'px';
    document.getElementById('player').style.top = playerY + 'px';

    // Check if player reached the treasure
    if (playerX === mazeWidth - 20 && playerY === mazeHeight - 20) {
        document.getElementById('message').innerText = 'Congratulations! You found the treasure!';
        disableControls();
    }

    // Check for obstacle collisions
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => {
        const obstacleX = obstacle.offsetLeft;
        const obstacleY = obstacle.offsetTop;
        if (playerX === obstacleX && playerY === obstacleY) {
            document.getElementById('message').innerText = 'Game over! You encountered an obstacle!';
            disableControls();
        }
    });
}

// Function to disable movement controls after game over or victory
function disableControls() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Function to generate random obstacles
function generateObstacles() {
    for (let i = 0; i < 5; i++) {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        const obstacleX = Math.floor(Math.random() * (mazeWidth / 20)) * 20;
        const obstacleY = Math.floor(Math.random() * (mazeHeight / 20)) * 20;
        obstacle.style.left = obstacleX + 'px';
        obstacle.style.top = obstacleY + 'px';
        document.getElementById('maze').appendChild(obstacle);
    }
}

// Initialize game
generateObstacles();
