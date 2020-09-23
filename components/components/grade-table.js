class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tableBodyElt = this.tableElement.querySelector('#tableBody'); //searches a particular part of the document instead of the whole thing
    tableBodyElt.textContent = ""; //empty contents in element
    for (var i = 0; i < grades.length; i++) {
      var element = this.renderGradeRow(grades[i])
      // var element = this.renderGradeRow(this.deleteGrade)
      var tableRowElt = document.createElement('tr');


      var tableDataName = document.createElement('td');
      tableDataName.textContent = grades[i]['name'];

      var tableDataCourse = document.createElement('td');
      tableDataCourse.textContent = grades[i].course;

      var tableDataGrade = document.createElement('td');
      tableDataGrade.textContent = grades[i]['grade'];

      tableRowElt.appendChild(tableDataName);
      tableRowElt.appendChild(tableDataCourse);
      tableRowElt.appendChild(tableDataGrade);
      tableBodyElt.appendChild(tableRowElt);
      if (!grades) {
        var pElt = document.querySelector('d-none');
        pElt.classList.remove('d-none')
      }
    }
  }
  onDeleteClick(deleteGrade) {
    this.onDeleteClick;
  }
  renderGradeRow(data, deleteGrade) {
    //data is a single grade object
    //deleteGrade will be a function
    var tableBodyElt = this.tableElement.querySelector('#tableBody')

    var trElt = document.createElement('tr');
    var tdNameElt = document.createElement('td');
    var tdCourseElt = document.createElement('td');
    var tdGradeElt = document.createElement('td');
    var tdBtnElt = document.createElement('td');
    var btnElt = document.createElement('button')

    btnElt.textContent = "Delete";

    tdBtnElt.append(btnElt);
    trElt.appendChild(tdNameElt);
    trElt.appendChild(tdCourseElt);
    trElt.appendChild(tdGradeElt);
    trElt.appendChild(tdBtnElt);
    tableBodyElt.appendChild(trElt);

    tdNameElt.textContent = data['name'];
    tdCourseElt.textContent = data['course'];
    tdGradeElt.textContent = data['grade'];

    btnElt.addEventListener('click', function () {
      deleteGrade(data.id)
    })
    return trElt
  }
}
  // var gradeName = "name";
  // console.log("grades[i].gradeName", grades[i].gradeName)
  // console.log("grades[i][gradeName]", grades[i][gradeName]) //want a variable that has this

  //dot notation - hard link to property name
  //bracket notation - variable that's similar to property name

// course: "Web Development"
// createdBy: "Joanna Pham"
// grade: 100
// id: 6375
// name: "Joanna Pham"
