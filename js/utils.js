export function validasiInput(nilai) {
  // FLOW 1: Rapikan input terlebih dahulu.
  const teks = nilai.trim();

  // FLOW 2: Tolak input yang kosong.
  if (teks === "") {
    alert("Input tidak boleh kosong!");
    return false;
  }

  // FLOW 3: Batasi panjang input agar data tetap sesuai ketentuan.
  if (teks.length > 100) {
    alert("Input maksimal 100 karakter!");
    return false;
  }

  // FLOW 4: Input lolos validasi.
  return true;
}

// FLOW DEBOUNCE:
export function debounce(callback, delay = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
