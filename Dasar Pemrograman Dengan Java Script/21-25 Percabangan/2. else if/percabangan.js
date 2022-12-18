var lagi = true;
while (lagi) {
  var angka = prompt("Masukkan sebuah angka : ");

  if (angka % 2 == 0) {
    alert(angka + " adalah angka genap!");
  } else if (angka % 2 == 1) {
    alert(angka + " adalah angka ganjil!");
  } else {
    alert("Yang anda masukkan bukanlah angka");
  }
}
