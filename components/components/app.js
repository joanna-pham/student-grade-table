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
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade){
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'POST',
      headers:
      {
        "X-Access-Token": "ikR9rthn"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error){
    console.error(error); //takes an error and passes it
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  deleteGrade(id){
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades/' + id,
      method: 'DELETE',
      data: "none",
      headers:
      {
        "X-Access-Token": "ikR9rthn"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}


    //to find avg grades: look at all the grades
    //--create an empty storage for sum
    //for each grade in the list of grades provided
    //--add the value of the current grade to the storage for the total
    //--add all the grades and put into an empty storage
    //--divide sum by the number of grades there
