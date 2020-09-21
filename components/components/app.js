class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.log(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades) //pass its grades parameter to the updateGrades() method of the gradeTable property of the this object (instead of logging grades to the console).
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
}
