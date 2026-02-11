# Git Submodules Guide

Panduan lengkap tentang cara menggunakan Git submodules untuk membuat repository di dalam repository lain (seperti WPH-).

## Apa itu Git Submodules?

Git submodules memungkinkan Anda untuk menyimpan repository Git sebagai subdirektori dari repository Git lain. Ini sangat berguna ketika Anda ingin:

- Memasukkan project lain ke dalam project Anda
- Memisahkan komponen yang dapat digunakan kembali
- Mengelola dependensi yang memiliki repository sendiri
- Membuat struktur monorepo dengan repository independen

## Keuntungan Menggunakan Submodules

1. **Pemisahan yang Jelas**: Setiap submodule memiliki history Git sendiri
2. **Version Control Independen**: Update submodule tanpa mempengaruhi repository utama
3. **Berbagi Kode**: Gunakan repository yang sama di berbagai project
4. **Fleksibilitas**: Bekerja pada submodule secara terpisah atau bersama

## Cara Kerja Submodules

Ketika Anda menambahkan submodule:
1. Git membuat entri di file `.gitmodules`
2. Direktori submodule dibuat di repository Anda
3. Repository utama melacak commit spesifik dari submodule
4. Submodule tetap merupakan repository Git yang independen

## Perintah Dasar

### 1. Menambahkan Submodule Baru

```bash
# Syntax dasar
git submodule add <repository-url> <path>

# Contoh: Menambahkan repository WPH-
git submodule add https://github.com/username/WPH-project.git WPH-project

# Menambahkan dengan nama branch tertentu
git submodule add -b main https://github.com/username/WPH-project.git WPH-project

# Commit perubahan
git commit -m "Add WPH-project submodule"
```

### 2. Meng-clone Repository dengan Submodules

```bash
# Opsi 1: Clone dengan semua submodules sekaligus
git clone --recursive https://github.com/AI-NovaNX/slicing-portfolio.git

# Opsi 2: Clone dulu, kemudian initialize submodules
git clone https://github.com/AI-NovaNX/slicing-portfolio.git
cd slicing-portfolio
git submodule update --init --recursive
```

### 3. Melihat Status Submodules

```bash
# Lihat semua submodules dan statusnya
git submodule status

# Lihat summary perubahan di submodules
git submodule summary

# Lihat konfigurasi submodules
cat .gitmodules
```

### 4. Update Submodules

```bash
# Update semua submodules ke commit terbaru di branch tracking mereka
git submodule update --remote --merge

# Update submodule tertentu
git submodule update --remote WPH-project

# Atau masuk ke direktori submodule dan pull manual
cd WPH-project
git pull origin main
cd ..
git add WPH-project
git commit -m "Update WPH-project submodule"
```

### 5. Bekerja di Dalam Submodule

```bash
# Masuk ke direktori submodule
cd WPH-project

# Submodule adalah repository Git biasa
git status
git checkout -b feature-branch
# Lakukan perubahan...
git add .
git commit -m "Add new feature"
git push origin feature-branch

# Kembali ke repository utama
cd ..

# Repository utama akan mendeteksi perubahan commit submodule
git status
git add WPH-project
git commit -m "Update WPH-project to latest commit"
git push
```

### 6. Menghapus Submodule

```bash
# Langkah 1: Deinit submodule (hapus dari .git/config)
git submodule deinit -f WPH-project

# Langkah 2: Hapus direktori submodule dari Git
git rm -f WPH-project

# Langkah 3: Hapus folder .git/modules/WPH-project (opsional, untuk cleanup)
rm -rf .git/modules/WPH-project

# Langkah 4: Commit perubahan
git commit -m "Remove WPH-project submodule"
```

## File .gitmodules

File `.gitmodules` menyimpan konfigurasi submodules. Contoh:

```ini
[submodule "WPH-project"]
    path = WPH-project
    url = https://github.com/username/WPH-project.git
    branch = main
```

## Best Practices

### 1. Selalu Clone dengan --recursive

```bash
git clone --recursive <repository-url>
```

### 2. Update Submodules Secara Berkala

```bash
# Update semua submodules
git submodule update --remote --merge
```

### 3. Commit Perubahan di Submodule Dulu

Ketika bekerja dengan submodule:
1. Commit dan push perubahan di dalam submodule
2. Kemudian commit update submodule di repository utama

### 4. Dokumentasikan Submodules Anda

Selalu dokumentasikan:
- Tujuan setiap submodule
- Branch yang di-track
- Cara update submodule
- Dependencies antar submodules

### 5. Gunakan Branch Tracking

```bash
# Set branch untuk di-track
git config -f .gitmodules submodule.WPH-project.branch main

# Update akan mengikuti branch ini
git submodule update --remote
```

## Troubleshooting

### Submodule Tidak Ter-clone

```bash
git submodule update --init --recursive
```

### Perubahan di Submodule Tidak Terdeteksi

```bash
cd <submodule-directory>
git status
git add .
git commit -m "Your changes"
cd ..
git add <submodule-directory>
git commit -m "Update submodule"
```

### Konflik Merge di Submodule

```bash
cd <submodule-directory>
git pull origin main
# Resolve conflicts...
git add .
git commit
cd ..
git add <submodule-directory>
git commit -m "Resolve submodule conflicts"
```

### Reset Submodule ke Commit yang Ditentukan

```bash
cd <submodule-directory>
git checkout <commit-hash>
cd ..
git add <submodule-directory>
git commit -m "Reset submodule to specific commit"
```

## Alternatif: Git Subtree

Jika Git submodules terlalu kompleks, pertimbangkan Git subtree sebagai alternatif:

```bash
# Menambahkan repository sebagai subtree
git subtree add --prefix=WPH-project https://github.com/username/WPH-project.git main --squash

# Update subtree
git subtree pull --prefix=WPH-project https://github.com/username/WPH-project.git main --squash

# Push perubahan kembali ke repository original
git subtree push --prefix=WPH-project https://github.com/username/WPH-project.git main
```

**Perbedaan Utama:**
- **Submodules**: Repository terpisah, lebih eksplisit, memerlukan update manual
- **Subtree**: Konten di-merge ke repository utama, lebih sederhana, tapi history tercampur

## Resources

- [Git Official Documentation - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [GitHub Guide on Submodules](https://github.blog/2016-02-01-working-with-submodules/)
- [Git Submodules vs Subtrees](https://www.atlassian.com/git/tutorials/git-subtree)

## FAQ

**Q: Apakah saya bisa membuat repository di dalam repository lain seperti WPH-?**  
A: Ya! Gunakan Git submodules. Jalankan `git submodule add <url> WPH-project`.

**Q: Apakah perubahan di nested repository mempengaruhi repository utama?**  
A: Tidak secara langsung. Repository utama hanya melacak commit mana dari submodule yang digunakan.

**Q: Bagaimana cara berbagi submodule antar beberapa repository?**  
A: Tambahkan URL submodule yang sama di beberapa repository. Setiap repository akan melacak commit-nya sendiri.

**Q: Apakah tim saya perlu melakukan sesuatu yang khusus?**  
A: Ya, mereka harus clone dengan `--recursive` atau menjalankan `git submodule update --init --recursive` setelah clone.

