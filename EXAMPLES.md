# Practical Examples: Working with Nested Repositories

This document provides practical, real-world examples of using Git submodules in the slicing-portfolio repository.

## Example 1: Adding a WPH Project as a Nested Repository

Let's say you want to add your WPH (Web Programming Homework) project inside this portfolio repository.

### Step-by-Step

```bash
# 1. Navigate to your slicing-portfolio directory
cd slicing-portfolio

# 2. Add the WPH project as a submodule
git submodule add https://github.com/your-username/WPH-project.git WPH-project

# 3. Git will create:
#    - .gitmodules file (configuration)
#    - WPH-project/ directory (the nested repository)

# 4. Check what was created
ls -la
cat .gitmodules

# 5. Commit the new submodule
git add .gitmodules WPH-project
git commit -m "Add WPH-project as nested repository"

# 6. Push to GitHub
git push origin main
```

### Result

Your directory structure will look like:

```
slicing-portfolio/
├── .git/
├── .gitmodules
├── README.md
├── SUBMODULES.md
├── EXAMPLES.md
└── WPH-project/          # Your nested WPH repository
    ├── .git/
    ├── index.html
    ├── style.css
    └── ...
```

## Example 2: Adding Multiple Related Projects

You might want to organize multiple projects in your portfolio:

```bash
# Add multiple WPH assignments
git submodule add https://github.com/your-username/WPH-1.git projects/WPH-1
git submodule add https://github.com/your-username/WPH-2.git projects/WPH-2
git submodule add https://github.com/your-username/WPH-3.git projects/WPH-3

# Add other portfolio components
git submodule add https://github.com/your-username/ui-components.git components/ui
git submodule add https://github.com/your-username/shared-utils.git utils/shared

# Commit all changes
git add .gitmodules projects/ components/ utils/
git commit -m "Add all portfolio projects as submodules"
git push
```

### Resulting Structure

```
slicing-portfolio/
├── projects/
│   ├── WPH-1/           # Nested repository
│   ├── WPH-2/           # Nested repository
│   └── WPH-3/           # Nested repository
├── components/
│   └── ui/              # Nested repository
└── utils/
    └── shared/          # Nested repository
```

## Example 3: Team Member Cloning Your Portfolio

When someone else wants to clone your portfolio with all nested repositories:

```bash
# Method 1: Clone everything at once (RECOMMENDED)
git clone --recursive https://github.com/AI-NovaNX/slicing-portfolio.git
cd slicing-portfolio
# All submodules are automatically cloned!

# Method 2: Clone first, then get submodules
git clone https://github.com/AI-NovaNX/slicing-portfolio.git
cd slicing-portfolio
git submodule update --init --recursive
# Now all submodules are loaded
```

## Example 4: Making Changes to a Nested Repository

Let's say you want to update your WPH-project:

```bash
# 1. Navigate to the submodule
cd slicing-portfolio/WPH-project

# 2. Make sure you're on the right branch
git checkout main

# 3. Create a new feature branch
git checkout -b add-contact-form

# 4. Make your changes
echo "<form>Contact Form</form>" >> contact.html

# 5. Commit in the submodule
git add contact.html
git commit -m "Add contact form"

# 6. Push the submodule changes
git push origin add-contact-form

# 7. Go back to the main repository
cd ..

# 8. The main repo sees the submodule has changed
git status
# Output: modified: WPH-project (new commits)

# 9. Update the main repository to track the new commit
git add WPH-project
git commit -m "Update WPH-project with contact form"
git push origin main
```

## Example 5: Updating All Nested Repositories

When you want to get the latest changes from all submodules:

```bash
# Update all submodules to their latest commits on tracked branches
git submodule update --remote --merge

# Check what changed
git status

# If you want to keep these updates
git add .
git commit -m "Update all submodules to latest versions"
git push
```

## Example 6: Working with a Specific Submodule

### Update Only One Submodule

```bash
# Update specific submodule
git submodule update --remote WPH-project

# Or manually
cd WPH-project
git pull origin main
cd ..
git add WPH-project
git commit -m "Update WPH-project"
```

### Check Submodule Status

```bash
# See which commit each submodule is on
git submodule status

# See detailed changes
git submodule summary

# See which branch each submodule is tracking
git config --file .gitmodules --get-regexp branch
```

## Example 7: Creating a New Nested Repository from Scratch

If you want to create a brand new repository as a nested repo:

```bash
# 1. Create the new repository on GitHub first
# (Go to GitHub and create a new repository named "WPH-4")

# 2. Initialize it locally in a temp location
cd /tmp
mkdir WPH-4
cd WPH-4
git init
echo "# WPH-4 Project" > README.md
git add README.md
git commit -m "Initial commit"

# 3. Connect to GitHub and push
git remote add origin https://github.com/your-username/WPH-4.git
git branch -M main
git push -u origin main

# 4. Now add it as a submodule to your portfolio
cd ~/slicing-portfolio
git submodule add https://github.com/your-username/WPH-4.git projects/WPH-4

# 5. Commit the addition
git add .gitmodules projects/WPH-4
git commit -m "Add WPH-4 project"
git push
```

## Example 8: Removing a Nested Repository

If you no longer need a submodule:

```bash
# Remove WPH-1 submodule
git submodule deinit -f projects/WPH-1
git rm -f projects/WPH-1
rm -rf .git/modules/projects/WPH-1

# Commit the removal
git commit -m "Remove WPH-1 submodule"
git push
```

## Example 9: Switching Submodule to Different Branch

```bash
# Navigate to submodule
cd WPH-project

# Switch to development branch
git checkout develop

# Go back to main repo
cd ..

# Update .gitmodules to track the develop branch
git config -f .gitmodules submodule.WPH-project.branch develop

# Commit the configuration change
git add .gitmodules WPH-project
git commit -m "Switch WPH-project to develop branch"
git push
```

## Example 10: Portfolio with Submodules CI/CD

If you're using GitHub Actions or other CI/CD, make sure to clone with submodules:

```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      # Clone with submodules
      - uses: actions/checkout@v3
        with:
          submodules: recursive
      
      # Now all your nested repositories are available
      - name: Build portfolio
        run: |
          # Your build commands
          npm install
          npm run build
      
      - name: Deploy
        run: |
          # Your deployment commands
```

## Common Patterns

### Pattern 1: Organize by Project Type

```
slicing-portfolio/
├── homework/
│   ├── WPH-1/
│   ├── WPH-2/
│   └── WPH-3/
├── personal-projects/
│   ├── blog/
│   └── app/
└── experiments/
    ├── react-demo/
    └── vue-demo/
```

### Pattern 2: Organize by Technology

```
slicing-portfolio/
├── html-css/
│   ├── landing-page/
│   └── portfolio-site/
├── javascript/
│   ├── todo-app/
│   └── weather-app/
└── fullstack/
    ├── ecommerce/
    └── social-network/
```

### Pattern 3: Shared Components

```
slicing-portfolio/
├── projects/
│   ├── project-1/      # Uses shared-ui
│   └── project-2/      # Uses shared-ui
└── shared/
    ├── ui-components/  # Shared across projects
    └── utils/          # Shared utilities
```

## Tips & Tricks

### 1. Quick Status Check

```bash
# See all submodules and their status at once
git submodule foreach 'echo "=== $name ===" && git status -s'
```

### 2. Pull Changes in All Submodules

```bash
# Pull latest from all submodules
git submodule foreach 'git pull origin main'
```

### 3. Execute Command in All Submodules

```bash
# Run npm install in all submodules
git submodule foreach 'npm install'

# Run tests in all submodules
git submodule foreach 'npm test'
```

### 4. Create Aliases

Add to your `.gitconfig`:

```ini
[alias]
    supdate = submodule update --remote --merge
    spush = push --recurse-submodules=on-demand
    sclone = clone --recursive
```

Usage:

```bash
git supdate    # Instead of: git submodule update --remote --merge
git spush      # Push main repo and submodules
git sclone <url>  # Clone with all submodules
```

## Summary

Git submodules are powerful for organizing multiple repositories within a portfolio. Key takeaways:

1. **Add**: `git submodule add <url> <path>`
2. **Clone**: `git clone --recursive <url>`
3. **Update**: `git submodule update --remote --merge`
4. **Work**: Changes in submodule → commit in submodule → commit in main repo
5. **Remove**: `git submodule deinit` → `git rm`

For the original question "Can I create my repository inside another repository like WPH-?" - **Yes, absolutely!** Use the examples above to add your WPH projects as submodules.
