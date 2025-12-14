// Bug Hunter - Software Testing Game
// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#f0f8ff',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Game state
let game;
let score = 0;
let level = 1;
let bugsToFind = 5;
let bugsCaught = 0;
let scoreText;
let levelText;
let bugsText;
let timeText;
let messageText;
let bugs = [];
let codeBoxes = [];
let particles;
let timer = 30;
let timerEvent;
let gameActive = true;

// Bug types with different colors and points
const bugTypes = [
    { name: 'minor', color: 0x90EE90, points: 10, speed: 100, emoji: '🐛' },
    { name: 'major', color: 0xFFB347, points: 25, speed: 150, emoji: '🐞' },
    { name: 'critical', color: 0xFF6B6B, points: 50, speed: 200, emoji: '🦗' }
];

// Initialize the game
window.onload = function() {
    game = new Phaser.Game(config);
};

function preload() {
    // Phaser will create graphics programmatically
}

function create() {
    // Create background pattern
    createBackground(this);
    
    // Create code boxes (testing zones)
    createCodeBoxes(this);
    
    // Create UI
    createUI(this);
    
    // Create particle emitter for bug squashing effects
    particles = this.add.particles(0, 0, 'particle', {
        speed: { min: -100, max: 100 },
        scale: { start: 1, end: 0 },
        blendMode: 'ADD',
        lifespan: 600,
        gravityY: 0,
        emitting: false
    });
    
    // Set up particle graphics
    const particleGraphics = this.add.graphics();
    particleGraphics.generateTexture('particle', 10, 10);
    particleGraphics.destroy();
    
    // Start spawning bugs
    this.time.addEvent({
        delay: 2000,
        callback: spawnBug,
        callbackScope: this,
        loop: true
    });
    
    // Initial bugs
    for (let i = 0; i < 3; i++) {
        spawnBug.call(this);
    }
    
    // Timer countdown
    timerEvent = this.time.addEvent({
        delay: 1000,
        callback: updateTimer,
        callbackScope: this,
        loop: true
    });
    
    // Show welcome message
    showMessage(this, 'Level ' + level + ' - Find ' + bugsToFind + ' bugs!', 2000);
}

function createBackground(scene) {
    // Create a grid pattern to represent code
    const graphics = scene.add.graphics();
    
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 12; j++) {
            const x = i * 50;
            const y = j * 50;
            const alpha = Math.random() * 0.1 + 0.05;
            graphics.fillStyle(0x4169E1, alpha);
            graphics.fillRect(x, y, 48, 48);
        }
    }
}

function createCodeBoxes(scene) {
    const boxPositions = [
        { x: 100, y: 150, width: 200, height: 150, label: 'Unit Tests' },
        { x: 500, y: 150, width: 200, height: 150, label: 'Integration' },
        { x: 100, y: 400, width: 200, height: 150, label: 'UI Testing' },
        { x: 500, y: 400, width: 200, height: 150, label: 'E2E Tests' }
    ];
    
    boxPositions.forEach(pos => {
        const box = scene.add.rectangle(pos.x, pos.y, pos.width, pos.height);
        box.setStrokeStyle(3, 0x667eea, 0.8);
        box.setFillStyle(0xffffff, 0.3);
        
        const label = scene.add.text(pos.x, pos.y - pos.height / 2 - 20, pos.label, {
            fontSize: '16px',
            fontStyle: 'bold',
            fill: '#667eea',
            backgroundColor: '#ffffff',
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5);
        
        codeBoxes.push({ box, label, bounds: pos });
    });
}

function createUI(scene) {
    // Score
    scoreText = scene.add.text(16, 16, 'Score: 0', {
        fontSize: '24px',
        fontStyle: 'bold',
        fill: '#4CAF50',
        backgroundColor: '#ffffff',
        padding: { x: 10, y: 5 }
    });
    
    // Level
    levelText = scene.add.text(16, 50, 'Level: 1', {
        fontSize: '20px',
        fontStyle: 'bold',
        fill: '#2196F3',
        backgroundColor: '#ffffff',
        padding: { x: 10, y: 5 }
    });
    
    // Bugs to find
    bugsText = scene.add.text(16, 84, 'Bugs Left: ' + bugsToFind, {
        fontSize: '20px',
        fontStyle: 'bold',
        fill: '#FF5722',
        backgroundColor: '#ffffff',
        padding: { x: 10, y: 5 }
    });
    
    // Timer
    timeText = scene.add.text(config.width - 16, 16, 'Time: 30s', {
        fontSize: '24px',
        fontStyle: 'bold',
        fill: '#9C27B0',
        backgroundColor: '#ffffff',
        padding: { x: 10, y: 5 }
    }).setOrigin(1, 0);
    
    // Message text (centered)
    messageText = scene.add.text(config.width / 2, config.height / 2, '', {
        fontSize: '48px',
        fontStyle: 'bold',
        fill: '#ffffff',
        backgroundColor: '#000000',
        padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setDepth(100).setVisible(false);
}

function spawnBug() {
    if (!gameActive || bugs.length >= 8) return;
    
    // Select random bug type (weighted towards minor bugs)
    const rand = Math.random();
    let bugType;
    if (rand < 0.5) {
        bugType = bugTypes[0]; // minor
    } else if (rand < 0.8) {
        bugType = bugTypes[1]; // major
    } else {
        bugType = bugTypes[2]; // critical
    }
    
    // Random position
    const x = Phaser.Math.Between(50, config.width - 50);
    const y = Phaser.Math.Between(150, config.height - 50);
    
    // Create bug graphic
    const graphics = this.add.graphics();
    graphics.fillStyle(bugType.color, 1);
    graphics.fillCircle(0, 0, 15);
    graphics.fillStyle(0x000000, 0.3);
    graphics.fillCircle(-5, -5, 5);
    graphics.fillCircle(5, -5, 5);
    graphics.generateTexture('bug_' + bugs.length, 40, 40);
    graphics.destroy();
    
    // Create bug sprite
    const bug = this.add.sprite(x, y, 'bug_' + bugs.length);
    bug.setInteractive({ useHandCursor: true });
    bug.setScale(0);
    bug.bugType = bugType;
    
    // Add emoji text
    const emoji = this.add.text(x, y, bugType.emoji, {
        fontSize: '24px'
    }).setOrigin(0.5).setDepth(1);
    
    bug.emoji = emoji;
    
    // Spawn animation
    this.tweens.add({
        targets: bug,
        scale: 1,
        duration: 300,
        ease: 'Back.easeOut'
    });
    
    // Movement
    const angle = Math.random() * Math.PI * 2;
    bug.setData('velocityX', Math.cos(angle) * bugType.speed);
    bug.setData('velocityY', Math.sin(angle) * bugType.speed);
    
    // Pulsing animation
    this.tweens.add({
        targets: bug,
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 500,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
    });
    
    // Click handler
    bug.on('pointerdown', function() {
        catchBug.call(this, bug);
    }, this);
    
    bugs.push(bug);
}

function catchBug(bug) {
    if (!gameActive) return;
    
    // Add score
    score += bug.bugType.points;
    scoreText.setText('Score: ' + score);
    
    // Update bugs count
    bugsCaught++;
    bugsText.setText('Bugs Left: ' + (bugsToFind - bugsCaught));
    
    // Particle explosion
    particles.emitParticleAt(bug.x, bug.y, 20);
    
    // Create floating score text
    const floatingText = this.add.text(bug.x, bug.y, '+' + bug.bugType.points, {
        fontSize: '32px',
        fontStyle: 'bold',
        fill: '#FFD700'
    }).setOrigin(0.5);
    
    this.tweens.add({
        targets: floatingText,
        y: bug.y - 50,
        alpha: 0,
        duration: 1000,
        ease: 'Power2',
        onComplete: () => floatingText.destroy()
    });
    
    // Remove bug
    bug.emoji.destroy();
    bug.destroy();
    bugs = bugs.filter(b => b !== bug);
    
    // Check level completion
    if (bugsCaught >= bugsToFind) {
        nextLevel.call(this);
    }
}

function update(time, delta) {
    if (!gameActive) return;
    
    // Move bugs
    bugs.forEach(bug => {
        if (!bug.active) return;
        
        bug.x += bug.getData('velocityX') * delta / 1000;
        bug.y += bug.getData('velocityY') * delta / 1000;
        
        // Update emoji position
        if (bug.emoji) {
            bug.emoji.setPosition(bug.x, bug.y);
        }
        
        // Bounce off walls
        if (bug.x < 30 || bug.x > config.width - 30) {
            bug.setData('velocityX', -bug.getData('velocityX'));
        }
        if (bug.y < 150 || bug.y > config.height - 30) {
            bug.setData('velocityY', -bug.getData('velocityY'));
        }
    });
}

function updateTimer() {
    if (!gameActive) return;
    
    timer--;
    timeText.setText('Time: ' + timer + 's');
    
    if (timer <= 0) {
        gameOver.call(this);
    } else if (timer <= 10) {
        timeText.setStyle({ fill: '#FF0000' });
    }
}

function nextLevel() {
    gameActive = false;
    
    // Stop timer
    timerEvent.paused = true;
    
    // Bonus for remaining time
    const timeBonus = timer * 5;
    score += timeBonus;
    
    // Show level complete message
    showMessage(this, 'Level Complete!\nTime Bonus: +' + timeBonus, 2000);
    
    // Clear remaining bugs
    bugs.forEach(bug => {
        bug.emoji.destroy();
        bug.destroy();
    });
    bugs = [];
    
    // Next level setup
    this.time.delayedCall(2500, () => {
        level++;
        bugsToFind = 5 + (level - 1) * 2; // Increase bugs needed
        bugsCaught = 0;
        timer = 30 + (level - 1) * 5; // More time for harder levels
        gameActive = true;
        
        levelText.setText('Level: ' + level);
        bugsText.setText('Bugs Left: ' + bugsToFind);
        timeText.setText('Time: ' + timer + 's');
        timeText.setStyle({ fill: '#9C27B0' });
        scoreText.setText('Score: ' + score);
        
        timerEvent.paused = false;
        
        showMessage(this, 'Level ' + level + ' - Find ' + bugsToFind + ' bugs!', 2000);
        
        // Spawn initial bugs
        for (let i = 0; i < Math.min(level + 2, 6); i++) {
            spawnBug.call(this);
        }
    });
}

function gameOver() {
    gameActive = false;
    timerEvent.paused = true;
    
    // Calculate final stats
    const finalMessage = 'Game Over!\n\nFinal Score: ' + score + '\nLevel Reached: ' + level + '\nBugs Caught: ' + bugsCaught;
    
    showMessage(this, finalMessage, 5000);
    
    // Clear all bugs
    bugs.forEach(bug => {
        this.tweens.add({
            targets: bug,
            alpha: 0,
            scale: 0,
            duration: 500,
            onComplete: () => {
                bug.emoji.destroy();
                bug.destroy();
            }
        });
    });
    bugs = [];
    
    // Restart after delay
    this.time.delayedCall(6000, () => {
        restartGame.call(this);
    });
}

function restartGame() {
    // Reset game state
    score = 0;
    level = 1;
    bugsToFind = 5;
    bugsCaught = 0;
    timer = 30;
    gameActive = true;
    bugs = [];
    
    // Reset UI
    scoreText.setText('Score: 0');
    levelText.setText('Level: 1');
    bugsText.setText('Bugs Left: ' + bugsToFind);
    timeText.setText('Time: 30s');
    timeText.setStyle({ fill: '#9C27B0' });
    
    // Restart timer
    timerEvent.paused = false;
    
    showMessage(this, 'Level 1 - Find ' + bugsToFind + ' bugs!', 2000);
    
    // Spawn initial bugs
    for (let i = 0; i < 3; i++) {
        spawnBug.call(this);
    }
}

function showMessage(scene, text, duration) {
    messageText.setText(text);
    messageText.setVisible(true);
    messageText.setAlpha(0);
    
    scene.tweens.add({
        targets: messageText,
        alpha: 1,
        duration: 300,
        ease: 'Power2'
    });
    
    scene.time.delayedCall(duration, () => {
        scene.tweens.add({
            targets: messageText,
            alpha: 0,
            duration: 300,
            ease: 'Power2',
            onComplete: () => messageText.setVisible(false)
        });
    });
}
