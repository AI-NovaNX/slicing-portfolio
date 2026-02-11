# Visual Guide: Repository Structure with Nested Repositories

## Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│  slicing-portfolio (Main Repository)                        │
│  https://github.com/AI-NovaNX/slicing-portfolio            │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  WPH-1 (Nested Repository / Submodule)           │    │
│  │  https://github.com/username/WPH-1.git           │    │
│  │  - Independent Git history                        │    │
│  │  - Own commits, branches, tags                    │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  WPH-2 (Nested Repository / Submodule)           │    │
│  │  https://github.com/username/WPH-2.git           │    │
│  │  - Independent Git history                        │    │
│  │  - Own commits, branches, tags                    │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  shared-components (Nested Repository)            │    │
│  │  https://github.com/username/components.git       │    │
│  │  - Shared across multiple projects                │    │
│  │  - Independent versioning                          │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Directory Tree

```
slicing-portfolio/
│
├── .git/                          # Main repository Git data
├── .gitmodules                    # Submodule configuration
├── .gitmodules.example            # Example configuration
│
├── README.md                      # Main documentation
├── SUBMODULES.md                  # Submodule guide (Indonesian)
├── EXAMPLES.md                    # Practical examples
├── TUTORIAL.md                    # Step-by-step tutorial
├── QUICK_REFERENCE.md             # Quick command reference
├── VISUAL_GUIDE.md                # This file
│
├── WPH-1/                         # Nested repository #1
│   ├── .git/                      # → points to WPH-1 repository
│   ├── index.html
│   ├── style.css
│   └── ...
│
├── WPH-2/                         # Nested repository #2
│   ├── .git/                      # → points to WPH-2 repository
│   ├── index.html
│   └── ...
│
└── shared-components/             # Nested repository #3
    ├── .git/                      # → points to components repository
    └── ...
```

## How It Works

### 1. Adding a Submodule

```
Before:                          After:
┌──────────────┐                 ┌──────────────────────────┐
│  slicing-    │                 │  slicing-portfolio       │
│  portfolio   │   add submodule │                          │
│              │  ──────────────→│  ┌────────────────────┐  │
│              │                 │  │  WPH-1/           │  │
│              │                 │  │  (submodule)      │  │
│              │                 │  └────────────────────┘  │
└──────────────┘                 └──────────────────────────┘
```

### 2. Working with Submodules

```
Step 1: Make changes in submodule
┌─────────────────────────────┐
│ cd WPH-1/                   │
│ git checkout main           │
│ # Edit files...             │
│ git add .                   │
│ git commit -m "Update"      │
│ git push origin main        │
└─────────────────────────────┘
                ↓
Step 2: Update main repository
┌─────────────────────────────┐
│ cd ..                       │
│ git add WPH-1               │
│ git commit -m "Update WPH-1"│
│ git push origin main        │
└─────────────────────────────┘
```

### 3. Cloning with Submodules

```
                git clone --recursive
┌──────────┐   ─────────────────────→   ┌──────────────────────┐
│  GitHub  │                             │  Local Computer      │
│          │   Main repo + all submodules│                      │
│  Origin  │   ←────────────────────────→│  ┌────────────────┐ │
│          │                             │  │  main repo     │ │
│          │                             │  │  + WPH-1       │ │
│          │                             │  │  + WPH-2       │ │
└──────────┘                             │  │  + shared/     │ │
                                         │  └────────────────┘ │
                                         └──────────────────────┘
```

## Relationship Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub (Remote)                          │
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐ │
│  │  WPH-1       │    │  WPH-2       │    │  components  │ │
│  │  Repository  │    │  Repository  │    │  Repository  │ │
│  └──────────────┘    └──────────────┘    └──────────────┘ │
│         ↑                   ↑                    ↑          │
│         │                   │                    │          │
│         │    Referenced by .gitmodules          │          │
│         │                   │                    │          │
│  ┌──────┴───────────────────┴────────────────────┴──────┐  │
│  │         slicing-portfolio (Main Repository)          │  │
│  │         Tracks specific commits of submodules        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Commit Flow

```
Main Repository Commit:
┌────────────────────────────────────────┐
│ Commit: 8435942                        │
│ Message: "Update WPH-1"                │
│                                         │
│ Changes:                                │
│ - WPH-1 @ commit abc123                │
│   (points to specific commit in WPH-1) │
└────────────────────────────────────────┘
         │
         │ References
         ↓
┌────────────────────────────────────────┐
│ WPH-1 Repository                       │
│ Commit: abc123                         │
│ Message: "Add new feature"             │
│                                         │
│ Changes:                                │
│ + index.html                            │
│ + style.css                             │
└────────────────────────────────────────┘
```

## Workflow Visualization

### Typical Development Flow

```
1. Clone                    2. Work on Submodule         3. Update Main
┌──────────────┐           ┌──────────────┐            ┌──────────────┐
│ git clone    │           │ cd WPH-1     │            │ cd ..        │
│ --recursive  │──────────→│ git commit   │───────────→│ git add WPH-1│
│              │           │ git push     │            │ git commit   │
└──────────────┘           └──────────────┘            └──────────────┘
                                                                │
                                                                ↓
                           4. Share Changes            ┌──────────────┐
                           ┌──────────────┐            │ git push     │
                           │ Team pulls   │←───────────│              │
                           │ with subs    │            └──────────────┘
                           └──────────────┘
```

## File: .gitmodules

```
┌────────────────────────────────────────────────────────────┐
│ .gitmodules (Configuration File)                           │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ [submodule "WPH-1"]                                        │
│     path = WPH-1                ← Local directory          │
│     url = https://...           ← Remote repository URL    │
│     branch = main               ← Branch to track          │
│                                                             │
│ [submodule "WPH-2"]                                        │
│     path = WPH-2                                           │
│     url = https://...                                      │
│     branch = main                                          │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

## Benefits Visualization

```
Without Submodules:         With Submodules:
┌──────────────────┐        ┌──────────────────────────┐
│ One Large Repo   │        │ Main Repo                │
│                  │        │ ┌──────┐  ┌──────┐      │
│ All code mixed   │        │ │ WPH-1│  │ WPH-2│      │
│ together         │        │ └──────┘  └──────┘      │
│                  │        │    ↓          ↓          │
│ Hard to separate │        │ Separate   Separate     │
│ Hard to share    │        │ history    history      │
│ Hard to version  │        │                          │
└──────────────────┘        │ Easy to share           │
                            │ Independent versions    │
                            │ Modular structure       │
                            └──────────────────────────┘
```

## Common Commands Visual Reference

### Add Submodule
```
┌─────────────────────────────────────────────────┐
│ git submodule add <url> <path>                 │
│                                                 │
│ Example:                                        │
│ git submodule add \                            │
│   https://github.com/user/WPH-1.git \         │
│   WPH-1                                        │
│                                                 │
│ Result: Creates .gitmodules and WPH-1/         │
└─────────────────────────────────────────────────┘
```

### Clone with Submodules
```
┌─────────────────────────────────────────────────┐
│ git clone --recursive <url>                    │
│                                                 │
│ ✓ Clones main repository                       │
│ ✓ Automatically clones all submodules          │
│ ✓ Sets up everything correctly                 │
└─────────────────────────────────────────────────┘
```

### Update Submodules
```
┌─────────────────────────────────────────────────┐
│ git submodule update --remote                  │
│                                                 │
│ ✓ Fetches latest from all submodules          │
│ ✓ Updates to latest commits                    │
│ ✓ Main repo needs commit to save references    │
└─────────────────────────────────────────────────┘
```

## Q&A with Diagrams

### Q: Can I create my repository inside another repository (WPH-)?

**A: YES! Here's how:**

```
Step 1: You have slicing-portfolio
┌────────────────────┐
│ slicing-portfolio  │
└────────────────────┘

Step 2: Add WPH as submodule
┌─────────────────────────────────┐
│ git submodule add               │
│   https://github.com/user/WPH-1 │
│   WPH-1                          │
└─────────────────────────────────┘

Step 3: Result
┌────────────────────┐
│ slicing-portfolio  │
│   ↓                │
│ ┌───────────────┐  │
│ │  WPH-1/      │  │
│ │  (nested)    │  │
│ └───────────────┘  │
└────────────────────┘
```

## Summary

```
┌──────────────────────────────────────────────────────────┐
│            Git Submodules = Nested Repositories          │
│                                                          │
│  ✓ Multiple repositories in one                         │
│  ✓ Independent version control                          │
│  ✓ Easy to share and reuse                             │
│  ✓ Perfect for portfolio projects                       │
│  ✓ Supports projects like WPH-1, WPH-2, etc.           │
│                                                          │
│  Command: git submodule add <url> <path>                │
└──────────────────────────────────────────────────────────┘
```

---

For more information:
- [README.md](README.md) - Getting started
- [TUTORIAL.md](TUTORIAL.md) - Step-by-step guide
- [EXAMPLES.md](EXAMPLES.md) - Practical examples
- [SUBMODULES.md](SUBMODULES.md) - Complete reference
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Command cheat sheet

