class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this); //bind handleSubmit before...
    this.formElement.addEventListener('submit', this.handleSubmit) //...passing submit event listener on this.formElement
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target) //instantiate FormData, passing target property of event object as argument
    var formDataName = formData.get('name');
    var formDataCourse = formData.get('course');
    var formDataGrade = formData.get('grade');
    this.createGrade(formDataName, formDataCourse, formDataGrade)
    event.target.reset();
    // console.log("handleSubmit called")
  }
}
