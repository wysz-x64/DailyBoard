# Manual Testing Checklist — Fase 6

Gunakan checklist ini sebelum presentasi/deployment.

## To-do

- [ ] Tambah tugas valid
- [ ] Menolak tugas kosong
- [ ] Menolak input lebih dari 100 karakter
- [ ] Tandai tugas selesai
- [ ] Edit tugas dengan double click
- [ ] Hapus tugas
- [ ] Filter Semua
- [ ] Filter Selesai
- [ ] Filter Belum Selesai
- [ ] Pencarian tugas
- [ ] Pencarian tetap berjalan dengan debounce
- [ ] Drag & drop mengubah urutan tugas

## localStorage

- [ ] Refresh halaman setelah menambah tugas
- [ ] Tugas tetap ada
- [ ] Refresh setelah mengubah status
- [ ] Urutan drag & drop tetap tersimpan
- [ ] Catatan tetap ada setelah refresh
- [ ] Tema tetap ada setelah refresh
- [ ] Kota cuaca terakhir tetap tersimpan

## Catatan

- [ ] Tambah catatan
- [ ] Edit catatan dengan double click
- [ ] Hapus catatan
- [ ] Validasi catatan kosong

## Tema

- [ ] Ubah ke mode gelap
- [ ] Ubah kembali ke mode terang
- [ ] Refresh dan pastikan preferensi tetap

## API

- [ ] Kutipan berhasil dimuat
- [ ] Pesan loading kutipan muncul
- [ ] Error kutipan ditangani
- [ ] Cuaca kota default berhasil dimuat
- [ ] Ganti kota berhasil
- [ ] Refresh cuaca berhasil
- [ ] Nama kota tidak valid menampilkan error
- [ ] Tidak ada error merah yang tidak diharapkan di Console

## Deployment

- [ ] Repository dapat menerima push tanpa API key
- [ ] GitHub Secret `OPENWEATHER_API_KEY` sudah dibuat
- [ ] GitHub Actions selesai tanpa error
- [ ] GitHub Pages dapat dibuka
- [ ] Fitur tugas berjalan online
- [ ] Fitur catatan berjalan online
- [ ] Dark mode berjalan online
- [ ] Kutipan berjalan online
- [ ] Cuaca berjalan online
