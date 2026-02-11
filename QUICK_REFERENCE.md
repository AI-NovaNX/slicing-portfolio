# Quick Reference: Git Submodules

Referensi cepat untuk bekerja dengan nested repositories menggunakan Git submodules.

## Perintah Paling Sering Digunakan

### Menambahkan Repository Baru (seperti WPH-)

```bash
git submodule add <url> <path>
git commit -m "Add submodule"
git push
```

**Contoh:**
```bash
git submodule add https://github.com/username/WPH-1.git WPH-1
```

### Clone Repository dengan Submodules

```bash
git clone --recursive <repository-url>
```

### Jika Sudah Clone, Tambahkan Submodules

```bash
git submodule update --init --recursive
```

### Update Semua Submodules

```bash
git submodule update --remote --merge
```

### Bekerja di Dalam Submodule

```bash
cd <submodule-path>
# Lakukan perubahan seperti repository Git biasa
git add .
git commit -m "Your changes"
git push origin main
cd ..
git add <submodule-path>
git commit -m "Update submodule"
git push
```

### Hapus Submodule

```bash
git submodule deinit -f <path>
git rm -f <path>
git commit -m "Remove submodule"
```

## Cheat Sheet

| Task | Command |
|------|---------|
| Add submodule | `git submodule add <url> <path>` |
| Clone with submodules | `git clone --recursive <url>` |
| Initialize submodules | `git submodule update --init --recursive` |
| Update all submodules | `git submodule update --remote` |
| Update specific submodule | `git submodule update --remote <name>` |
| Check submodule status | `git submodule status` |
| List submodules | `cat .gitmodules` |
| Remove submodule | `git submodule deinit <path> && git rm <path>` |
| Execute in all submodules | `git submodule foreach '<command>'` |

## Contoh File .gitmodules

```ini
[submodule "WPH-1"]
    path = WPH-1
    url = https://github.com/username/WPH-1.git
    branch = main

[submodule "WPH-2"]
    path = projects/WPH-2
    url = https://github.com/username/WPH-2.git
    branch = main

[submodule "shared-components"]
    path = shared/components
    url = https://github.com/username/shared-components.git
    branch = develop
```

## Workflow Umum

### 1. Setup Awal (Satu Kali)

```bash
# Clone repository
git clone --recursive https://github.com/AI-NovaNX/slicing-portfolio.git
cd slicing-portfolio
```

### 2. Menambahkan Project Baru

```bash
# Tambahkan WPH project
git submodule add https://github.com/username/WPH-3.git WPH-3
git commit -m "Add WPH-3 project"
git push
```

### 3. Update Project yang Ada

```bash
# Masuk ke submodule
cd WPH-3

# Buat perubahan
git checkout main
git pull
# Edit files...
git add .
git commit -m "Update content"
git push

# Kembali ke main repo
cd ..
git add WPH-3
git commit -m "Update WPH-3 to latest"
git push
```

### 4. Sinkronisasi dengan Tim

```bash
# Pull perubahan dari main repo
git pull

# Update semua submodules
git submodule update --init --recursive
```

## Troubleshooting Cepat

### Problem: Submodule folder kosong

```bash
git submodule update --init --recursive
```

### Problem: Perubahan tidak terdeteksi

```bash
cd <submodule>
git status
cd ..
git add <submodule>
git commit -m "Update submodule"
```

### Problem: Konflik di submodule

```bash
cd <submodule>
git status
git pull origin main
# Resolve conflicts
git add .
git commit
cd ..
git add <submodule>
git commit -m "Resolve conflicts"
```

### Problem: Ingin reset submodule

```bash
git submodule deinit -f <path>
git submodule update --init <path>
```

## Tips Pro

1. **Selalu clone dengan --recursive**
2. **Update submodules sebelum mulai bekerja**
3. **Commit di submodule dulu, baru di main repo**
4. **Dokumentasikan setiap submodule**
5. **Gunakan branch tracking untuk update otomatis**

## FAQ Cepat

**Q: Bisakah saya membuat repository saya di dalam repository lain (seperti WPH-)?**  
A: ✅ Ya! Gunakan: `git submodule add <url> WPH-project`

**Q: Apakah otomatis ter-clone?**  
A: Hanya jika Anda clone dengan flag `--recursive`

**Q: Bagaimana cara update?**  
A: Jalankan: `git submodule update --remote --merge`

**Q: Bisakah saya edit langsung?**  
A: Ya, masuk ke folder submodule dan bekerja seperti biasa

**Q: Apakah saya perlu 2x commit?**  
A: Ya - 1x di submodule, 1x di main repo untuk update referensi

## Resources

- README.md - Overview dan getting started
- SUBMODULES.md - Panduan lengkap submodules
- EXAMPLES.md - Contoh praktis penggunaan

---

💡 **Tip**: Simpan file ini sebagai referensi cepat!

