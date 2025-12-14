#!/bin/bash

# Software Testing Games Launcher
# Starts both games on separate ports

echo "🎮 Starting Software Testing Games..."
echo ""

# Kill any existing servers on these ports
lsof -ti:3456 | xargs kill -9 2>/dev/null
lsof -ti:5678 | xargs kill -9 2>/dev/null
lsof -ti:7890 | xargs kill -9 2>/dev/null

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Start main landing page
echo "🌐 Starting Main Landing Page on http://localhost:7890"
cd "$SCRIPT_DIR"
python3 -m http.server 7890 > /dev/null 2>&1 &
MAIN_PID=$!

# Start Bug Hunter game
echo "🐛 Starting Bug Hunter on http://localhost:3456"
cd "$SCRIPT_DIR/bug-hunter-game"
python3 -m http.server 3456 > /dev/null 2>&1 &
BUG_HUNTER_PID=$!

# Start Test Plan Builder game
echo "🧪 Starting Test Plan Builder on http://localhost:5678"
cd "$SCRIPT_DIR/test-builder-game"
python3 -m http.server 5678 > /dev/null 2>&1 &
TEST_BUILDER_PID=$!

echo ""
echo "✅ All games are running!"
echo ""
echo "📍 Access Points:"
echo "   Main Page:           http://localhost:7890"
echo "   Bug Hunter:          http://localhost:3456"
echo "   Test Plan Builder:   http://localhost:5678"
echo ""
echo "🛑 To stop all games, press Ctrl+C or run: ./stop-games.sh"
echo ""

# Save PIDs to file for stop script
echo "$MAIN_PID" > "$SCRIPT_DIR/.game-pids"
echo "$BUG_HUNTER_PID" >> "$SCRIPT_DIR/.game-pids"
echo "$TEST_BUILDER_PID" >> "$SCRIPT_DIR/.game-pids"

# Open main page in default browser (macOS)
sleep 1
open http://localhost:7890

# Keep script running
wait
