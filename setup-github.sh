#!/bin/bash

# Setup GitHub repository script for Beepas
# This script will initialize git, install dependencies, and prepare for GitHub

echo "🚀 === Beepas GitHub Setup ==="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

echo "✅ Git is installed"

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo ""
    echo "❌ GitHub CLI (gh) is not installed."
    echo ""
    echo "To install GitHub CLI on Ubuntu/WSL:"
    echo "  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg"
    echo "  echo \"deb [arch=\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main\" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null"
    echo "  sudo apt update"
    echo "  sudo apt install gh"
    echo ""
    exit 1
fi

echo "✅ GitHub CLI is installed"

# Check if logged into GitHub
if ! gh auth status &> /dev/null; then
    echo ""
    echo "🔐 You need to login to GitHub first."
    echo "Running: gh auth login"
    echo ""
    gh auth login
fi

echo ""

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Install dependencies and setup lefthook
echo ""
echo "📦 Installing dependencies and setting up git hooks..."
pnpm install

# Create initial commit if no commits exist
if ! git rev-parse HEAD &> /dev/null; then
    echo ""
    echo "📝 Creating initial commit..."
    git add .
    git commit -m "Initial commit: Beepas project setup

- React Router v7 with TypeScript
- Vanilla Extract CSS
- ESLint, Prettier, Knip, CSpell
- Lefthook pre-commit hooks
- Turborepo monorepo setup"
    echo "✅ Initial commit created"
else
    echo "✅ Commits already exist"
fi

echo ""
echo "=== 🎉 Setup Complete! ==="
echo ""
echo "Next step: Create and push to GitHub"
echo ""
echo "Run this command:"
echo "  gh repo create beepas --public --source=. --remote=origin --push"
echo ""
echo "Or for a private repository:"
echo "  gh repo create beepas --private --source=. --remote=origin --push"
echo ""
echo "After creating the repo, you can:"
echo "  - View it: gh repo view --web"
echo "  - Add collaborators: gh repo edit --add-collaborator USERNAME"
echo ""


