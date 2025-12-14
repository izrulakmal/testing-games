# 🎮 Software Testing Games

**Learn software testing through interactive gameplay!**

Two browser-based educational games that teach real testing concepts while you play.

![Status](https://img.shields.io/badge/Status-Ready%20to%20Play-green?style=flat-square)
![Games](https://img.shields.io/badge/Games-2-purple?style=flat-square)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square)

---

## 🚀 Quick Start (One Command!)

```bash
./start-games.sh
```

That's it! This launches:
- ✅ Main landing page (http://localhost:7890)
- ✅ Bug Hunter game (http://localhost:3456)
- ✅ Test Plan Builder (http://localhost:5678)
- ✅ Automatically opens your browser

**First time?** Make the script executable:
```bash
chmod +x start-games.sh stop-games.sh
```

**To stop all games:**
```bash
./stop-games.sh
```

---

## 🎯 The Games

### 🐛 Bug Hunter
**Fast-paced bug catching action**

- Click bugs before they escape
- 3 severity levels (Minor, Major, Critical)
- Progressive difficulty
- Real-time scoring
- Learn bug classification

**Play at:** http://localhost:3456

### 🧪 Test Plan Builder
**Strategic testing education**

- Drag-and-drop test planning
- 15 different test types
- 5 progressive levels
- Discover and fix 25+ bugs
- Learn security, UI, and performance testing

**Play at:** http://localhost:5678

---

## 📁 Project Structure

```
testing-games/
├── start-games.sh          # 🚀 Launch all games
├── stop-games.sh           # 🛑 Stop all servers
├── index.html              # 🏠 Main landing page
├── QUICKSTART.md           # 📖 Detailed instructions
├── bug-hunter-game/        # 🐛 Bug Hunter
│   ├── index.html
│   ├── game.js
│   └── styles.css
└── test-builder-game/      # 🧪 Test Plan Builder
    ├── index.html
    ├── game.js
    ├── styles.css
    └── GAME_CONCEPT.md
```

---

## 🎓 What You'll Learn

### Bug Hunter
- Bug severity classification
- Quick identification skills
- Testing under time pressure
- Pattern recognition

### Test Plan Builder
- **Input Validation Testing** - Empty fields, special characters
- **Security Testing** - SQL injection, XSS, authentication
- **UI Testing** - Responsive design, accessibility
- **Performance Testing** - Load time, memory usage
- **Test Coverage** - Why comprehensive testing matters

---

## 💻 Technical Details

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local server)
- Internet connection (for Phaser.js CDN)

### Technologies
- **HTML5** - Structure
- **CSS3** - Styling & animations
- **JavaScript (ES6+)** - Game logic
- **Phaser.js** - Game engine (Bug Hunter)
- **Canvas API** - Particle effects

### Ports Used
- **7890** - Main landing page
- **3456** - Bug Hunter
- **5678** - Test Plan Builder

*Sequential and uncommon - no conflicts!*

---

## 🎯 Use Cases

Perfect for:
- 🎓 **Teaching** - Software testing courses
- 🏢 **Training** - New QA engineer onboarding
- 🎪 **Events** - Tech conferences, department open days
- 👨‍💻 **Self-Learning** - Individual study
- 🎮 **Fun** - Making testing education engaging

---

## 🎮 Manual Start (Alternative)

If you prefer manual control:

```bash
# Main page
python3 -m http.server 7890

# Bug Hunter
cd bug-hunter-game && python3 -m http.server 3456

# Test Plan Builder  
cd test-builder-game && python3 -m http.server 5678
```

---

## 🛠️ Troubleshooting

**Ports already in use?**
```bash
./stop-games.sh
./start-games.sh
```

**Scripts not executable?**
```bash
chmod +x *.sh
```

**Browser doesn't open automatically?**
Manually visit: http://localhost:7890

---

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Detailed launch guide
- **[test-builder-game/GAME_CONCEPT.md](test-builder-game/GAME_CONCEPT.md)** - Test Plan Builder design
- **[test-builder-game/README.md](test-builder-game/README.md)** - Test Plan Builder guide
- **[test-builder-game/PACKAGE_INFO.md](test-builder-game/PACKAGE_INFO.md)** - Complete package info

---

## ✨ Features

### Main Landing Page
- 🎨 Beautiful gradient design
- ✨ Animated particle effects
- 🎯 Interactive game cards
- 📱 Responsive layout
- 🚀 Direct links to both games

### Bug Hunter
- 🎮 Phaser.js powered gameplay
- 🎯 Click-based mechanics
- ⏱️ 30 seconds per level
- 📈 Unlimited levels
- 🎨 Colorful bug sprites

### Test Plan Builder
- 🖱️ Drag & drop interface
- ✨ Particle effects
- 🎊 Confetti celebrations
- 📊 Real-time coverage meter
- 🎯 5 progressive levels

---

## 🎉 Ready to Play?

```bash
./start-games.sh
```

**Have fun learning software testing!** 🐛🧪

---

## 📝 License

Educational use encouraged. Built for QA engineers, students, and testing enthusiasts.

---

## 🤝 Credits

Created to make software testing education engaging and accessible through interactive gameplay.

**Technologies:**
- Phaser.js for game engine
- Modern web standards
- Love for quality assurance ❤️
