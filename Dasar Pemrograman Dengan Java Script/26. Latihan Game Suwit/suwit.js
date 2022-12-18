var ulang = true;
while (ulang) {
  var p = prompt(
    "Silahkan masukkan salah satu pilihan dibawah ini \n 1. Gajah\n 2. Manusia \n 3. Semut"
  );
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "manusia";
  } else if (comp > 0.67) {
    comp = "semut";
  }

  var hasil = "";

  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "manusia") {
    hasil = comp == "semut" ? "MENANG!" : "KALAH!";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "MENANG!" : "KALAH!";
  } else {
    alert("Silahkan masukkan input yang benar!!!");
  }
  alert(
    "Kamu memilih " +
      p +
      " dan computer memilih " +
      comp +
      "\nHasilnya adalah " +
      hasil
  );
  ulang = confirm("Bermain lagi?");
}

alert("Terima kasih telah bermain suwit");
