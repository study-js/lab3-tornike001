var students = [];

for (var i = 0; i < 4; ++i){
    var addStudents = prompt("შეიყვანეთ სტუდენტი: ");

    students.push(addStudents);
}


var search = prompt("სტუდენტის ძიება: ");

var result = students.filter(function(name){
    return name === search;
});

document.write("მოიძებნა სტუდენტი: " + result);