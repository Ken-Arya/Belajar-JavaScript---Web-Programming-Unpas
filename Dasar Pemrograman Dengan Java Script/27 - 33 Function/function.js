function volumeDuaBuahKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

var inputA = parseInt(prompt("Masukkan nilai sisi Kubus A : "));
var inputB = parseInt(prompt("Masukkan nilai sisi Kubus B : "));
alert(volumeDuaBuahKubus(inputA, inputB));
