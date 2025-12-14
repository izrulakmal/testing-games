# 🎮 Software Testing Games - Quick Launch Guide

## 🚀 Super Easy Start (One Command!)

Just run this from the testing-games directory:

```bash
./start-games.sh
```

That's it! The script will:
- ✅ Start all 3 servers automatically
- ✅ Open the main page in your browser
- ✅ Run games on separate ports

### 🌐 Access Points

Once started, access:
- **Main Landing Page**: http://localhost:7890
- **Bug Hunter**: http://localhost:3456  
- **Test Plan Builder**: http://localhost:5678

### 🛑 Stop All Games

```bash
./stop-games.sh
```

---

## 📦 What's Running

The launcher starts 3 HTTP servers:
- Port **7890**: Main landing page with game selection
- Port **3456**: Bug Hunter (fast-paced bug catching)
- Port **5678**: Test Plan Builder (drag-and-drop testing)

### Why These Ports?
- **3456** - Easy to remember sequence
- **5678** - Continuation of the sequence  
- **7890** - Completes the pattern
- All uncommon and unlikely to conflict!

---

## 🔧 Manual Start (If Needed)

If you prefer to start manually:

### Main Page Only
```bash
python3 -m http.server 7890
# Visit http://localhost:7890
```

### Bug Hunter Only
```bash
cd bug-hunter-game
python3 -m http.server 3456
# Visit http://localhost:3456
```

### Test Plan Builder Only
```bash
cd test-builder-game
python3 -m http.server 5678
# Visit http://localhost:5678
```

---

## 📁 Project Structure

```
testing-games/
├── start-games.sh          # 🚀 Launch all games
├── stop-games.sh           # 🛑 Stop all games
├── index.html              # 🏠 Main landing page
├── bug-hunter-game/        # 🐛 Bug Hunter game
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

## 🎯 First Time Setup

1. Make scripts executable:
```bash
chmod +x start-games.sh stop-games.sh
```

2. Run the launcher:
```bash
./start-games.sh
```

3. Your browser will automatically open to the main page!

---

## 💡 Tips

- The launcher automatically kills old servers on those ports
- Keep the terminal running while playing
- Press `Ctrl+C` in terminal or run `./stop-games.sh` to stop
- Games open in new tabs from the main page

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
./stop-games.sh
./start-games.sh
```

**Scripts not executable?**
```bash
chmod +x *.sh
```

**Python3 not found?**
- Install Python 3: https://www.python.org/downloads/
- Or use: `python -m http.server` instead

---

## 🎉 That's It!

Everything is set up for maximum ease. Just run `./start-games.sh` and play! 🎮
