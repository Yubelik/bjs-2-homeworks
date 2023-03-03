function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []     
}

let student11 = new Student('Петя', 'М', '21');

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ('marks' in this){
        this.marks = this.marks.concat(marks);
    } 

}
Student.prototype.getAverage = function () {
    // console.log('null = ' + this.age);
    // return 0
    if ((('marks' in this)==false) || (this.marks.length == 0)){ 
        return 0; 
     } 
     else {
        return this.marks.reduce((partialSum, a) => partialSum + a, 0) / this.marks.length;
        }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;

}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);