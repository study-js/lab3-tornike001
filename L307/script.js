var students1 = [];
var students2 = [];

for (var i = 0; i < 3; ++i){
    var add1 = prompt("შეიყვანეთ სტუდენტი I :");

    students1.push(add1);
}

for (var i = 0; i < 3; ++i){
    var add2 = prompt("შეიყვანეთ სტუდენტი II :");

    students2.push(add2);
}


for (var i = 0; i < students2.length; ++i) {
    var current = students2[i];

    if (students1.indexOf(current) == -1){
        students1.push(current);
    }
}

document.write(students1);