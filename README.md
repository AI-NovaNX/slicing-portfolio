# slicing-portfolio

Portfolio project with support for nested repositories (Git submodules).

## Nested Repositories Support

This repository supports nested repositories using Git submodules. This allows you to include other Git repositories as subdirectories within this project.

### What are Git Submodules?

Git submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.

### Common Use Cases

- Including shared libraries or components
- Managing multiple related projects (e.g., WPH-, portfolio components)
- Keeping dependencies separate while maintaining version control
- Creating a monorepo structure with independent repositories

## Quick Start

### Adding a Nested Repository (Submodule)

To add a repository inside this repository (for example, a WPH- repository):

```bash
# Add a submodule
git submodule add <repository-url> <directory-name>

# Example: Add a WPH repository
git submodule add https://github.com/username/WPH-project.git WPH-project

# Commit the changes
git add .gitmodules WPH-project
git commit -m "Add WPH-project as submodule"
git push
```

### Cloning This Repository with Submodules

```bash
# Clone with all submodules
git clone --recursive https://github.com/AI-NovaNX/slicing-portfolio.git

# Or if already cloned, initialize submodules
git submodule update --init --recursive
```

### Updating Submodules

```bash
# Update all submodules to latest commit
git submodule update --remote --merge

# Update a specific submodule
cd <submodule-directory>
git pull origin main
cd ..
git add <submodule-directory>
git commit -m "Update submodule"
```

### Removing a Submodule

```bash
# Remove submodule from .gitmodules and .git/config
git submodule deinit <submodule-path>
git rm <submodule-path>
git commit -m "Remove submodule"
```

## Documentation

📚 **[Complete Documentation Index](INDEX.md)** - Start here to find what you need!

Core documentation:
- **[TUTORIAL.md](TUTORIAL.md)** - Step-by-step tutorial for beginners (Indonesian)
- **[SUBMODULES.md](SUBMODULES.md)** - Comprehensive guide on Git submodules (Indonesian)
- **[EXAMPLES.md](EXAMPLES.md)** - 10 practical examples and real-world scenarios
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Command cheat sheet for quick lookup
- **[VISUAL_GUIDE.md](VISUAL_GUIDE.md)** - Visual diagrams and workflows
- **[FAQ.md](FAQ.md)** - 32 frequently asked questions with detailed answers
- **[.gitmodules.example](.gitmodules.example)** - Configuration file template

## Project Structure

```
slicing-portfolio/
├── README.md                  # Overview and quick start (you are here)
├── INDEX.md                   # Complete documentation index
├── TUTORIAL.md                # Step-by-step tutorial (Indonesian)
├── SUBMODULES.md              # Comprehensive guide (Indonesian)
├── EXAMPLES.md                # Practical examples
├── QUICK_REFERENCE.md         # Command cheat sheet
├── VISUAL_GUIDE.md            # Visual diagrams
├── FAQ.md                     # Frequently asked questions
├── .gitmodules.example        # Configuration template
└── [nested-repos]/            # Your nested repositories (submodules)
    ├── WPH-project/           # Example nested repository
    └── other-repos/           # Other submodules
```

## Contributing

When working with this repository:

1. Always clone with `--recursive` flag to get all submodules
2. Keep submodules updated to their latest compatible versions
3. Document any new submodules in this README
4. Test changes in both the main repository and submodules

## Questions?

**Q: Can I create my repository inside another repository (like WPH-)?**  
**A:** Yes! You can use Git submodules to nest repositories. Follow the instructions in the "Adding a Nested Repository" section above.

**Q: Will changes in the nested repository affect the main repository?**  
**A:** No, each repository maintains its own history. The main repository only tracks which commit of the submodule it's using.

**Q: Can I modify files in the nested repository?**  
**A:** Yes, you can work in the nested repository just like any other Git repository. Changes must be committed in both the submodule and the parent repository.

## License

MIT License
