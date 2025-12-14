# 🎪 Event Deployment Guide

Complete guide for setting up Bug Hunter at your department opening day or tech event.

---

## Pre-Event Preparation (1 Week Before)

### 1. Technical Setup
- [ ] **Test on actual event hardware**
  - Bring your laptop/tablet to the venue if possible
  - Test with the actual display you'll use
  - Verify internet connectivity at venue
  
- [ ] **Choose deployment method**
  - Option A: Local (no internet needed)
  - Option B: Hosted URL (easier to share)
  
- [ ] **Create backup plan**
  - Download Phaser.js locally (in case internet fails)
  - Have game on USB drive
  - Bring personal hotspot as internet backup

### 2. Prepare Supporting Materials
- [ ] **Print instructions** (QR code + text)
- [ ] **Create leaderboard** (whiteboard or digital)
- [ ] **Make signage** ("Bug Hunter Game - Try It!")
- [ ] **Prepare prizes** (optional but fun!)

### 3. Marketing
- [ ] Create social media posts
- [ ] Send email announcement
- [ ] Add to event schedule
- [ ] Create teaser video/GIF

---

## Deployment Options

### Option A: Local Hosting (No Internet Required)

**Best for**: Events with unreliable internet

#### Step 1: Download Phaser.js Locally
```bash
cd /path/to/testing-games
curl -o phaser.min.js https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js
```

#### Step 2: Update index.html
Change line 7 from:
```html
<script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
```
To:
```html
<script src="phaser.min.js"></script>
```

#### Step 3: Test Locally
```bash
# Start server
python3 -m http.server 8000

# Open browser
open http://localhost:8000

# Test thoroughly!
```

#### Step 4: Copy to Event Device
- Copy entire folder to USB drive
- Transfer to event computer
- Double-click `index.html` OR run local server

---

### Option B: Cloud Hosting (Internet Required)

**Best for**: Events with reliable internet, multiple locations

#### GitHub Pages (Free)
```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy Bug Hunter game"
git push origin main

# 2. Enable GitHub Pages
# Go to: Settings → Pages
# Source: main branch, root folder
# Save

# 3. Access at:
# https://yourusername.github.io/testing-games
```

#### Netlify (Free, Easiest)
```bash
# Method 1: Drag & Drop
# 1. Visit https://app.netlify.com/drop
# 2. Drag your folder
# 3. Get instant URL like: bug-hunter-abc123.netlify.app

# Method 2: Git Integration
# 1. Sign up at netlify.com
# 2. New site from Git → Connect GitHub
# 3. Select repo → Deploy
# 4. Auto-deploys on every push!
```

#### Vercel (Free, Fast)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
cd testing-games
vercel

# 3. Follow prompts
# 4. Get instant URL!
```

---

## Day-Of Setup (1 Hour Before)

### Equipment Checklist
- [ ] Laptop/Computer with browser
- [ ] Display screen (monitor, TV, or projector)
- [ ] Mouse (or ensure touchscreen works)
- [ ] Power cables and extension cord
- [ ] Ethernet cable (if available)
- [ ] Backup: Phone hotspot
- [ ] Backup: USB with game files

### Physical Setup
1. **Position display** where it's visible but not blocking traffic
2. **Set up computer** with easy access for players
3. **Connect display** (HDMI, DisplayPort, etc.)
4. **Test mouse/touch** - ensure it works smoothly
5. **Adjust screen brightness** for ambient light
6. **Position leaderboard** next to game

### Software Setup
```bash
# 1. Open browser (Chrome recommended)
# 2. Navigate to game URL or local server
# 3. Press F11 for fullscreen
# 4. Test: Catch a few bugs
# 5. Refresh page to restart
```

### Final Checks
- [ ] Game loads within 5 seconds
- [ ] Bugs appear and move
- [ ] Clicking bugs works
- [ ] Score updates correctly
- [ ] Timer counts down
- [ ] Level progression works
- [ ] Game restarts after game over

---

## During Event - Operations

### Greeting Players
```
"Hi! Want to try Bug Hunter? It's a fun game about software testing.
Just click on the bugs before time runs out. Green ones are easiest!
Your score will go on our leaderboard. Ready to play?"
```

### Quick Tutorial (30 seconds)
1. Point to the four testing zones
2. Show the three bug types
3. Demonstrate clicking a bug
4. Point out timer and score
5. "Go ahead and play!"

### Managing the Queue
- **Quick games**: Each round is ~2-3 minutes
- **Rotate players**: When game over screen appears
- **Record scores**: Ask for name and write on leaderboard
- **Encourage retries**: "Want to try again later?"

### Engagement Tips
- **Cheer for players**: "Great catch!" "Watch out for the red ones!"
- **Share facts**: "Did you know? In real QA, we test like this!"
- **Create competition**: "Current high score is 850. Can you beat it?"
- **Photo ops**: Take pictures of players for social media

---

## Leaderboard Management

### Physical Whiteboard
```
═══════════════════════════════════
   🐛 BUG HUNTER CHAMPIONS 🐛
═══════════════════════════════════
Rank | Name      | Score  | Level
─────|-----------|--------|-------
 #1  | Alex      | 1,420  |  Lvl 7
 #2  | Jordan    | 1,250  |  Lvl 6
 #3  | Sam       | 1,100  |  Lvl 6
 #4  | Casey     |   980  |  Lvl 5
 #5  | Morgan    |   850  |  Lvl 5
═══════════════════════════════════
```

### Digital Leaderboard (Future Enhancement)
```javascript
// Add to game.js
function saveScore(name, score, level) {
  let scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
  scores.push({ name, score, level, date: new Date() });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10); // Keep top 10
  localStorage.setItem('leaderboard', JSON.stringify(scores));
}
```

---

## Troubleshooting On-Site

### Issue: Game Won't Load
**Symptoms**: Blank screen or error messages
**Solutions**:
1. Check internet connection
2. Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
3. Try different browser
4. Clear cache and reload
5. Switch to local version

### Issue: Clicking Not Working
**Symptoms**: Bugs don't disappear when clicked
**Solutions**:
1. Check mouse is connected
2. Try different mouse
3. Verify game has focus (click on canvas)
4. Refresh page
5. Switch to touch if available

### Issue: Game Too Fast/Slow
**Symptoms**: Bugs moving erratically
**Solutions**:
1. This is normal for different bug types
2. If universally too fast: Check monitor refresh rate
3. If too slow: Close other programs

### Issue: Screen Too Small
**Symptoms**: Game cut off on display
**Solutions**:
1. Press F11 for fullscreen
2. Zoom out: Ctrl+Minus (Cmd+Minus on Mac)
3. Adjust display resolution
4. Use larger monitor if available

### Issue: No Internet
**Symptoms**: Phaser.js won't load
**Solutions**:
1. Switch to local Phaser.js version (see Option A)
2. Use mobile hotspot
3. Load game on device with internet, then go offline

---

## Prizes & Awards

### Suggested Categories
- 🏆 **Highest Score Overall**
- ⚡ **Fastest Level 5 Completion**
- 🎯 **Most Improved** (best 2nd attempt)
- 🌟 **Perfect Round** (all bugs caught with time remaining)
- 🎨 **Best Team Name** (if doing team play)

### Prize Ideas (Budget-Friendly)
- Custom "Bug Hunter Champion" certificates
- Small tech stickers
- Company swag (pens, notebooks, etc.)
- Coffee/snack vouchers
- "QA Hero" badges
- Feature on company social media

---

## Post-Event Activities

### Immediate (Same Day)
- [ ] Take final leaderboard photo
- [ ] Announce winners
- [ ] Distribute prizes
- [ ] Thank participants
- [ ] Post highlights on social media

### Follow-Up (Next Day)
- [ ] Send thank-you email with final scores
- [ ] Share game URL for remote play
- [ ] Create recap video/post
- [ ] Gather feedback via survey
- [ ] Document lessons learned

### Metrics to Track
- Total players
- Total games played
- Highest score achieved
- Most common level reached
- Player feedback/comments
- Social media engagement

---

## Extending the Event

### Tournament Mode
```
Round 1: Qualifying (All players)
  → Top 8 advance

Round 2: Quarterfinals (1v1 matches)
  → Best of 3 games
  → Winners advance

Round 3: Semifinals (1v1)
  → Best of 3 games

Round 4: Finals (Championship)
  → Best of 5 games
  → Crown the champion!
```

### Team Competition
- Teams of 2-4 people
- Players take turns
- Combined team score
- Relay format: Pass mouse on death

### Educational Workshops
**15-Minute Session**:
1. Introduction to software testing (3 min)
2. Live game demo (2 min)
3. Player participation (5 min)
4. Discussion: Testing in real projects (3 min)
5. Q&A (2 min)

---

## Social Media Kit

### Hashtags
```
#BugHunterGame
#SoftwareTesting
#QAGaming
#TechEvent
#LearnTesting
```

### Sample Posts

**Pre-Event**:
```
🐛 Get ready to hunt some bugs! 
Join us at [Event Name] to play Bug Hunter - 
a fun game teaching software testing concepts.
Prizes for top scorers! 🏆
#BugHunterGame #TechEvent
```

**During Event**:
```
🎮 Bug Hunter is live at [Event Name]! 
Current high score: 1,250 points.
Can you beat it? Stop by booth [X] to play!
#BugHunterGame
[Photo of player]
```

**Post-Event**:
```
🏆 Congratulations to our Bug Hunter Champions!
🥇 1st: Alex - 1,420 pts
🥈 2nd: Jordan - 1,250 pts
🥉 3rd: Sam - 1,100 pts

Thanks to all 47 players who participated!
Play online: [URL]
#BugHunterGame
```

---

## Emergency Contacts

### Technical Support
- **IT Contact**: [Name/Number]
- **Venue Tech Support**: [Number]
- **Backup Person**: [Name/Number]

### Decision Matrix
| Issue | Severity | Action |
|-------|----------|--------|
| Internet down | Medium | Switch to local version |
| Display broken | High | Use laptop screen or cancel |
| Mouse broken | Medium | Use touchpad or get new mouse |
| Computer crash | High | Restart, use backup device |

---

## Success Metrics

### Event Success = 
- ✅ Game runs smoothly >90% of time
- ✅ 20+ unique players participate
- ✅ Positive feedback from >80% of players
- ✅ Social media posts get engagement
- ✅ Players learn 1+ testing concept

---

## Post-Event Checklist

- [ ] Pack up equipment safely
- [ ] Backup leaderboard data/photos
- [ ] Return borrowed equipment
- [ ] Send thank-you to volunteers
- [ ] Complete feedback survey
- [ ] Update game based on feedback
- [ ] Plan next event!

---

## Contact & Support

**Game Issues**: Open GitHub issue
**Event Questions**: [Your contact]
**Technical Support**: [IT contact]

---

**You're ready to host an amazing Bug Hunter event!** 🎮🐛

*Good luck and happy bug hunting!*
