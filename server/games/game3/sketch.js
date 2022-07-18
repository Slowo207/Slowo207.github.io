function setup() {
  createCanvas(800, 800);
  registerArray = []
  fishArray = []
  fish = 0
  cost = 0
  change = 0 
  state = 0
  score = 0
  
  registerArray.push(new Register(100+75*0, 400, 75, 200, 50))
  registerArray.push(new Register(100+75*1, 400, 75, 200, 20))
  registerArray.push(new Register(100+75*2, 400, 75, 200, 10))
  registerArray.push(new Register(100+75*3, 400, 75, 200, 5))
  
  registerArray.push(new Register(100+75*0, 600, 75, 100, 1))
  registerArray.push(new Register(100+75*1, 600, 75, 100, 0,50))
  registerArray.push(new Register(100+75*2, 600, 75, 100, 0.25))
  registerArray.push(new Register(100+75*3, 600, 75, 100, 0.10))
  
  for(i=0; i < 10; i++){
    cost = getRndInteger(50, 200)
    fishArray.push(new Fish(cost, roundUpNearest10(getRndInteger(cost, cost + 20))))
  }  
  //registerArray.push()
  
}

function draw() {
  background(220);
  textSize(32)
  fill("black")
  text(score, 50, 50)
  text("Fish", 400, 450)
  text("Paid", 100, 100)
  text("Change", 250, 100)
  text(change, 300, 150)
  text("Give Change", 150, 375)
  
  text("50", 100+75*0, 500)
  text("20", 100+75*1, 500)
  text("10", 100+75*2, 500)
  text("5", 100+75*3, 500)
  
  text("1", 100+75*0, 650)
  text(".50", 100+75*1, 650)
  text(".25", 100+75*2, 650)
  text(".10", 100+75*3, 650)

  noFill()
  //register box
  rect(100, 400, 300, 300) 
  //Paid box
  rect(120, 120, 120, 200)
  //change box
  rect(260, 120, 120, 200)
  //fish box
  rect(400, 400, 300, 300)
  //cash box
  rect(100, 100, 300, 300)
  //give change box
  rect(150, 350, 200, 30)
  
  for(i=0; i < registerArray.length; i++){
    registerArray[i].draw()
  }  
  
  fishArray[fish].draw()
}

function mouseClicked(){
  if(mouseX < 400 && mouseY > 400 ){
    for(i=0; i < registerArray.length; i++){
      change += registerArray[i].clicked()
    }
  }else if((mouseX < 350 && mouseX > 150)&&(mouseY < 380 && mouseY > 350)){
    if(change == fishArray[fish].change){
      score += 1
    }else{
      console.log(fishArray[fish].change, change)
    }
    change = 0
    fish += 1
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function roundUpNearest10(num) {
  return Math.ceil(num/10)*10
}