var fasi = prompt("შეიყვანეთ ფასი: ");

var dolari = fasi.includes("$");
var lari = fasi.includes("L");


if (dolari) {
    document.write(parseInt(fasi.substr(1)) * 2.6);
}
else if (lari) {
    document.write(parseInt(fasi.substr(1)) / 2.6);
}