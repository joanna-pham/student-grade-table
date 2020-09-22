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
    console.log("handleSubmit called")
  }
}
