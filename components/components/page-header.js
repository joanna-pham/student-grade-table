class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
    // this.updateAverage = this.updateAverage.bind(this);
  }
  updateAverage(newAverage){
    this.headerElement.querySelector('.badge').textContent = newAverage
    // var badgeElements = this.headerElement.querySelectorAll('.badge');
    // for(var i=0; i < badgeElements.length; i++){
    //   var badgeElement = badgeElments[i]
    //   badgeElement.textContent = newAverage;
    // }
  }
}
