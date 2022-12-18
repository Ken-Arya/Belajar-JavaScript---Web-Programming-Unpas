var ulang = true;
var kesempatan = 3;

while (ulang) {
  var comp = Math.floor(Math.random() * 11);
  while (kesempatan > 0) {
    var p = prompt(
      "Game Tebak Angka!. \nSilahkan masukkan angka dari 1-10. \nKesempatan anda " +
        kesempatan +
        " kali"
    );
    kesempatan--;
    var hasil = "";

    if (p == comp) {
      hasil = "BENAR";
    } else if (p != comp) {
      hasil = p < comp ? "terlalu KECIL" : "terlalu BESAR";
    } else {
      alert("Silahkan masukkan input yang benar!!!");
    }
    alert(
      "Angka yang anda masukkan adalah " +
        p +
        " dan hasilnya adalah " +
        hasil +
        "\nKesempatan anda tersisa " +
        kesempatan +
        " kali lagi."
    );
    if (p == comp) {
      break;
    }
  }
  ulang = confirm("Bermain lagi?");
  kesempatan = 3;
}
alert("Terima kasih telah bermain suwit.");
