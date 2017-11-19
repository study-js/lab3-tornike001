var students = [];


for (var i = 0; i < 3; ++i){
    var name = prompt("სტუდენტის სახელი: ");

    students.push(name);
}


document.write(students.reverse());