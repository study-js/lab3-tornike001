var students = [];

for (var i = 0; i < 3; ++i) {
    var name = prompt("სახელი: ");

    students.push(name);
}

document.write(students.sort());