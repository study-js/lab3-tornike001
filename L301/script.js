var sheyvana= prompt("შეიყვანე რიცხვი");
var sworia = sheyvana.indexOf("რეკლამა") == -1 && sheyvana.indexOf("მარკეტინგი") == -1 && sheyvana.indexOf("ვირუსი") == -1;

if(sworia){
    alert ("სწორია");


}
else {
    alert("არასწორია!!!");
}