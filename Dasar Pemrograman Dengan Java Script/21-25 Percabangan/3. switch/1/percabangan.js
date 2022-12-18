var lagi = true;
while (lagi) {
  var angka = parseInt(prompt("Masukkan angka 1-3 : "));

  switch (angka) {
    case 1:
      lagi = confirm("Anda memasukan angka 1");
      break;
    case 2:
      lagi = confirm("Anda memasukan angka 2");
      break;
    case 3:
      lagi = confirm("Anda memasukan angka 3");
      break;
    default:
      lagi = confirm("Mohon masukkan angka 1-3");
      break;
  }
}
