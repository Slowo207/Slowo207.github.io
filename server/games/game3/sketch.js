function setup() {
  createCanvas(800, 800);
  registerArray = []
  fishArray = []
  fish = 0
  cost = 0
  change = 0 
  gameState = 0
  score = 0
  level = 4
  levelArray = [
    [0.1, 1, 0.1, false],
    [0.1, 1, 0.05, false],
    [1, 100, 10, true],
    [1, 100, 5, true],
    [1, 100, 1, true]
  ]
  
  registerArray.push(new Register(100+75*0, 400, 75, 200, 50))
  registerArray.push(new Register(100+75*1, 400, 75, 200, 20))
  registerArray.push(new Register(100+75*2, 400, 75, 200, 10))
  registerArray.push(new Register(100+75*3, 400, 75, 200, 5))
  
  registerArray.push(new Register(100+75*0, 600, 75, 100, 1))
  registerArray.push(new Register(100+75*1, 600, 75, 100, 0,50))
  registerArray.push(new Register(100+75*2, 600, 75, 100, 0.25))
  registerArray.push(new Register(100+75*3, 600, 75, 100, 0.10))
  
  //registerArray.push()
  
  fishPrice(levelArray[level])
}

function fishPrice(priceArray){
  startPrice = priceArray[0]
  endPrice = priceArray[1]
  increment = priceArray[2]
  rD = priceArray[3]
  
  for(i=0; i < 10; i++){
    cost = getRndInteger(startPrice, endPrice, rD)
    fishArray.push(new Fish(cost, findPaid(cost,endPrice, increment)))
  }  
}

function draw() {
  background(220);
  
  if(gameState == 0){
    startPage()
  }else if (gameState == 1){
    gamePage()
  }
}

function startPage(){
  textSize(32)
  fill("black")
  text("Start", 370, 350)
  noFill()
  rect(300, 300, 200, 100)
}

function gamePage(){
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
  if(gameState == 0){
    if((mouseX > 300 && mouseX < 500) && (mouseY > 300 && mouseY < 400)){
      gameState = 1
    }
  }else if (gameState == 1){
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
}

function getRndInteger(min, max, rD) {
  n = (Math.random() * (max - min)  + min)*100;
  n = Math.floor(n)/100
  if(rD == true){
    return Math.floor(n)
  }else if(rD == false){
    return n
  }
}

function removeDecimal(n){
  return Math.floor(n)
}

function findPaid(num, endPrice, increment) {
  m = endPrice - num
  mRemainder = Math.floor(m/increment)
  mRandom = getRndInteger(1, mRemainder, true)
  return num + increment*mRandom
}