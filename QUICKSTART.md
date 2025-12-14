# 🚀 Quick Start Guide

## Instant Play (30 seconds)

### Method 1: Direct Browser Open
```bash
# Download or clone this repo, then:
open index.html
```
That's it! The game runs entirely in your browser.

---

## For Event Hosts

### Setup Checklist
1. ✅ Computer with modern browser (Chrome/Firefox/Edge)
2. ✅ Internet connection (for Phaser.js CDN)
3. ✅ Mouse or touch screen
4. ✅ Optional: Large display for audience viewing

### 3-Minute Setup
```bash
# 1. Clone repo
git clone https://github.com/izrulakmal/testing-games.git
cd testing-games

# 2. Start local server (pick one)
python3 -m http.server 8000
# OR
python -m SimpleHTTPServer 8000
# OR
npx http-server -p 8000

# 3. Open browser
open http://localhost:8000
```

### Fullscreen Mode
Press `F11` in your browser for immersive gameplay!

---

## Game Controls

- **🖱️ Mouse**: Click on bugs to catch them
- **📱 Touch**: Tap on bugs (works on tablets)
- **⏰ Timer**: Watch the clock - catch bugs before time runs out!

---

## Tips for First-Time Players

1. 🎯 **Start with green bugs** - they're slower and easier to catch
2. ⚡ **Move quickly** - critical (red) bugs give 50 points but move fast!
3. 👀 **Scan all zones** - bugs appear in all four testing areas
4. 🏆 **Time bonus matters** - finish fast to earn extra points
5. 📈 **Practice makes perfect** - each level gets progressively harder

---

## Troubleshooting

**Game doesn't load?**
- Check internet connection (needed for Phaser.js)
- Try a different browser
- Clear browser cache and reload

**Bugs are too fast/slow?**
- This is by design! Different bug types move at different speeds
- Critical bugs (red) are fastest, minor bugs (green) are slowest

**Touch not working?**
- Ensure you're using a modern touch-enabled browser
- Try tapping directly on the bug emoji

---

## Event Leaderboard (Manual)

Create a simple leaderboard:
```
┌─────────────────────────────────┐
│     BUG HUNTER LEADERBOARD      │
├─────────────────────────────────┤
│ 1. Sarah    - 1,250 pts (Lvl 6) │
│ 2. Mike     - 1,100 pts (Lvl 5) │
│ 3. Alex     -   980 pts (Lvl 5) │
│ 4. Jordan   -   750 pts (Lvl 4) │
│ 5. Taylor   -   620 pts (Lvl 3) │
└─────────────────────────────────┘
```

---

## Next Steps

- 📖 Read [README.md](README.md) for full documentation
- 🎮 Check [GAME_DESIGN.md](GAME_DESIGN.md) for detailed game mechanics
- 🎨 Customize colors and difficulty in `game.js` and `styles.css`
- 🚀 Deploy to GitHub Pages, Netlify, or Vercel for public access

---

## Support

Questions? Issues? Open a GitHub issue or contact the maintainer.

**Enjoy hunting bugs! 🐛🎮**
