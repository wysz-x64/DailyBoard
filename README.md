# DailyBoard

DailyBoard adalah dashboard produktivitas harian yang dibuat menggunakan HTML, CSS, dan Vanilla JavaScript tanpa framework.

## Fitur

- To-do list: tambah, edit, hapus, tandai selesai
- Filter tugas: semua, selesai, belum selesai
- Pencarian tugas
- Debounce pada pencarian
- Drag & drop untuk mengubah urutan tugas
- Catatan cepat dengan localStorage
- Dark mode dengan localStorage
- Widget kutipan dari DummyJSON API
- Widget cuaca dari OpenWeather API
- Penyimpanan data lokal menggunakan localStorage

## Struktur

```text
DailyBoard/
├── index.html
├── style.css
├── README.md
├── TESTING.md
├── config.example.js
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
└── js/
    ├── main.js
    ├── config.js
    ├── utils.js
    ├── tugas.js
    ├── catatan.js
    ├── tema.js
    ├── cuaca.js
    └── kutipan.js
```

### Tanggung jawab modul

- `main.js` — entry point dan inisialisasi modul.
- `tugas.js` — seluruh logic to-do list.
- `catatan.js` — seluruh logic catatan.
- `tema.js` — dark/light mode.
- `cuaca.js` — request dan tampilan data OpenWeather.
- `kutipan.js` — request dan tampilan data DummyJSON.
- `utils.js` — fungsi umum seperti validasi dan debounce.
- `config.js` — konfigurasi API lokal/deployment.

## Menjalankan secara lokal

Karena project menggunakan ES Modules, jalankan melalui local server, bukan dengan membuka `index.html` langsung dari `file://`.

1. Salin `config.example.js` menjadi `js/config.js`.
2. Isi `OPENWEATHER_API_KEY` dengan API key milik sendiri.
3. Jalankan project menggunakan local server.
4. Buka alamat server di browser.

> `js/config.js` sudah dimasukkan ke `.gitignore` sehingga API key lokal tidak ikut ter-push.

## Deployment GitHub Pages

Project ini menggunakan GitHub Actions agar `config.js` dapat dibuat saat deployment dari GitHub Secret.

### 1. Buat repository

Buat repository GitHub untuk project ini.

### 2. Simpan API key sebagai Secret

Di repository:

`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

Gunakan nama:

`OPENWEATHER_API_KEY`

Isi value dengan API key OpenWeather milik sendiri.

### 3. Push project

```bash
git init
git branch -M main
git add .
git commit -m "Deploy DailyBoard"
git remote add origin https://github.com/wysz-x64/DailyBoard.git
git push -u origin main
```

### 4. Aktifkan GitHub Pages

Buka:

`Settings` -> `Pages`

Pada bagian `Build and deployment`, pilih:

`Source: GitHub Actions`

Setelah push ke `main`, workflow akan membuat `js/config.js` dari Secret lalu menerbitkan project ke GitHub Pages.

## Catatan API key

API key OpenWeather tetap dapat terlihat oleh browser setelah aplikasi online karena request cuaca dilakukan langsung dari frontend. GitHub Secret hanya mencegah key masuk ke repository. Untuk project publik, gunakan key khusus project dan atur pembatasan/limit yang tersedia pada akun API.

Jika API key pernah terlanjur masuk ke repository publik atau riwayat Git, sebaiknya buat/ganti key tersebut sebelum deployment.

## Fase 6

Implementasi fase 6 pada project:

- Refactoring menjadi beberapa ES Module.
- Utility umum dipisahkan ke `utils.js`.
- Debounce diterapkan pada pencarian.
- Manual testing didokumentasikan di `TESTING.md`.
- Deployment disiapkan menggunakan GitHub Pages + GitHub Actions.
- Responsiveness tidak ditambahkan sebagai perubahan baru karena tampilan yang ada sudah diuji pada perangkat mobile sesuai keputusan project.
