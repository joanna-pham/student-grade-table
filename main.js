var tableElt = document.getElementById('tableInfo') //query the document == searching the DOM for it
var studentGradeTable = new GradeTable(tableElt)

var headerElt = document.querySelector('header');
var pageHeader = new PageHeader(headerElt);

var app = new App(studentGradeTable, pageHeader); //instantiate by using new keyword--- storing in variable app
app.start(); //calling start method of the app object ---- "call the start method of the resulting object"
