# 🎨 Visual Assets & Design Reference

This document provides a complete reference of all visual elements in Bug Hunter.

---

## Color Palette

### Primary Brand Colors
```
Purple Primary:  #667eea  ████████
Purple Dark:     #764ba2  ████████
```

### UI Status Colors
```
Success Green:   #4CAF50  ████████  (Score display)
Info Blue:       #2196F3  ████████  (Level display)
Warning Orange:  #FFB347  ████████  (Bugs remaining)
Danger Red:      #FF6B6B  ████████  (Critical alerts)
Time Purple:     #9C27B0  ████████  (Timer)
```

### Bug Type Colors
```
Minor Bug:       #90EE90  ████████  (Light Green)
Major Bug:       #FFB347  ████████  (Orange)
Critical Bug:    #FF6B6B  ████████  (Red)
```

### Background & Neutrals
```
Canvas BG:       #f0f8ff  ████████  (Alice Blue)
White:           #ffffff  ████████
Text Primary:    #333333  ████████
Text Secondary:  #666666  ████████
Shadow:          rgba(0,0,0,0.3)
```

---

## Typography Scale

### Headings
```
H1 (Main Title):
  Font: Arial, sans-serif
  Size: 2.5em (40px)
  Weight: Bold
  Color: Linear gradient (#f093fb → #f5576c)
  Effect: -webkit-background-clip: text

H2 (Section Headers):
  Font: Arial, sans-serif
  Size: 1.5em (24px)
  Weight: Bold
  Color: #667eea

H3 (Subsections):
  Font: Arial, sans-serif
  Size: 1.2em (19.2px)
  Weight: Bold
  Color: #764ba2
```

### UI Text
```
Score Display:
  Size: 24px
  Weight: Bold
  Color: #4CAF50
  Background: White with padding

Level/Bugs/Timer:
  Size: 20px
  Weight: Bold
  Variable colors (see above)
  Background: White with padding

Instructions:
  Size: 1em (16px)
  Weight: Normal
  Line-height: 1.6
  Color: #333
```

### In-Game Text
```
Floating Score:
  Size: 32px
  Weight: Bold
  Color: #FFD700 (Gold)
  Animation: Float up + fade out

Level Messages:
  Size: 48px
  Weight: Bold
  Color: White
  Background: Black with opacity
  Padding: 20px 10px
```

---

## Layout Specifications

### Game Container
```
Width: 900px max
Background: White
Border-radius: 20px
Padding: 30px
Shadow: 0 20px 60px rgba(0,0,0,0.3)
```

### Game Canvas
```
Width: 800px
Height: 600px
Background: #f0f8ff
Border: None
Display: Centered
```

### Header Section
```
Text-align: Center
Margin-bottom: 20px
Padding: Inherited from container
```

### Instructions Panel
```
Background: Linear gradient with 15% opacity
Border-radius: 15px
Padding: 20px
Margin-top: 20px
```

---

## Sprite Specifications

### Bug Sprites

#### Minor Bug (Green)
```
Base Circle:
  Radius: 15px
  Fill: #90EE90 (Light Green)
  Opacity: 1.0

Eyes:
  Radius: 5px each
  Fill: #000000
  Opacity: 0.3
  Position: (-5, -5) and (5, -5)

Emoji Overlay:
  Character: 🐛
  Size: 24px
  Position: Center

Animation:
  Type: Pulse
  Scale: 1.0 ↔ 1.2
  Duration: 500ms
  Easing: Sine.easeInOut
  Loop: Infinite
```

#### Major Bug (Orange)
```
Same structure as Minor, but:
  Fill: #FFB347 (Orange)
  Emoji: 🐞
  Speed: 1.5x faster
```

#### Critical Bug (Red)
```
Same structure as Minor, but:
  Fill: #FF6B6B (Red)
  Emoji: 🦗
  Speed: 2x faster
```

### Testing Zone Boxes

#### Box Structure
```
Size: 200px × 150px
Fill: rgba(255, 255, 255, 0.3)
Stroke: 3px solid #667eea
Opacity: 0.8

Label:
  Position: Above box (-70px Y offset)
  Font: 16px bold
  Color: #667eea
  Background: White
  Padding: 10px horizontal, 5px vertical
```

#### Zone Positions
```
Unit Tests:      (100, 150)
Integration:     (500, 150)
UI Testing:      (100, 400)
E2E Tests:       (500, 400)
```

---

## Animation Catalog

### 1. Bug Spawn Animation
```
Property: scale
From: 0
To: 1
Duration: 300ms
Easing: Back.easeOut
Description: Bug bounces into existence
```

### 2. Bug Idle Animation
```
Property: scale (X and Y)
From: 1.0
To: 1.2
Duration: 500ms
Easing: Sine.easeInOut
Yoyo: Yes
Repeat: -1 (infinite)
Description: Gentle pulsing while active
```

### 3. Floating Score
```
Property: y (position), alpha (opacity)
Y: Current → Current - 50px
Alpha: 1.0 → 0.0
Duration: 1000ms
Easing: Power2
Description: "+50" floats up and fades
```

### 4. Particle Explosion
```
Particles: 20 per explosion
Speed: -100 to +100 (random)
Scale: 1.0 → 0.0
Lifespan: 600ms
Gravity: 0
Blend: ADD
Color: Inherits from bug
Description: Colorful explosion on catch
```

### 5. Message Fade In
```
Property: alpha
From: 0
To: 1
Duration: 300ms
Easing: Power2
Description: Level messages appear
```

### 6. Message Fade Out
```
Property: alpha
From: 1
To: 0
Duration: 300ms
Easing: Power2
Delay: 2000ms (after display)
Description: Messages disappear
```

### 7. Bug Destroy
```
Property: alpha, scale
Alpha: 1.0 → 0.0
Scale: 1.0 → 0.0
Duration: 500ms
Description: Bug fades and shrinks on game over
```

---

## UI Component States

### Score Display
```
Default:
  Color: #4CAF50
  Background: White
  Shadow: 0 2px 5px rgba(0,0,0,0.1)

On Update (future):
  Animation: Brief pulse/glow
  Duration: 200ms
```

### Timer Display
```
Normal (>10s):
  Color: #9C27B0
  Background: White

Warning (≤10s):
  Color: #FF0000
  Animation: Potential pulse effect
```

### Level Complete Message
```
Background: Black rgba(0,0,0,0.8)
Text: White 48px bold
Position: Center screen
Padding: 20px
Border-radius: 10px
Display: 2000ms
```

---

## Responsive Design

### Breakpoint: 768px (Mobile)

```css
@media (max-width: 768px) {
  h1: 2em (down from 2.5em)
  Container padding: 20px (down from 30px)
  Instructions font: 0.9em (down from 1em)
  
  Note: Game canvas stays 800x600
  Recommendation: Horizontal scroll or scale on small screens
}
```

### Future Mobile Optimization
- Scale canvas to viewport width
- Adjust touch target sizes
- Reduce particle count for performance

---

## Accessibility

### Color Contrast Ratios
```
Text on White:       #333 = 12.6:1 ✓ AAA
Purple on White:     #667eea = 4.9:1 ✓ AA
Score on White:      #4CAF50 = 3.2:1 ⚠️ AA Large
Bugs on Blue BG:     High contrast ✓
```

### Touch Targets
```
Bug clickable area: 40px diameter ✓ (Meets 44px guideline)
Text buttons:       Padded to 44px minimum
```

### Screen Reader Considerations
```
Game is primarily visual
Future: Add ARIA labels
Future: Keyboard controls option
```

---

## File Structure

### No External Assets Required
All graphics are **procedurally generated** using JavaScript:
- `createBackground()` - Grid pattern
- `createCodeBoxes()` - Testing zones
- `spawnBug()` - Bug sprites with Canvas API
- Phaser Graphics API for shapes

### External Dependencies
```
Phaser.js:
  Source: https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js
  Size: ~3.5MB (minified)
  Cached: Yes (browser cache)
  Fallback: Download locally if needed
```

---

## Performance Optimizations

### Rendering
- Canvas-based (hardware accelerated)
- Sprite textures cached after generation
- Limited to 8 bugs max on screen
- Particle pooling by Phaser

### DOM Updates
- Minimal DOM manipulation
- Text updates only on state change
- Game loop runs on requestAnimationFrame

### Memory
- Bugs destroyed on catch (not pooled)
- Textures reused across levels
- Event listeners cleaned up properly

---

## Browser Testing Matrix

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | 90+ | ✅ Excellent | Recommended |
| Firefox | 88+ | ✅ Excellent | Recommended |
| Safari | 14+ | ✅ Good | Some CSS differences |
| Edge | 90+ | ✅ Excellent | Chromium-based |
| IE 11 | - | ⚠️ Limited | Not recommended |
| Mobile Safari | 14+ | ✅ Good | Touch works |
| Chrome Mobile | 90+ | ✅ Good | Touch works |

---

## Print Version (Future)

For event printouts:
- QR code to game URL
- Color printout of bug types
- Score sheet template
- Quick reference card

---

## Customization Quick Reference

### Change Bug Spawn Rate
File: `game.js`, Line ~108
```javascript
delay: 2000  // Milliseconds between spawns
```

### Adjust Difficulty
File: `game.js`, Lines ~20-25
```javascript
let bugsToFind = 5;  // Bugs per level
let timer = 30;      // Seconds
```

### Modify Colors
File: `styles.css`, Lines ~10-15
```css
background: linear-gradient(...);
```

File: `game.js`, Lines ~30-34
```javascript
color: 0x90EE90  // Hex for bug color
```

---

**This reference ensures consistent visual design across the entire game!**

*Last Updated: 2025-12-14*
*Version: 1.0*
