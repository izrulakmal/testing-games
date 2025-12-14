# 🎮 Bug Hunter - Game Design Document

## Executive Summary

**Bug Hunter** is an interactive browser-based arcade game designed to teach software testing concepts through engaging, colorful gameplay. Perfect for department events, educational settings, or anyone curious about quality assurance.

---

## 1. Game Concept

### Vision Statement
Create a fun, accessible game that demystifies software testing and demonstrates its importance in software development through arcade-style gameplay.

### Target Audience
- **Primary**: Software developers, QA engineers, IT students
- **Secondary**: General public at tech events, all ages 8+
- **Setting**: Department opening day events, tech fairs, educational workshops

### Core Experience
Players experience the thrill and pressure of quality assurance work in a compressed, gamified format. The rush of catching bugs, the satisfaction of completing levels, and the educational value of understanding different testing types create an engaging learning experience.

---

## 2. Detailed Mechanics

### 2.1 Gameplay Loop

```
Game Start
    ↓
Level Introduction → Bugs Spawn → Player Clicks Bugs → Bugs Caught
    ↑                                                        ↓
Level Complete ← Time Bonus Calculated ← Required Bugs Met
    ↓
Next Level (harder) or Game Over (time expired)
```

### 2.2 Bug Behavior

#### Movement Patterns
- **Initial Direction**: Random 360° angle
- **Velocity**: Based on bug type (100-200 px/s)
- **Boundaries**: Bounce off screen edges
- **Randomization**: Unpredictable patterns keep gameplay fresh

#### Visual Feedback
- **Spawn Animation**: Scale from 0 to 1 with bounce easing
- **Idle Animation**: Continuous pulsing (scale 1.0 ↔ 1.2)
- **Catch Effect**: Particle explosion + floating score text
- **Destroy Animation**: Fade out and scale down

### 2.3 Level Progression

| Level | Bugs Required | Time Limit | Bug Speed | Spawn Rate |
|-------|--------------|------------|-----------|------------|
| 1     | 5            | 30s        | Base      | 2s         |
| 2     | 7            | 35s        | +10%      | 2s         |
| 3     | 9            | 40s        | +20%      | 1.8s       |
| 4     | 11           | 45s        | +30%      | 1.8s       |
| 5+    | +2 per level | +5s        | +10%/lvl  | 1.5s       |

### 2.4 Scoring System

#### Base Points
- Minor Bug: 10 points
- Major Bug: 25 points
- Critical Bug: 50 points

#### Bonuses
- Time Bonus: (seconds remaining) × 5 points per level completion
- No miss bonus: (potential future feature)
- Combo multiplier: (potential future feature)

---

## 3. UI/UX Design

### 3.1 Layout Structure

```
┌─────────────────────────────────────────────────┐
│  Header: Bug Hunter Title & Tagline             │
├─────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  │          Game Canvas (800x600)            │  │
│  │                                           │  │
│  │  Score | Level | Bugs Left    Time: 30s  │  │
│  │  ─────────────────────────────────────    │  │
│  │                                           │  │
│  │    [Unit Tests]    [Integration Tests]   │  │
│  │                                           │  │
│  │         🐛 🐞 🦗 (moving bugs)            │  │
│  │                                           │  │
│  │    [UI Testing]    [E2E Tests]           │  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  Instructions Panel:                            │
│  • How to Play                                  │
│  • Bug Types & Points                           │
│  • Tips for Success                             │
└─────────────────────────────────────────────────┘
```

### 3.2 Visual Hierarchy

1. **Primary Focus**: Game canvas with moving bugs
2. **Secondary Info**: Score, level, time indicators
3. **Tertiary Context**: Testing zone labels
4. **Supporting Content**: Instructions below game

### 3.3 Color Psychology

- **Purple Gradient**: Professional, creative, tech-forward
- **Green**: Success, correct actions, minor severity
- **Orange**: Warning, moderate attention needed
- **Red**: Urgency, critical issues, time pressure
- **Blue**: Information, calmness, stability
- **White**: Clean, spacious, professional

### 3.4 Accessibility Features

- **High Contrast**: All text readable against backgrounds
- **Large Click Targets**: Bugs are 40px diameter
- **Clear Feedback**: Visual and textual confirmations
- **No Sound Required**: Fully playable without audio
- **No Time Pressure (Practice Mode)**: Future feature
- **Touch Friendly**: Works on tablets and touch screens

---

## 4. Technical Implementation

### 4.1 Architecture

```
index.html (Structure)
    ├── Phaser.js CDN (Game Engine)
    ├── styles.css (Visual Styling)
    └── game.js (Game Logic)
        ├── Configuration
        ├── Game State
        ├── Scene Functions
        │   ├── preload()
        │   ├── create()
        │   └── update()
        └── Helper Functions
            ├── spawnBug()
            ├── catchBug()
            ├── nextLevel()
            ├── gameOver()
            └── updateTimer()
```

### 4.2 State Management

```javascript
// Global game state
{
    score: 0,              // Player's total score
    level: 1,              // Current level
    bugsToFind: 5,         // Target bugs for level
    bugsCaught: 0,         // Bugs caught this level
    timer: 30,             // Seconds remaining
    gameActive: true,      // Is game running?
    bugs: [],              // Active bug sprites
    codeBoxes: []          // Testing zone references
}
```

### 4.3 Performance Optimizations

- **Sprite Reuse**: Texture generation is cached
- **Object Pooling**: Could be added for bugs (future)
- **Limited Spawns**: Max 8 bugs on screen at once
- **Efficient Updates**: Only active bugs are moved
- **DOM Minimal**: Canvas-based rendering reduces reflows

### 4.4 Browser Compatibility

**Minimum Requirements**:
- ES6 JavaScript support
- Canvas API
- Modern CSS (flexbox, gradients)
- Web Fonts

**Tested Browsers**:
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

---

## 5. Asset Specification

### 5.1 Procedurally Generated Graphics

All visual assets are created programmatically using Phaser's Graphics API:

#### Bug Sprites
```javascript
// Example: Minor Bug
graphics.fillStyle(0x90EE90, 1);      // Light green body
graphics.fillCircle(0, 0, 15);         // Main circle
graphics.fillStyle(0x000000, 0.3);     // Eyes
graphics.fillCircle(-5, -5, 5);        // Left eye
graphics.fillCircle(5, -5, 5);         // Right eye
+ Emoji overlay: '🐛'
```

#### Testing Zone Boxes
- Rectangle with rounded corners
- 3px stroke in brand color (#667eea)
- Semi-transparent white fill (30% opacity)
- Text label above box

#### Particle Effects
- 10x10px circles
- Emitted in all directions
- Fade out over 600ms
- Physics: no gravity, random velocity

### 5.2 Color Palette Reference

```css
/* Primary Brand Colors */
--purple-primary: #667eea;
--purple-dark: #764ba2;

/* Status Colors */
--success: #4CAF50;
--warning: #FFB347;
--danger: #FF6B6B;
--info: #2196F3;
--time: #9C27B0;

/* Bug Colors */
--bug-minor: #90EE90;    /* Light Green */
--bug-major: #FFB347;    /* Orange */
--bug-critical: #FF6B6B; /* Red */

/* UI Colors */
--background: #f0f8ff;   /* Alice Blue */
--text-primary: #333333;
--text-secondary: #666666;
--white: #ffffff;
--shadow: rgba(0,0,0,0.3);
```

### 5.3 Typography

```css
/* Heading Styles */
h1: {
    font-size: 2.5em;
    gradient: linear-gradient(45deg, #f093fb, #f5576c);
    font-weight: bold;
}

h2: {
    font-size: 1.5em;
    color: #667eea;
    font-weight: bold;
}

/* UI Text */
.score: {
    font-size: 24px;
    color: #4CAF50;
    background: white;
    padding: 10px;
}

.instructions: {
    font-size: 1em;
    line-height: 1.6;
}
```

### 5.4 Animation Specifications

| Animation | Target | Duration | Easing | Loop |
|-----------|--------|----------|--------|------|
| Bug Spawn | Scale 0→1 | 300ms | Back.easeOut | No |
| Bug Pulse | Scale 1↔1.2 | 500ms | Sine.easeInOut | Yes |
| Score Float | Y -50, α 1→0 | 1000ms | Power2 | No |
| Message Fade In | α 0→1 | 300ms | Power2 | No |
| Message Fade Out | α 1→0 | 300ms | Power2 | No |

---

## 6. Educational Integration

### 6.1 Teaching Moments

**During Gameplay**:
- Testing zone labels introduce testing vocabulary
- Bug severity teaches prioritization
- Time pressure simulates real deadlines
- Progressive difficulty shows testing complexity

**Post-Game Discussion Topics**:
- Why do we need different types of tests?
- How do you prioritize bugs in real projects?
- What happens when bugs reach production?
- How does time pressure affect quality?

### 6.2 Real-World Parallels

| Game Element | Real QA Concept |
|--------------|-----------------|
| Catching bugs | Bug detection & reporting |
| Bug severity | Priority/severity classification |
| Testing zones | Testing pyramid levels |
| Time limit | Sprint/release deadlines |
| Levels | Project complexity growth |
| Score | Quality metrics/KPIs |

### 6.3 Workshop Integration

**15-Minute Activity Plan**:
1. **Introduction (2 min)**: Explain software testing importance
2. **Demo (2 min)**: Show one level being played
3. **Play Session (8 min)**: Participants play
4. **Debrief (3 min)**: Discuss testing concepts learned

---

## 7. Deployment Guide

### 7.1 Quick Start (No Server)

```bash
# 1. Clone or download
git clone https://github.com/izrulakmal/testing-games.git

# 2. Open in browser
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### 7.2 Local Development Server

**Python**:
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Node.js**:
```bash
npx http-server -p 8000
# Visit: http://localhost:8000
```

**PHP**:
```bash
php -S localhost:8000
# Visit: http://localhost:8000
```

### 7.3 Production Deployment

#### GitHub Pages
```bash
# Push to main/master branch
git push origin main

# Enable Pages in repo Settings → Pages
# Select branch: main, folder: / (root)
# URL: https://username.github.io/testing-games
```

#### Netlify
```bash
# Option 1: Drag & Drop
# Visit: https://app.netlify.com/drop
# Drag folder → Instant deploy

# Option 2: Git Integration
# Connect GitHub repo → Auto-deploy on push
```

#### Vercel
```bash
npm i -g vercel
cd testing-games
vercel
# Follow prompts → Get deploy URL
```

#### Custom Server
```bash
# Upload files via FTP/SFTP
# Or use rsync:
rsync -avz ./ user@server:/var/www/html/bug-hunter/

# Ensure web server serves static files
# Apache: No config needed
# Nginx: Add location block for /
```

### 7.4 Environment Considerations

**CDN Dependency**:
- Phaser.js loads from `cdn.jsdelivr.net`
- Requires internet on first load
- Browser caches for offline replay

**To Remove CDN Dependency**:
```bash
# Download Phaser.js
curl -o phaser.min.js https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js

# Update index.html
<script src="phaser.min.js"></script>
```

---

## 8. Event Setup Checklist

### Pre-Event (1 Week Before)

- [ ] Test game on event hardware
- [ ] Deploy to public URL or local server
- [ ] Create printed instructions/QR code
- [ ] Prepare leaderboard tracking system
- [ ] Test on multiple browsers
- [ ] Create event poster/signage

### Setup Day (1 Hour Before)

- [ ] Connect display screen
- [ ] Test internet connection
- [ ] Open game in fullscreen browser
- [ ] Set up leaderboard whiteboard/screen
- [ ] Prepare event staff instructions
- [ ] Test mouse/touch input
- [ ] Have backup device ready

### During Event

- [ ] Monitor game performance
- [ ] Update leaderboard regularly
- [ ] Engage with players
- [ ] Explain testing concepts
- [ ] Collect feedback
- [ ] Take photos/videos

### Post-Event

- [ ] Collect final scores
- [ ] Announce winners
- [ ] Gather feedback for improvements
- [ ] Share photos on social media
- [ ] Document lessons learned

---

## 9. Customization Guide

### 9.1 Adjusting Difficulty

**Make It Easier**:
```javascript
// game.js - Increase time
let timer = 45; // Default: 30

// Reduce bugs needed
let bugsToFind = 3; // Default: 5

// Slow down bugs
speed: 80, 120, 160 // Default: 100, 150, 200
```

**Make It Harder**:
```javascript
// Decrease time
let timer = 20;

// More bugs needed
let bugsToFind = 8;

// Speed up bugs
speed: 150, 200, 300
```

### 9.2 Theming

**Change Color Scheme**:
```css
/* styles.css - Update gradients */
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);

/* game.js - Update bug colors */
color: 0xFF69B4, // Pink
color: 0x00CED1, // Turquoise
color: 0xFFD700  // Gold
```

**Add Company Branding**:
```html
<!-- index.html -->
<div id="header">
    <img src="company-logo.png" alt="Logo">
    <h1>🐛 Bug Hunter - [Company Name] Edition 🐛</h1>
</div>
```

### 9.3 Adding Features

**Sound Effects** (Future Enhancement):
```javascript
// In create() function
this.load.audio('catch', 'assets/catch.mp3');
this.load.audio('gameOver', 'assets/gameover.mp3');

// In catchBug() function
this.sound.play('catch');
```

**High Score Persistence**:
```javascript
// Save score
localStorage.setItem('bugHunterHighScore', score);

// Load on game start
let highScore = localStorage.getItem('bugHunterHighScore') || 0;
```

---

## 10. Troubleshooting

### Common Issues

**Issue**: Game doesn't load
- **Cause**: No internet (CDN blocked)
- **Solution**: Download Phaser.js locally

**Issue**: Bugs are too fast
- **Cause**: High refresh rate monitor
- **Solution**: Adjust speed values in bugTypes array

**Issue**: Clicks not registering
- **Cause**: Touch vs. mouse events
- **Solution**: Already handled by Phaser's input system

**Issue**: Choppy animations
- **Cause**: Weak hardware
- **Solution**: Reduce particle count or disable particles

### Performance Tips

```javascript
// Reduce particle count
particles.emitParticleAt(bug.x, bug.y, 10); // Default: 20

// Limit bug spawns
if (bugs.length >= 5) return; // Default: 8

// Disable animations for low-end devices
// Comment out pulsing tween in spawnBug()
```

---

## 11. Future Roadmap

### Version 1.1 (Next Release)
- [ ] Sound effects and music toggle
- [ ] Persistent high scores
- [ ] Achievement system
- [ ] Multiple difficulty modes

### Version 2.0 (Major Update)
- [ ] Test case writing mini-game
- [ ] Multiplayer competitive mode
- [ ] More bug types (memory leaks, security flaws)
- [ ] Boss battles (major system failures)

### Version 3.0 (Advanced Features)
- [ ] Backend leaderboard
- [ ] User accounts
- [ ] Unlockable content
- [ ] Mobile app version

---

## 12. Metrics & Analytics

### Success Indicators

**Engagement**:
- Average play time per session
- Number of levels completed
- Return player rate

**Learning**:
- Post-game survey results
- Testing concept retention
- Behavior change in real work

**Technical**:
- Browser compatibility success rate
- Load time under 3 seconds
- Zero crashes during event

---

## Conclusion

Bug Hunter successfully combines education with entertainment, creating an engaging experience that teaches software testing fundamentals. Its simple deployment, vibrant design, and clear educational value make it perfect for department events and technical workshops.

**Ready to deploy? Start with `index.html` and customize to your needs!**

---

*Document Version: 1.0*
*Last Updated: 2025-12-14*
*Maintained by: Testing Games Project Team*
