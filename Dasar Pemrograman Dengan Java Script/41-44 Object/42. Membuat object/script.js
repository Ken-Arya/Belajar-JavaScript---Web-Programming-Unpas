//sebenernya ada banyak caranya tapi fokus kepada constructor saja. seperti contoh dibawah ini

function Mahasiswa(nama, kelas, npm, email) {
  //kenapa langsung this? karena otomatis dibuatkan tempat untuk menyimpan nya...seperti komentar dibawah ini
  //var this = {};   pertama dibuatkan object nya
  this.nama = nama;
  this.kelas = kelas;
  this.npm = npm;
  this.email = email;
  //return this;        lalu dikembalikan nilainya
}

//nyimpan nya harus pakai new karena langsung otomatis ke this.
mhs1 = new Mahasiswa(
  "Ken Arya Eka Santosa",
  "4IA23",
  "53418621",
  "kenarya.business@gmail.com"
);
