//"use strict";
var i = 1; //variabel global atau window
var c = 20;

function coba() {
  //variabel function scope bisa dipake buat perulangan, yg jadi i atau j
  var i = 10; //name conflict
  console.log("nilai i function " + i); //manggil i didalam function
  console.log("nilai i global/window " + window.i); //manggil i diluar function
  c = c + i;

  /*
  kalau gaada deklarasi variabel j di variabel lokal/function, maka otomatis dibuat variabel j menjadi global.
  kalau mau bikin variabel lokal, HARUS PAKAI var atau dideklarasiin
  atau pakai "use strict" paling atas biar kalau ada variabel lokal yang belum di deklarasiin, dia diklarasiin di lokal
  */
  j = 50;
}

coba();
console.log("nilai c windows ditambah dengan i function adalah " + c);
console.log("nilai j yang dibuat otomatis jadi variabel global " + j);

//contoh lain di parameter dan argumen

function par(i) {
  console.log("nilai paramater yang dikirim adalah " + i);
  /*
  kenapa ga dipakai? karena itu argumen, jadi nilai nya beda lagi.
  yang diambil disimpan ke argmen i, lalu nilai i lokal diambil dari argumen, bukan dari window
  */
}

par(100);
