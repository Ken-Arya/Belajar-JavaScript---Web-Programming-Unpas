var mahasiswa = ["ken", "arya", "dwi", "ehsan", "fizi", "jarjit"];

console.log(mahasiswa.join(", "));

//PUSH dan POP adalah LIFO
console.log("PUSH");
mahasiswa.push("mei-mei");
console.log(mahasiswa.join(", "));

console.log("POP");
mahasiswa.pop();
console.log(mahasiswa.join(", "));

//UNSHIFT dan SHIFT adalah FIFO
console.log("UNSHIFT");
mahasiswa.unshift("mei-mei");
console.log(mahasiswa.join(", "));

console.log("SHIFT");
mahasiswa.shift();
console.log(mahasiswa.join(", "));

//SLICE dan SPLICE di tengah

console.log("SPLICE");
// nyambungin
//splice(mau ditambah ke-index berapa?, yang dihapus berapa?, elemen1, elemen2, ..... terserah elemen nya berapa aja)
mahasiswa.splice(2, 1, "eka", "santosa"); // nambahin eka dan santosa di index ke 2. lalu menghapus 1 index setelahnya yaitu dwi, bebas mau dihapus atau engga. kalau ga dihapus ya tuulis 0 aja.
console.log(mahasiswa.join(", "));

console.log("SLICE");
// motong jadiin array baru
//slice(index awal, index akhir-1) dikurangin 1 karena nilai sebelumnya akan dislice, jadi kalau index akhir nya 3, yang di slice hanya sampai 2 aja
var newMahasiswa = mahasiswa.slice(2, 5); // yang diambil cuuma index ke 2,3,4 aja
console.log(newMahasiswa.join(", "));

//FOREACH dan MAP
console.log("forEach");
mahasiswa.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i + 1) + " adalah " + e);
});

//KALAU MAP MENGEMBALIKAN NILAI
console.log("MAP");
var angka = [1, 2, 3, 3, 2, 1, 2, 3, 2];
console.log(angka.join(", "));
var angkaKaliSepuluh = angka.map(function (e) {
  return e * 10;
});
console.log(angkaKaliSepuluh.join(", "));

//SORT buat ... ya sort..
console.log("SORT");

var angkaSort = angkaKaliSepuluh.sort();
console.log(angkaSort.join(", "));

//Filter buat nyari atau ngefilter angka, dan di return bisa lebih dari
console.log("FILTER");

var angkaDiatasDuaPuluh = angkaKaliSepuluh.filter(function (e) {
  return e > 20;
});
console.log(angkaDiatasDuaPuluh.join(", "));

//find cuma ngambil 1 nilai yang ditemuakn pertama kali
console.log("FIND");

var angkaDiatasDuaPuluhFind = angkaKaliSepuluh.find(function (e) {
  return e > 20;
});
console.log(angkaDiatasDuaPuluhFind);
