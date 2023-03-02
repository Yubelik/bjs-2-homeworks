function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
      
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!Student.hasOwnProperty('marks')){
        this.marks = this.marks.concat(marks);
    } 
}

Student.prototype.getAverage = function () {
    // this.getAverage = getAverage;
    // console.log(student.hasOwnProperty('getAverage'));
    // console.log(student.hasOwnProperty('getAverage'));
    let student = new Student();

// console.log(this.marks.length);

    if (student.hasOwnProperty('marks') && this.marks.length == 0){
        this.getAverage = 0;
        // console.log(this.getAverage);
    } else {
        this.getAverage = this.marks.reduce((partialSum, a) => partialSum + a, 0) / this.marks.length;
            // console.log(this.getAverage);
            // student.getAverage();
        }
}

//  let student = new Student();
//  student.getAverage();
//  student.addMarks(5, 5, 5);
  //  student.getAverage();
 //   student.marks = [3, 4, 5];   
 //   student.getAverage();