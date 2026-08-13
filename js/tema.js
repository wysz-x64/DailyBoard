const tombolTema = document.getElementById("toggle-tema");

function terapkanTema() {
  // FLOW 1: Baca preferensi tema yang tersimpan.
  const modeGelap = localStorage.getItem("tema") === "gelap";

  // FLOW 2: Terapkan class CSS sesuai preferensi.
  document.body.classList.toggle("dark-mode", modeGelap);

  // FLOW 3: Sesuaikan teks tombol dengan mode aktif.
  tombolTema.textContent = modeGelap ? "Mode Terang" : "Mode Gelap";
}

function initTema() {
  // FLOW KLIK: ubah class -> simpan pilihan -> sinkronkan tampilan.
  tombolTema.addEventListener("click", () => {
    const sedangGelap = document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "tema",
      sedangGelap ? "gelap" : "terang"
    );

    terapkanTema();
  });

  // FLOW AWAL: terapkan preferensi yang sudah tersimpan.
  terapkanTema();
}

export { initTema };
