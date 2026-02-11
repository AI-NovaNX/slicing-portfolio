# Step-by-Step Tutorial: Adding Your First Nested Repository

Tutorial langkah demi langkah untuk menambahkan repository pertama Anda di dalam repository ini (seperti WPH project).

## Prerequisites

- Git terinstall di komputer Anda
- Repository GitHub yang ingin Anda jadikan nested repository
- Clone dari repository slicing-portfolio

## Tutorial 1: Menambahkan Repository WPH Pertama Anda

### Langkah 1: Persiapan

```bash
# Pastikan Anda berada di direktori slicing-portfolio
cd /path/to/slicing-portfolio

# Pastikan repository Anda up-to-date
git pull origin main

# Check status
git status
```

### Langkah 2: Siapkan Repository WPH Anda

Jika Anda belum memiliki repository WPH:

1. Buka GitHub
2. Klik "New Repository"
3. Nama: `WPH-1` (atau nama lain)
4. Buat repository (public atau private)
5. Copy URL repository (misal: `https://github.com/username/WPH-1.git`)

### Langkah 3: Tambahkan sebagai Submodule

```bash
# Gunakan perintah ini
git submodule add https://github.com/username/WPH-1.git WPH-1

# Output yang Anda akan lihat:
# Cloning into '/path/to/slicing-portfolio/WPH-1'...
# remote: Enumerating objects: 3, done.
# remote: Counting objects: 100% (3/3), done.
# remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
# Receiving objects: 100% (3/3), done.
```

### Langkah 4: Verifikasi Perubahan

```bash
# Lihat apa yang berubah
git status

# Output akan menunjukkan:
# Changes to be committed:
#   new file:   .gitmodules
#   new file:   WPH-1

# Lihat isi .gitmodules
cat .gitmodules

# Output:
# [submodule "WPH-1"]
#     path = WPH-1
#     url = https://github.com/username/WPH-1.git
```

### Langkah 5: Commit dan Push

```bash
# Commit perubahan
git commit -m "Add WPH-1 project as nested repository"

# Push ke GitHub
git push origin main
```

### Langkah 6: Verifikasi di GitHub

1. Buka repository Anda di GitHub
2. Anda akan melihat folder `WPH-1` dengan icon khusus (@ symbol)
3. Click folder tersebut akan redirect ke repository WPH-1

🎉 **Selamat!** Anda telah berhasil menambahkan repository nested pertama!

## Tutorial 2: Bekerja dengan Nested Repository

### Membuat Perubahan di WPH-1

```bash
# Masuk ke direktori WPH-1
cd WPH-1

# Buat file baru
echo "<h1>Hello from WPH-1!</h1>" > index.html

# Add dan commit seperti biasa
git add index.html
git commit -m "Add index.html"

# Push ke repository WPH-1
git push origin main
```

### Update Main Repository

```bash
# Kembali ke main repository
cd ..

# Git akan detect bahwa submodule berubah
git status
# Output: modified: WPH-1 (new commits)

# Add perubahan submodule
git add WPH-1

# Commit di main repository
git commit -m "Update WPH-1 with new index.html"

# Push main repository
git push origin main
```

## Tutorial 3: Clone Repository dengan Nested Repos

Ketika teman Anda ingin clone portfolio Anda:

```bash
# Cara terbaik: clone dengan --recursive
git clone --recursive https://github.com/AI-NovaNX/slicing-portfolio.git

# Masuk ke direktori
cd slicing-portfolio

# Semua submodules sudah ter-clone!
ls -la WPH-1
```

## Tutorial 4: Menambahkan Multiple WPH Projects

```bash
# Buat direktori untuk mengorganisir projects
mkdir -p projects

# Tambahkan beberapa WPH projects
git submodule add https://github.com/username/WPH-1.git projects/WPH-1
git submodule add https://github.com/username/WPH-2.git projects/WPH-2
git submodule add https://github.com/username/WPH-3.git projects/WPH-3

# Commit semua
git add .gitmodules projects/
git commit -m "Add WPH projects 1-3"
git push
```

Struktur direktori:

```
slicing-portfolio/
├── projects/
│   ├── WPH-1/
│   ├── WPH-2/
│   └── WPH-3/
├── README.md
└── ...
```

## Tutorial 5: Update Nested Repository

### Scenario: Teman update WPH-1, Anda ingin update juga

```bash
# Update single submodule
git submodule update --remote WPH-1

# Atau update semua submodules
git submodule update --remote

# Lihat perubahan
git status

# Jika mau keep update
git add WPH-1
git commit -m "Update WPH-1 to latest version"
git push
```

## Tutorial 6: Menghapus Nested Repository

Jika Anda tidak lagi memerlukan WPH-1:

```bash
# Step 1: Deinit
git submodule deinit -f WPH-1

# Step 2: Remove dari Git
git rm -f WPH-1

# Step 3: Commit
git commit -m "Remove WPH-1 nested repository"

# Step 4: Push
git push origin main
```

## Common Scenarios

### Scenario 1: Lupa Clone dengan --recursive

```bash
# Anda sudah clone tapi folder submodule kosong
git submodule update --init --recursive
```

### Scenario 2: Pindah Branch dengan Submodules

```bash
# Pindah branch
git checkout feature-branch

# Update submodules sesuai branch
git submodule update --init --recursive
```

### Scenario 3: Merge Conflict di Submodule

```bash
# Pull changes
git pull origin main
# Conflict di submodule!

# Masuk ke submodule
cd WPH-1

# Resolve seperti biasa
git status
git pull origin main
# Fix conflicts
git add .
git commit

# Kembali ke main repo
cd ..
git add WPH-1
git commit -m "Resolve WPH-1 conflicts"
```

## Tips untuk Pemula

1. **Selalu gunakan --recursive saat clone**
   ```bash
   git clone --recursive <url>
   ```

2. **Update submodules secara berkala**
   ```bash
   git submodule update --remote
   ```

3. **Periksa status submodules**
   ```bash
   git submodule status
   ```

4. **Commit di submodule dulu, baru di main repo**
   ```bash
   cd submodule/
   git commit -m "Change"
   cd ..
   git add submodule/
   git commit -m "Update submodule"
   ```

## Next Steps

Setelah menyelesaikan tutorial ini:

1. ✅ Anda sudah bisa menambahkan nested repository
2. ✅ Anda sudah bisa bekerja dengan nested repository
3. ✅ Anda sudah bisa update dan manage nested repository

**Bacaan Lanjutan:**
- [SUBMODULES.md](SUBMODULES.md) - Panduan lengkap
- [EXAMPLES.md](EXAMPLES.md) - Contoh-contoh praktis
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Referensi cepat

## Troubleshooting

### Error: "already exists in the index"

```bash
# Remove dari index
git rm -r --cached <submodule-path>
git submodule add <url> <path>
```

### Error: "No submodule mapping found"

```bash
# Re-initialize submodules
git submodule update --init --recursive
```

### Submodule tidak update saat pull

```bash
# Pull dengan update submodules
git pull --recurse-submodules
```

## Kesimpulan

Pertanyaan awal: **"Apakah saya bisa membuat repository saya di dalam repository lain misalnya WPH-?"**

**Jawaban: Ya, bisa!** Dengan menggunakan Git submodules seperti yang dijelaskan di tutorial ini.

Cara singkatnya:
```bash
git submodule add <url-repository-WPH-anda> WPH-project
git commit -m "Add WPH project"
git push
```

Sekarang repository WPH Anda sudah ada di dalam repository slicing-portfolio! 🎉
