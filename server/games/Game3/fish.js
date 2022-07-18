class Fish{
  constructor(cost, paid){
    this.width = 75
    this.height = 200
    this.x = 500
    this.y = 550
    this.cost = cost
    this.paid = paid
    this.change = paid - cost
  }
  
  draw(){
    //draws fish
    ellipse(this.x, this.y, this.width, this.height)
    textSize(20)
    fill("black")
    text(this.cost, this.x- 15, this.y)
    
    //draws change
    textSize(32)
    fill("black")
    text(this.paid, 120, 220)
  }
}