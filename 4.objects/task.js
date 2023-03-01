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
  this.getAverage = this.marks.reduce((partialSum, a) => partialSum + a, 0) / this.marks.length;
  console.log(this.getAverage)
}

Student.prototype.exclude = function (reason) {
  
}
