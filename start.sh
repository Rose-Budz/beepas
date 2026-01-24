#!/bin/bash
# Startup script for Beepa's Country Goods

echo "🍯 Starting Beepa's Country Goods Development Server..."
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root (/repos/beepas)"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
    echo ""
fi

# Check for node_modules in web app
if [ ! -d "apps/web/node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
    echo ""
fi

echo "✅ Dependencies installed"
echo "🚀 Starting development server..."
echo ""
echo "   Your app will be available at: http://localhost:5173"
echo ""
echo "   Press Ctrl+C to stop the server"
echo ""

pnpm dev
