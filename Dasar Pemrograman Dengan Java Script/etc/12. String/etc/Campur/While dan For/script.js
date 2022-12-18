// var kondisi = true;

// while(kondisi){
//     var a = parseFloat(prompt('masukkan nilai a : '), 10);
//     var b = parseFloat(prompt('masukkan nilai b : '), 10);
//     var c = a+b;
//     alert('nilai a + b : '+ c);
//     kondisi = confirm('Coba lagi?');
// }
// alert('oke terima kasih');


// ANGKOTTTTTT
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}
for(noAngkot = angkotBeroperasi+1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. '+ noAngkot + ' sedang tidak beroperasi.');
}