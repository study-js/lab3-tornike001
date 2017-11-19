var sheyvana = prompt("შეიყვანეთ მაქსიმუმ 15 სიმბოლო: ");

if (sheyvana.length < 16){
    alert("სწორია!");
}
else {
    var mochra = sheyvana.substring(0, 15) + '...';
    alert(mochra)
}