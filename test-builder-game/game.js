// ========== Game Configuration ==========
const GAME_CONFIG = {
    maxTestsInPlan: 10,
    coveragePerTest: 10, // Each test adds 10% coverage
    baseBugsPerLevel: 3,
    timePerLevel: 60,
    bonusMultiplier: 1.5
};

// ========== Bug Database ==========
const BUG_TYPES = {
    minor: { icon: '🐛', points: 10, color: '#90EE90', severity: 'Minor' },
    major: { icon: '🐞', points: 25, color: '#FFB347', severity: 'Major' },
    critical: { icon: '🦗', points: 50, color: '#FF6B6B', severity: 'Critical' }
};

// ========== Level Configurations ==========
const LEVELS = [
    {
        id: 1,
        name: 'Login Form',
        description: 'Test a simple login form',
        bugs: [
            { type: 'minor', testRequired: 'empty-fields', description: 'Empty username shows generic error' },
            { type: 'major', testRequired: 'sql-injection', description: 'SQL injection vulnerability in login' },
            { type: 'minor', testRequired: 'responsive', description: 'Layout breaks on mobile' }
        ]
    },
    {
        id: 2,
        name: 'Registration Form',
        description: 'Test user registration with validation',
        bugs: [
            { type: 'major', testRequired: 'empty-fields', description: 'Can register with empty email' },
            { type: 'critical', testRequired: 'xss', description: 'XSS vulnerability in name field' },
            { type: 'minor', testRequired: 'max-length', description: 'No max length validation' },
            { type: 'major', testRequired: 'accessibility', description: 'Missing ARIA labels' }
        ]
    },
    {
        id: 3,
        name: 'E-commerce Checkout',
        description: 'Test payment and checkout flow',
        bugs: [
            { type: 'critical', testRequired: 'sql-injection', description: 'SQL injection in payment processing' },
            { type: 'major', testRequired: 'special-chars', description: 'Special characters break address' },
            { type: 'critical', testRequired: 'auth', description: 'No authentication check' },
            { type: 'minor', testRequired: 'layout', description: 'Button alignment issues' },
            { type: 'major', testRequired: 'load-time', description: 'Slow checkout process' }
        ]
    },
    {
        id: 4,
        name: 'Dashboard Analytics',
        description: 'Test data visualization dashboard',
        bugs: [
            { type: 'major', testRequired: 'memory', description: 'Memory leak in charts' },
            { type: 'minor', testRequired: 'responsive', description: 'Charts not responsive' },
            { type: 'critical', testRequired: 'auth', description: 'Can access other users data' },
            { type: 'major', testRequired: 'load-time', description: 'Dashboard takes 10s to load' },
            { type: 'minor', testRequired: 'accessibility', description: 'Color contrast issues' },
            { type: 'major', testRequired: 'special-chars', description: 'Crashes with special characters in search' }
        ]
    },
    {
        id: 5,
        name: 'Admin Panel',
        description: 'Test administrative functions',
        bugs: [
            { type: 'critical', testRequired: 'auth', description: 'Regular users can access admin panel' },
            { type: 'critical', testRequired: 'sql-injection', description: 'SQL injection in user search' },
            { type: 'critical', testRequired: 'xss', description: 'Stored XSS in admin messages' },
            { type: 'major', testRequired: 'empty-fields', description: 'Can delete users with empty confirmation' },
            { type: 'minor', testRequired: 'layout', description: 'Table columns misaligned' },
            { type: 'major', testRequired: 'memory', description: 'Memory leak when listing users' },
            { type: 'minor', testRequired: 'responsive', description: 'Admin panel unusable on tablet' }
        ]
    }
];

// ========== Game State ==========
let gameState = {
    score: 0,
    level: 1,
    currentTests: [],
    discoveredBugs: [],
    fixedBugs: [],
    coverage: 0
};

// ========== DOM Elements ==========
const elements = {
    dropZone: null,
    scoreDisplay: null,
    levelDisplay: null,
    coverageDisplay: null,
    bugsDisplay: null,
    coverageFill: null,
    coverageText: null,
    bugsContainer: null,
    appTitle: null,
    appLevel: null,
    resultsModal: null,
    tutorialOverlay: null
};

// ========== Particle System ==========
let particles = [];
const particleCanvas = document.getElementById('particle-canvas');
const particleCtx = particleCanvas.getContext('2d');
particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
});

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.color = color;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.98;
    }

    draw() {
        particleCtx.fillStyle = this.color;
        particleCtx.globalAlpha = this.life;
        particleCtx.beginPath();
        particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        particleCtx.fill();
    }

    isDead() {
        return this.life <= 0;
    }
}

function createParticles(x, y, color, count = 20) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].isDead()) {
            particles.splice(i, 1);
        }
    }
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// ========== Initialization ==========
function initGame() {
    // Cache DOM elements
    elements.dropZone = document.getElementById('drop-zone');
    elements.scoreDisplay = document.getElementById('score-display');
    elements.levelDisplay = document.getElementById('level-display');
    elements.coverageDisplay = document.getElementById('coverage-display');
    elements.bugsDisplay = document.getElementById('bugs-display');
    elements.coverageFill = document.getElementById('coverage-fill');
    elements.coverageText = document.getElementById('coverage-text');
    elements.bugsContainer = document.getElementById('bugs-container');
    elements.appTitle = document.getElementById('app-title');
    elements.appLevel = document.getElementById('app-level');
    elements.resultsModal = document.getElementById('results-modal');
    elements.tutorialOverlay = document.getElementById('tutorial-overlay');

    // Setup drag and drop
    setupDragAndDrop();
    
    // Setup buttons
    document.getElementById('clear-btn').addEventListener('click', clearTestPlan);
    document.getElementById('run-tests-btn').addEventListener('click', runTests);
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    document.getElementById('next-level-btn').addEventListener('click', nextLevel);
    
    // Load level
    loadLevel(gameState.level);
    updateUI();
}

// ========== Drag and Drop System ==========
function setupDragAndDrop() {
    const testCards = document.querySelectorAll('.test-card');
    
    testCards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });
    
    elements.dropZone.addEventListener('dragover', handleDragOver);
    elements.dropZone.addEventListener('dragleave', handleDragLeave);
    elements.dropZone.addEventListener('drop', handleDrop);
}

function handleDragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', this.dataset.test);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    const testId = e.dataTransfer.getData('text/plain');
    
    if (gameState.currentTests.length >= GAME_CONFIG.maxTestsInPlan) {
        showMessage('Maximum tests reached!', 'warning');
        return;
    }
    
    if (gameState.currentTests.includes(testId)) {
        showMessage('Test already added!', 'warning');
        return;
    }
    
    addTestToplan(testId);
}

function addTestToplan(testId) {
    gameState.currentTests.push(testId);
    
    // Find the test card to get its display info
    const testCard = document.querySelector(`[data-test="${testId}"]`);
    const icon = testCard.querySelector('.card-icon').textContent;
    const title = testCard.querySelector('.card-title').textContent;
    
    // Create dropped card
    const droppedCard = document.createElement('div');
    droppedCard.className = 'dropped-card';
    droppedCard.dataset.test = testId;
    droppedCard.innerHTML = `
        <div class="dropped-card-content">
            <span class="card-icon">${icon}</span>
            <span class="card-title">${title}</span>
        </div>
        <button class="remove-btn">✕</button>
    `;
    
    // Add remove functionality
    droppedCard.querySelector('.remove-btn').addEventListener('click', () => {
        removeTestFromPlan(testId);
    });
    
    // Remove empty state if present
    const emptyState = elements.dropZone.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }
    
    elements.dropZone.appendChild(droppedCard);
    
    updateCoverage();
    updateUI();
    
    // Create particle effect
    const rect = droppedCard.getBoundingClientRect();
    createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, '#667eea', 15);
}

function removeTestFromPlan(testId) {
    const index = gameState.currentTests.indexOf(testId);
    if (index > -1) {
        gameState.currentTests.splice(index, 1);
    }
    
    const droppedCard = elements.dropZone.querySelector(`[data-test="${testId}"]`);
    if (droppedCard) {
        droppedCard.remove();
    }
    
    // Add empty state if no tests
    if (gameState.currentTests.length === 0) {
        elements.dropZone.innerHTML = '<p class="empty-state">Drag test steps here to build your test plan</p>';
    }
    
    updateCoverage();
    updateUI();
}

function clearTestPlan() {
    gameState.currentTests = [];
    elements.dropZone.innerHTML = '<p class="empty-state">Drag test steps here to build your test plan</p>';
    updateCoverage();
    updateUI();
}

// ========== Test Execution ==========
function runTests() {
    if (gameState.currentTests.length === 0) {
        showMessage('Add tests to your plan first!', 'warning');
        return;
    }
    
    // Clear previous bugs
    elements.bugsContainer.innerHTML = '';
    gameState.discoveredBugs = [];
    
    // Get current level configuration
    const level = LEVELS[gameState.level - 1];
    
    // Check which bugs are discovered based on tests
    level.bugs.forEach((bug, index) => {
        if (gameState.currentTests.includes(bug.testRequired)) {
            gameState.discoveredBugs.push({
                ...bug,
                id: `bug-${index}`,
                fixed: false
            });
        }
    });
    
    // Display discovered bugs
    if (gameState.discoveredBugs.length > 0) {
        gameState.discoveredBugs.forEach(bug => {
            displayBug(bug);
        });
        showMessage(`Found ${gameState.discoveredBugs.length} bug${gameState.discoveredBugs.length > 1 ? 's' : ''}!`, 'success');
    } else {
        showMessage('No bugs found with these tests. Try more tests!', 'info');
    }
    
    updateUI();
}

function displayBug(bug) {
    const bugElement = document.createElement('div');
    bugElement.className = 'bug-item';
    bugElement.dataset.bugId = bug.id;
    
    const bugType = BUG_TYPES[bug.type];
    
    bugElement.innerHTML = `
        <div class="bug-header">
            <span class="bug-type">${bugType.icon} ${bugType.severity} Bug</span>
            <span class="bug-points">+${bugType.points} pts</span>
        </div>
        <div class="bug-description">${bug.description}</div>
    `;
    
    bugElement.addEventListener('click', () => fixBug(bug));
    
    elements.bugsContainer.appendChild(bugElement);
    
    // Particle effect
    const rect = bugElement.getBoundingClientRect();
    createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, bugType.color, 20);
}

function fixBug(bug) {
    if (bug.fixed) return;
    
    bug.fixed = true;
    gameState.fixedBugs.push(bug);
    
    const bugElement = elements.bugsContainer.querySelector(`[data-bug-id="${bug.id}"]`);
    if (bugElement) {
        bugElement.classList.add('fixed');
        bugElement.classList.add('sparkle');
        
        // Add score
        const bugType = BUG_TYPES[bug.type];
        gameState.score += bugType.points;
        
        // Particle effect
        const rect = bugElement.getBoundingClientRect();
        createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, '#43e97b', 30);
        
        updateUI();
        
        // Check level completion
        const level = LEVELS[gameState.level - 1];
        if (gameState.fixedBugs.length === level.bugs.length) {
            setTimeout(() => showLevelComplete(), 500);
        }
    }
}

// ========== Level Management ==========
function loadLevel(levelNum) {
    const level = LEVELS[levelNum - 1];
    if (!level) return;
    
    gameState.discoveredBugs = [];
    gameState.fixedBugs = [];
    gameState.currentTests = [];
    
    elements.appTitle.textContent = level.name;
    elements.appLevel.textContent = `Level ${levelNum}`;
    elements.bugsContainer.innerHTML = '';
    elements.dropZone.innerHTML = '<p class="empty-state">Drag test steps here to build your test plan</p>';
    
    updateCoverage();
    updateUI();
}

function nextLevel() {
    elements.resultsModal.classList.add('hidden');
    
    if (gameState.level < LEVELS.length) {
        gameState.level++;
        loadLevel(gameState.level);
    } else {
        showGameComplete();
    }
}

function showLevelComplete() {
    const level = LEVELS[gameState.level - 1];
    const bugsFound = gameState.fixedBugs.length;
    const totalBugs = level.bugs.length;
    const coverage = gameState.coverage;
    
    // Calculate bonus
    let bonus = 0;
    if (coverage === 100) {
        bonus += 100;
    }
    if (bugsFound === totalBugs) {
        bonus += 50;
    }
    
    const points = gameState.fixedBugs.reduce((sum, bug) => {
        return sum + BUG_TYPES[bug.type].points;
    }, 0);
    
    // Update results modal
    document.getElementById('results-title').textContent = '🎉 Level Complete!';
    document.getElementById('result-bugs').textContent = `${bugsFound}/${totalBugs}`;
    document.getElementById('result-coverage').textContent = `${coverage}%`;
    document.getElementById('result-points').textContent = points;
    document.getElementById('result-bonus').textContent = `+${bonus}`;
    
    gameState.score += bonus;
    
    elements.resultsModal.classList.remove('hidden');
    
    // Confetti effect
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = 0;
            const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            createParticles(x, y, color, 5);
        }, i * 20);
    }
}

function showGameComplete() {
    // Submit score to leaderboard
    if (window.opener && window.opener.ScoreManager) {
        const playerName = window.opener.ScoreManager.getPlayerName();
        if (playerName) {
            window.opener.ScoreManager.addScore('test-builder', playerName, gameState.score);
        }
    }
    
    document.getElementById('results-title').textContent = '🏆 Game Complete!';
    document.getElementById('result-bugs').textContent = 'All';
    document.getElementById('result-coverage').textContent = '100%';
    document.getElementById('result-points').textContent = gameState.score;
    document.getElementById('result-bonus').textContent = '+500';
    document.getElementById('next-level-btn').textContent = '🔄 Play Again';
    document.getElementById('next-level-btn').onclick = () => {
        gameState.score = 0;
        gameState.level = 1;
        elements.resultsModal.classList.add('hidden');
        loadLevel(1);
    };
    
    elements.resultsModal.classList.remove('hidden');
}

// ========== UI Updates ==========
function updateCoverage() {
    const maxTests = GAME_CONFIG.maxTestsInPlan;
    const currentTests = gameState.currentTests.length;
    gameState.coverage = Math.min(currentTests * GAME_CONFIG.coveragePerTest, 100);
    
    elements.coverageFill.style.width = `${gameState.coverage}%`;
    elements.coverageText.textContent = `${gameState.coverage}%`;
}

function updateUI() {
    elements.scoreDisplay.textContent = gameState.score;
    elements.levelDisplay.textContent = gameState.level;
    elements.coverageDisplay.textContent = `${gameState.coverage}%`;
    
    const level = LEVELS[gameState.level - 1];
    if (level) {
        elements.bugsDisplay.textContent = `${gameState.fixedBugs.length}/${level.bugs.length}`;
    }
}

function showMessage(message, type = 'info') {
    // Simple console log for now - could be enhanced with toast notifications
    console.log(`[${type.toUpperCase()}] ${message}`);
}

function startGame() {
    elements.tutorialOverlay.style.display = 'none';
    
    // Confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createParticles(x, y, '#667eea', 10);
        }, i * 50);
    }
}

// ========== Initialize on Load ==========
window.addEventListener('DOMContentLoaded', initGame);
