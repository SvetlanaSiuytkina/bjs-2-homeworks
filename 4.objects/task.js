function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.subject = "";
}

let studentOne = new Student("Oleg", "male", 20);
let studentTwo = new Student("Olga", "female", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(!this.marks) {
    console.log("Ошибка: студент отчислен");
    return false;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if(!this.marks || this.marks.length === 0) {
    return 0;
  }
return this.marks.reduce((sum, mark) => sum + mark, 0 ) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}