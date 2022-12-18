var lagi = true;
while (lagi) {
  var item = prompt(
    "Masukkan makanan/minuman : \n contoh : nasi, daging, susu, burger, soda"
  );

  switch (item) {
    case "nasi":
    case "daging":
    case "susu":
      lagi = confirm(item + " adalah makanan/minuman sehat");
      break;
    case "burger":
    case "soda":
      lagi = confirm(item + " adalah makanan/minuman tidak sehat");
      break;
    default:
      lagi = confirm(
        "Mohon masukkan nama makanan/minuman sesuai dengan contoh!"
      );
      break;
  }
}
