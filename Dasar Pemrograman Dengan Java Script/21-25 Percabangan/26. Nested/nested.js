var suwit = 10;
var s = "";
var b = "*";
for (i = 0; i <= suwit; i++) {
  for (j = 0; j <= i; j++) {
    s += b;
  }
  s += "\n";
}
for (var i = suwit + 1; i > 0; i--) {
  for (var j = 0; j <= i; j++) {
    s += b;
  }
  s += "\n";
}
console.log(s);
