# Beepas

A modern web application built with React Router and Vanilla Extract CSS.

## Initial Setup (First Time)

If you haven't pushed this to GitHub yet:

```bash
# Make the setup script executable and run it
chmod +x setup-github.sh
./setup-github.sh

# Create and push to GitHub in Rose-Budz organization (public repo)
gh repo create Rose-Budz/beepas --public --source=. --remote=origin --push

# Or for a private repo in Rose-Budz organization
gh repo create Rose-Budz/beepas --private --source=. --remote=origin --push
```

The setup script will:
- ✅ Initialize git repository
- ✅ Install all dependencies
- ✅ Set up git hooks
- ✅ Create initial commit

## Quick Start

### Install Dependencies
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

## Quality Checks

### Run All Checks
```bash
pnpm check  # Runs typecheck, lint, format check, spell check, and knip
```

### Auto-Fix All Issues
```bash
pnpm fix  # Runs lint:fix, format, and knip:fix
```

### Individual Commands

**Linting:**
```bash
pnpm lint        # Check for linting issues
pnpm lint:fix    # Auto-fix linting issues
```

**Formatting:**
```bash
pnpm format:check  # Check formatting
pnpm format        # Auto-format code
```

**Type Checking:**
```bash
pnpm typecheck
```

**Spell Check:**
```bash
pnpm spell
```

**Unused Code Detection:**
```bash
pnpm knip        # Check for unused code
pnpm knip:fix    # Auto-remove unused exports
```

**Pre-commit Hook:**
```bash
pnpm pre-commit  # Test pre-commit hooks manually
```

## Git Hooks

This project uses [Lefthook](https://github.com/evilmartians/lefthook) for git hooks.

### Pre-commit Hook
Automatically runs before each commit:
- ✅ Auto-fixes linting issues
- ✅ Auto-formats code
- ✅ Auto-fixes unused exports
- ⚠️ Shows spell check warnings (non-blocking)
- 🚫 Fails on type errors (manual fix required)

The hooks are automatically installed when you run `pnpm install`.

## Project Structure

```
beepas/
├── apps/
│   └── web/           # Main web application
│       ├── app/       # Application code
│       │   ├── routes/      # Page routes
│       │   ├── components/  # React components
│       │   ├── content/     # Static content
│       │   ├── styles/      # Vanilla Extract styles
│       │   └── utils/       # Utility functions
│       └── public/    # Static assets
└── package.json       # Root package configuration
```

## Tech Stack

- **Framework:** [React Router v7](https://reactrouter.com/)
- **Styling:** [Vanilla Extract](https://vanilla-extract.style/)
- **Type Safety:** TypeScript
- **Code Quality:** ESLint, Prettier, Knip, CSpell
- **Git Hooks:** Lefthook
- **Build Tool:** Vite
- **Package Manager:** pnpm

## Contributing

1. Make your changes
2. Run `pnpm fix` to auto-fix issues
3. Run `pnpm check` to ensure everything passes
4. Commit (pre-commit hooks will run automatically)
5. Push your changes

## License

Private project
