//sama aja kayak looping, tapi ini function yang manggil dirinya lagi

function angka(n) {
  //base case untuk berhentiin, pake return kosong aja
  if (n === 0) {
    return;
  }

  console.log(n);
  angka(n - 1);
}

angka(10);

//contoh biasanya di faktorial, bisa di cek di gambar
function faktorial(i) {
  if (i === 0) return 1;
  return i * faktorial(i - 1);
}

console.log(faktorial(10));
