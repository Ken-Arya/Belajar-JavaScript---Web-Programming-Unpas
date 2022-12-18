/*
arguments itu tempat dimana nilai dari si argumen disimpan.
jadi kalau nilai argumen lebih banyak dari parameter yang dipakai, sisanya tetap disimpan di arguments

*/

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var nilaiAkhir = tambah(1, 2, 3, 4, 2, 1, 3, 4, 12, 2, 1, 3, 2);
console.log(nilaiAkhir);
