//secara singkat seperti dibawah ini untuk buat objek objek nya

//cara 1 pakai function
// function haloFunction() {
//   console.log("halo pakai function");
// }
// haloFunction();

// //cara 2 pakai object literal
// var obj = {};
// obj.halo = function () {
//   console.log("Halo pakai object literal");
// };
// obj.halo();

// //cara 3 pakai constructor
// function HaloConstructor() {
//   //nama harus besar awalnya
//   console.log("Halo pakai constructor");
// }
// new HaloConstructor();

//THIS
console.log("PAKAI THIS DIBAWAH INI");
console.log(this == window);
a = 10;
console.log(this.a);

//THIS Function Declaration
//cara 1 pakai function
function haloFunction() {
  console.log(this);
  console.log("halo pakai function");
}
this.haloFunction();
//this adalah mengembalikan nilai global di function

//cara 2 pakai object literal
var obj = { a: 10, nama: "Ken Arya" };
obj.halo = function () {
  console.log(this);
  console.log("Halo pakai object literal");
};
obj.halo();
//this mengembalikan object yang bersangkutan/yang dijalankan

//cara 3 pakai constructor
function HaloConstructor() {
  console.log(this);
  console.log("Halo pakai constructor");
}
// new HaloConstructor();
var obj1 = new HaloConstructor();
//this mengembalikan objek yang baru dibuat
