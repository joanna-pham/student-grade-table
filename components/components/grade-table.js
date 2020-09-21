class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tableBodyElt = this.tableElement.querySelector('#tableBody'); //searches a particular part of the document instead of the whole thing
    tableBodyElt.textContent = ""; //empty contents in element
    for (var i = 0; i < grades.length; i++) {
      //create <tr> element
      var tableRowElt = document.createElement('tr');

      //create <td>
      //add textContent
      var tableDataName = document.createElement('td');
      tableDataName.textContent = grades[i]['name'];

      var tableDataCourse = document.createElement('td');
      tableDataCourse.textContent = grades[i].course;

      var tableDataGrade = document.createElement('td');
      tableDataGrade.textContent = grades[i]['grade'];

      //append <td> to <tr>
      tableRowElt.appendChild(tableDataName);
      tableRowElt.appendChild(tableDataCourse);
      tableRowElt.appendChild(tableDataGrade);
      //append <tr> to <tbody>
      tableBodyElt.appendChild(tableRowElt);
    }
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
