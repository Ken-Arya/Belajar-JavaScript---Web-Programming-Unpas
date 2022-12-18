var ulang = true;
while (ulang) {
  var kubusSatu = parseInt(prompt("Masukkan panjang sisi Kubus Satu :  "));
  var kubusDua = parseInt(prompt("Masukkan panjang sisi Kubus Dua : "));

  sisiKubus(kubusSatu, kubusDua);
  volumeKubus(sisiKubusSatu, sisiKubusDua);
  penjumlahHasil(volumeKubusSatu, volumeKubusDua);
  hasil(hasilPenjumlahan);
  lagi();
}
function sisiKubus(kubusSatu, kubusDua) {
  sisiKubusSatu = kubusSatu;
  sisiKubusDua = kubusDua;
  alert(
    "Sisi kubus yang anda masukkan adalah: \n 1. Sisi Kubus Satu: " +
      sisiKubusSatu +
      "\n 2. Sisi Kubus Dua : " +
      sisiKubusDua
  );
}

function volumeKubus(sisiKubusSatu, sisiKubusDua) {
  volumeKubusSatu = sisiKubusSatu ** 3;
  volumeKubusDua = sisiKubusDua ** 3;
  alert(
    "Volume kubus yang telah dihitunug adalah: \n 1. Volume Kubus Satu: " +
      volumeKubusSatu +
      "\n 2. Volume Kubus Dua: " +
      volumeKubusDua
  );
}

function penjumlahHasil(volumeKubusSatu, volumeKubusDua) {
  hasilPenjumlahan = volumeKubusSatu + volumeKubusDua;
  alert(
    "Berikut volume yang akan dihitung " +
      volumeKubusSatu +
      " + " +
      volumeKubusDua
  );
}

function hasil(hasilPenjumlahan) {
  alert("Hasil penjumlahan kedua volume kubus adalah : " + hasilPenjumlahan);
}

function lagi() {
  if (confirm("Apakah anda ingin coba lagi?")) {
    ulang = true;
  } else {
    ulang = false;
  }
}
