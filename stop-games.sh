#!/bin/bash

# Stop all running game servers

echo "🛑 Stopping all game servers..."

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Kill servers on known ports
lsof -ti:7890 | xargs kill -9 2>/dev/null
lsof -ti:3456 | xargs kill -9 2>/dev/null
lsof -ti:5678 | xargs kill -9 2>/dev/null

# Kill PIDs from file if it exists
if [ -f "$SCRIPT_DIR/.game-pids" ]; then
    while read pid; do
        kill -9 $pid 2>/dev/null
    done < "$SCRIPT_DIR/.game-pids"
    rm "$SCRIPT_DIR/.game-pids"
fi

echo "✅ All game servers stopped!"
