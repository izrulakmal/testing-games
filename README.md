# 🐛 Bug Hunter - Software Testing Game

An interactive, colorful browser-based mini-game that teaches the importance of software testing through fun gameplay!

![Game Banner](https://img.shields.io/badge/Game-Bug%20Hunter-purple?style=for-the-badge)
![Technology](https://img.shields.io/badge/Built%20with-Phaser.js-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ready%20to%20Play-green?style=for-the-badge)

## 🎮 Game Concept

**Bug Hunter** is a fast-paced arcade game where players take on the role of a Quality Assurance Engineer tasked with finding and squashing bugs in a software system before they reach production. The game teaches fundamental software testing concepts through engaging gameplay mechanics.

### 📖 Storyline

*"Welcome to TechCorp's QA Department! Our latest software release is scheduled for tomorrow, but the code is crawling with bugs. As our newest Bug Hunter, it's your job to test the system, find every bug, and squash them before they escape into production. The clock is ticking, and the company's reputation is in your hands!"*

## ✨ Game Mechanics

### Core Gameplay
- **Bug Catching**: Click on moving bugs to catch them before time runs out
- **Testing Zones**: Four different testing areas representing real software testing concepts:
  - 🧪 **Unit Tests**: Test individual components
  - 🔗 **Integration Tests**: Test component interactions
  - 🎨 **UI Testing**: Test user interface elements
  - 🚀 **E2E Tests**: Test complete user workflows

### Bug Types
- 🐛 **Minor Bugs** (Green): Simple issues - 10 points, slower movement
- 🐞 **Major Bugs** (Orange): Medium severity - 25 points, moderate speed
- 🦗 **Critical Bugs** (Red): Severe issues - 50 points, fastest movement

### Progression System
- **Levels**: Difficulty increases with each level
- **More Bugs**: Each level requires catching more bugs
- **Time Extension**: Higher levels give more time
- **Speed Increase**: Bugs move faster in later levels

### Scoring
- Base points for each bug caught based on severity
- Time bonus when completing a level
- Progressive difficulty multiplier

## 🎨 Visual Design

### Color Palette
- **Primary Gradient**: Purple to violet (`#667eea` → `#764ba2`)
- **Accent Colors**: 
  - Success Green: `#4CAF50`
  - Warning Orange: `#FFB347`
  - Danger Red: `#FF6B6B`
  - Info Blue: `#2196F3`
  - Time Purple: `#9C27B0`

### UI Elements
- Clean, modern card-based design
- Gradient backgrounds
- Smooth animations and transitions
- Emoji-based bug representations
- Particle effects on bug squashing
- Floating score indicators

### Animations
- Bug spawn with bounce effect
- Pulsing bug animations
- Particle explosions on catch
- Floating score text
- Smooth level transitions
- Fade in/out messages

## 🛠️ Technical Stack

- **Game Engine**: Phaser.js 3.55.2 (loaded via CDN)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Physics**: Phaser Arcade Physics
- **Graphics**: Procedurally generated with Canvas API
- **No Build Required**: Pure client-side, runs in any modern browser

## 📦 Project Structure

```
testing-games/
├── index.html          # Main HTML file with game container
├── styles.css          # Styling for UI and layout
├── game.js             # Phaser.js game logic and mechanics
└── README.md           # This file
```

## 🚀 How to Run

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Start playing immediately!

```bash
# Clone the repository
git clone https://github.com/izrulakmal/testing-games.git

# Navigate to the directory
cd testing-games

# Open in browser (on Mac)
open index.html

# Or on Linux
xdg-open index.html

# Or on Windows
start index.html
```

### Option 2: Local Web Server (Recommended)
For better performance and to avoid CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Deploy to Production

#### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings → Pages
3. Select branch and root folder
4. Access at `https://yourusername.github.io/testing-games`

#### Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository for automatic deployments

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Any Static Host
Upload all files to any static hosting service (AWS S3, Azure Static Web Apps, Firebase Hosting, etc.)

## 🎯 How to Play

### Getting Started
1. Open the game in your browser
2. Read the instructions on the page
3. The game starts automatically

### Controls
- **Mouse/Touch**: Click or tap on bugs to catch them
- **No Keyboard Required**: Fully mouse/touch-driven for accessibility

### Objective
1. Catch the required number of bugs before time runs out
2. Higher severity bugs give more points but move faster
3. Complete levels to progress and increase your score
4. Try to reach the highest level possible!

### Tips for Success
- 🎯 Prioritize critical (red) bugs for maximum points
- ⚡ Catch bugs quickly to preserve time for the next level
- 👀 Watch all four testing zones - bugs appear everywhere
- 🏃 Move your mouse proactively to anticipate bug movements
- 💯 Complete levels fast to earn time bonuses

## 🎓 Educational Value

### Software Testing Concepts Taught
1. **Bug Severity Levels**: Understanding that bugs have different priorities
2. **Testing Types**: Introduction to unit, integration, UI, and E2E testing
3. **Time Pressure**: Simulating real-world deadline constraints
4. **Quality Assurance**: Importance of catching bugs before release
5. **Systematic Testing**: Covering all areas of the system
6. **Risk Management**: Prioritizing high-severity issues

### Learning Outcomes
- Players learn to recognize different types of software testing
- Understand the importance of catching bugs early
- Experience the pressure of quality assurance work
- Learn to prioritize tasks under time constraints
- Develop quick decision-making skills

## 🎨 Asset Reference

### Sprites & Graphics
All graphics are **procedurally generated** using Phaser's Canvas API:
- **Bugs**: Circular sprites with emoji overlays
- **Testing Zones**: Rectangular boxes with labels
- **Particles**: Small circles for explosion effects
- **Background**: Grid pattern representing code

### Emoji Icons Used
- 🐛 Minor Bug
- 🐞 Major Bug
- 🦗 Critical Bug
- 🎯 Target
- 🔍 Search
- ⚡ Speed
- 📈 Progress
- 💯 Score

### Fonts
- Primary: Arial (system font for maximum compatibility)
- Fallback: Sans-serif

## 🔧 Customization

### Adjusting Difficulty
Edit these variables in `game.js`:

```javascript
// Starting values
let bugsToFind = 5;        // Bugs needed per level
let timer = 30;            // Initial time in seconds

// Bug spawn rate
delay: 2000               // Milliseconds between spawns

// Bug speeds (in bugTypes array)
speed: 100, 150, 200      // Pixels per second
```

### Changing Colors
Edit the color values in `styles.css` and `game.js`:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

```javascript
// Bug colors (in bugTypes array)
color: 0x90EE90  // Hex color for bug sprite
```

### Modifying Levels
Adjust progression in the `nextLevel()` function:

```javascript
bugsToFind = 5 + (level - 1) * 2;    // More bugs each level
timer = 30 + (level - 1) * 5;         // More time each level
```

## 🎪 Event Setup Guide

### For Department Opening Day

#### Equipment Needed
- Computer or tablet with modern web browser
- Large display screen (optional but recommended)
- Mouse or touch input device
- Stable internet connection (for CDN) or local hosting

#### Setup Steps
1. Deploy to a public URL or run locally
2. Test on the event device beforehand
3. Keep browser in fullscreen (F11) for immersive experience
4. Have instructions visible nearby
5. Consider a leaderboard (manual or automated)

#### Engagement Ideas
- **High Score Competition**: Track top scores on a whiteboard
- **Time Trials**: Who can complete Level 5 fastest?
- **Team Relay**: Teams take turns, passing the mouse
- **Learning Moments**: Discuss testing concepts between rounds
- **Prizes**: Small rewards for top performers

## 🐛 Known Issues & Troubleshooting

### Common Issues
1. **Game doesn't load**: Check internet connection (Phaser.js loads from CDN)
2. **Slow performance**: Try a modern browser (Chrome, Firefox, Edge)
3. **Bugs overlap**: This is intentional - adds to the challenge!
4. **Timer runs fast/slow**: Depends on browser performance

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (not recommended, may have issues)

## 🚧 Future Enhancements

Potential features for future versions:
- [ ] Sound effects and background music
- [ ] Multiple game modes (Practice, Challenge, Endless)
- [ ] Achievement system
- [ ] Persistent high scores (localStorage)
- [ ] Multiplayer competition
- [ ] More bug types (security bugs, performance bugs)
- [ ] Test case writing mini-game
- [ ] Boss battles (major bug infestations)
- [ ] Power-ups (slow time, auto-catch, x2 points)

## 📄 License

This project is open source and available for educational purposes. Feel free to use, modify, and distribute for teaching software testing concepts.

## 🤝 Contributing

Contributions are welcome! Some ideas:
- Add new bug types
- Create additional levels
- Improve graphics
- Add sound effects
- Optimize performance
- Enhance mobile support

## 👏 Credits

- **Game Design**: Educational software testing game
- **Technology**: Phaser.js game framework
- **Concept**: Making software testing fun and accessible
- **Purpose**: Department opening day event and education

## 📞 Support

For questions, issues, or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for software testers everywhere!**

🎮 **Ready to play? Open `index.html` and start hunting bugs!** 🐛