var tableElt = document.getElementById('tableInfo') //query the document == searching the DOM for it
var headerElt = document.querySelector('header');
var formElt = document.querySelector('form')
var pElement = document.getElementById('gradesRecord');

var studentGradeTable = new GradeTable(tableElt, pElement)
var pageHeader = new PageHeader(headerElt);
var gradingForm = new GradeForm(formElt);

var app = new App(studentGradeTable, pageHeader, gradingForm); //instantiate by using new keyword--- storing in variable app
app.start(); //calling start method of the app object ---- "call the start method of the resulting object"
