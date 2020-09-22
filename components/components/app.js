class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.log(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades) //pass its grades parameter to the updateGrades() method of the gradeTable property of the this object (instead of logging grades to the console).]

    var sum = 0;
    for (var i = 0; i < grades.length; i++){
      sum += grades[i].grade
    }
    var average = sum / grades.length
    this.pageHeader.updateAverage(average) //pass the computed average to the updateAverage method of the pageHeader property of the this object.
  }
  getGrades() {
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'GET',
      headers:
      {
        "X-Access-Token": "ikR9rthn"
      },
      success: this.handleGetGradesSuccess, //use this object to call the function
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
  createGrade(name, course, grade){
    console.log("name", name)
    console.log("course", course)
    console.log("grade", grade)
  }
  handleCreateGradeError(error){
    console.error(error); //takes an error and passes it
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
}


    //to find avg grades: look at all the grades
    //--create an empty storage for sum
    //for each grade in the list of grades provided
    //--add the value of the current grade to the storage for the total
    //--add all the grades and put into an empty storage
    //--divide sum by the number of grades there
