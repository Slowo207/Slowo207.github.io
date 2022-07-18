class Register{
  constructor(x, y, width, height, cost){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.cost = cost
  }
  
  draw(){
    noFill()
    rect(this.x, this.y, this.width, this.height)
  }
  
  clicked(){
    if((mouseX > this.x && mouseX < this.x+this.width) && (mouseY > this.y && mouseY < this.y + this.height)){
      return this.cost
    }
    else{
      return 0
    }
  }
}