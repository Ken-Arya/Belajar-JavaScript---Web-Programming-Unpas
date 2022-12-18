//membuat object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  //coba angkot1.penumpangNaik("Erik")
  //liatnya angkot1.penumpang
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  //angkot1.penumpangTurun("nama", 1000)
  //liat ke penumpang dan kas
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("Penumpang Masih Kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Andre Wirawan", ["Tambun", "Kalimalang"], [], 0);
var angkot2 = new Angkot("Andre Wirawan", ["Tambun", "Kalimalang"], [], 0);
