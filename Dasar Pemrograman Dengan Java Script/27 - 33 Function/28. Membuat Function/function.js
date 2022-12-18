//membuat kode program jadi efisien, contoh source pada sebeluumnya jadi efisien

function volumeDuaBuahKubus(a, b) {
  return a * a * a + b * b * b;
}

var inputA = prompt("Masukkan nilai sisi Kubus A : ");
var inputB = prompt("Masukkan nilai sisi Kubus B : ");
alert(volumeDuaBuahKubus(inputA, inputB));
