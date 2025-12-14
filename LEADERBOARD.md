# 🏆 High Score System - Quick Guide

## Features

### ✅ What's Included
- **Login System** - Simple name input on main page
- **Daily Leaderboards** - Separate rankings for each game
- **Top 10 Rankings** - Shows best players of the day
- **Automatic Sync** - Scores saved automatically when games end
- **Daily Reset** - Leaderboard resets at midnight

---

## How It Works

### 1. Player Login
When you open http://localhost:7890:
- A modal appears asking for your name
- Enter your name (max 20 characters)
- Your name is saved for the session
- Name appears in top-right corner

### 2. Playing Games
- Play Bug Hunter or Test Plan Builder
- Your score is tracked during gameplay
- When game ends, score is automatically submitted
- Returns to main page to see updated rankings

### 3. Leaderboard Display
Main page shows two leaderboards:
- **🐛 Bug Hunter Leaders** - Top 10 scores
- **🧪 Test Plan Builder Leaders** - Top 10 scores

Each entry shows:
- 🥇 🥈 🥉 Medal icons for top 3
- Player name
- Final score

### 4. Daily Reset
- Scores reset automatically at midnight
- Fresh competition each day
- Previous day's scores are cleared

---

## Technical Details

### Data Storage
- Uses browser localStorage
- Stores data with date key
- Format: `testingGames_scores_[Date]`
- Player name: `testingGames_player`

### Score Submission
Both games automatically submit scores when:
- **Bug Hunter**: Game over (time runs out)
- **Test Plan Builder**: All levels completed

### Leaderboard Updates
- Real-time updates when scores are added
- Sorted by score (highest first)
- Limited to top 10 per game
- Hover effects on score items

---

## 🎯 Compete for Top Spot!

### Tips to Rank High

**Bug Hunter:**
- Catch bugs quickly for time bonus
- Focus on critical bugs (50pts)
- Progress through levels for multipliers

**Test Plan Builder:**
- Aim for 100% test coverage (+100 bonus)
- Find all bugs in each level (+50 bonus)
- Complete all 5 levels for maximum points

---

## User Flow

```
1. Visit http://localhost:7890
   ↓
2. Enter your name
   ↓
3. Click game to play
   ↓
4. Play and get high score!
   ↓
5. Game auto-submits score
   ↓
6. Return to main page
   ↓
7. See your rank on leaderboard! 🏆
```

---

## Features Summary

✨ **Simple Login** - Just enter your name
🏆 **Dual Leaderboards** - Track both games separately  
📊 **Top 10 Rankings** - See the best players
🥇 **Medal System** - Gold, silver, bronze for top 3
🎨 **Beautiful UI** - Gradient designs matching each game
♻️ **Daily Reset** - Fresh start every day
💾 **Persistent Storage** - Scores saved in browser
🚀 **Auto-Submit** - No manual score submission needed

---

## Enjoy the Competition! 🎮

Now you can compete with others for the top spot on today's leaderboard. Good luck, and may the best tester win! 🏆
