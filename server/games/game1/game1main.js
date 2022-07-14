var game_start = false;

// an object set to contain the questions
var questions_set = null;

var game_stage = 0;

var option1, option2, option3, option4;

var toggle_options = true;

var score = ["-", "-", "-", "-", "-"];

function setup()
{
	createCanvas(800, 800);

    // Start Button
    game_start_button = createButton('Start');  
    game_start_button.position(width/2 - 75, height/2 - 38);
    game_start_button.size(150,76);
    game_start_button.mouseClicked(function(){game_start = true;});

    questions_set = new questionAnswerGenerator(5, 100);
    
}

function draw()
{
    // default background
    background(70,200,255);

    if(game_start)
    {
        
        game_start_button.remove();

        stroke(0);
        textAlign(CENTER,CENTER);
        textSize(20);
        text("Question 1: ", width/2, 3*(height/10));
        text(score[0], width/2 + 100, 3*(height/10));
        
        text("Question 2: ", width/2, 4*(height/10));
        text(score[1], width/2 + 100, 4*(height/10));
        
        text("Question 3: ", width/2, 5*(height/10));
        text(score[2], width/2 + 100, 5*(height/10));
        
        text("Question 4: ", width/2, 6*(height/10));
        text(score[3], width/2 + 100, 6*(height/10));

        text("Question 5: ", width/2, 7*(height/10));
        text(score[4], width/2 + 100, 7*(height/10));

        if(game_stage == 0)
        {
            // Display Questions
            questions_set.displayQuestion(game_stage);
            
            if(toggle_options)
            {
                // Answer Options
                var answer_button_width = width/2;
                var answer_button_height = height/10;

                // Option 1
                option1 = createButton("A) " + questions_set.answers_options[game_stage][0], questions_set.answers_options[game_stage][0]);
                option1.position(0, answer_button_height*8);
                option1.size(answer_button_width, answer_button_height);
                option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value())});

                // Option 2
                option2 = createButton("B) " + questions_set.answers_options[game_stage][1], questions_set.answers_options[game_stage][1]);
                option2.position(answer_button_width, answer_button_height*8);
                option2.size(answer_button_width, answer_button_height);
                option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value())});

                // Option 3
                option3 = createButton("C) " + questions_set.answers_options[game_stage][2], questions_set.answers_options[game_stage][2]);
                option3.position(0, answer_button_height*9);
                option3.size(answer_button_width, answer_button_height);
                option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value())});

                // Option 4
                option4 = createButton("D) " + questions_set.answers_options[game_stage][3], questions_set.answers_options[game_stage][3]);
                option4.position(answer_button_width, answer_button_height*9);
                option4.size(answer_button_width, answer_button_height);
                option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value())});

                toggle_options = !toggle_options;
            }
        }
        else if(game_stage == 1)
        {
            // Display Questions
            questions_set.displayQuestion(game_stage);
            
            if(toggle_options)
            {
                // Answer Options
                var answer_button_width = width/2;
                var answer_button_height = height/10;

                // Option 1
                option1 = createButton("A) " + questions_set.answers_options[game_stage][0], questions_set.answers_options[game_stage][0]);
                option1.position(0, answer_button_height*8);
                option1.size(answer_button_width, answer_button_height);
                option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value())});

                // Option 2
                option2 = createButton("B) " + questions_set.answers_options[game_stage][1], questions_set.answers_options[game_stage][1]);
                option2.position(answer_button_width, answer_button_height*8);
                option2.size(answer_button_width, answer_button_height);
                option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value())});

                // Option 3
                option3 = createButton("C) " + questions_set.answers_options[game_stage][2], questions_set.answers_options[game_stage][2]);
                option3.position(0, answer_button_height*9);
                option3.size(answer_button_width, answer_button_height);
                option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value())});

                // Option 4
                option4 = createButton("D) " + questions_set.answers_options[game_stage][3], questions_set.answers_options[game_stage][3]);
                option4.position(answer_button_width, answer_button_height*9);
                option4.size(answer_button_width, answer_button_height);
                option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value())});

                toggle_options = !toggle_options;
            }
        }
        else if(game_stage == 2)
        {
            // Display Questions
            questions_set.displayQuestion(game_stage);
            
            if(toggle_options)
            {
                // Answer Options
                var answer_button_width = width/2;
                var answer_button_height = height/10;

                // Option 1
                option1 = createButton("A) " + questions_set.answers_options[game_stage][0], questions_set.answers_options[game_stage][0]);
                option1.position(0, answer_button_height*8);
                option1.size(answer_button_width, answer_button_height);
                option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value())});

                // Option 2
                option2 = createButton("B) " + questions_set.answers_options[game_stage][1], questions_set.answers_options[game_stage][1]);
                option2.position(answer_button_width, answer_button_height*8);
                option2.size(answer_button_width, answer_button_height);
                option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value())});

                // Option 3
                option3 = createButton("C) " + questions_set.answers_options[game_stage][2], questions_set.answers_options[game_stage][2]);
                option3.position(0, answer_button_height*9);
                option3.size(answer_button_width, answer_button_height);
                option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value())});

                // Option 4
                option4 = createButton("D) " + questions_set.answers_options[game_stage][3], questions_set.answers_options[game_stage][3]);
                option4.position(answer_button_width, answer_button_height*9);
                option4.size(answer_button_width, answer_button_height);
                option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value())});

                toggle_options = !toggle_options;
            }
        }
        else if(game_stage == 3)
        {
            // Display Questions
            questions_set.displayQuestion(game_stage);
            
            if(toggle_options)
            {
                // Answer Options
                var answer_button_width = width/2;
                var answer_button_height = height/10;

                // Option 1
                option1 = createButton("A) " + questions_set.answers_options[game_stage][0], questions_set.answers_options[game_stage][0]);
                option1.position(0, answer_button_height*8);
                option1.size(answer_button_width, answer_button_height);
                option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value())});

                // Option 2
                option2 = createButton("B) " + questions_set.answers_options[game_stage][1], questions_set.answers_options[game_stage][1]);
                option2.position(answer_button_width, answer_button_height*8);
                option2.size(answer_button_width, answer_button_height);
                option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value())});

                // Option 3
                option3 = createButton("C) " + questions_set.answers_options[game_stage][2], questions_set.answers_options[game_stage][2]);
                option3.position(0, answer_button_height*9);
                option3.size(answer_button_width, answer_button_height);
                option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value())});

                // Option 4
                option4 = createButton("D) " + questions_set.answers_options[game_stage][3], questions_set.answers_options[game_stage][3]);
                option4.position(answer_button_width, answer_button_height*9);
                option4.size(answer_button_width, answer_button_height);
                option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value())});

                toggle_options = !toggle_options;
            }
        }
        else
        {
            // Display Questions
            questions_set.displayQuestion(game_stage);
            
            if(toggle_options)
            {
                // Answer Options
                var answer_button_width = width/2;
                var answer_button_height = height/10;

                // Option 1
                option1 = createButton("A) " + questions_set.answers_options[game_stage][0], questions_set.answers_options[game_stage][0]);
                option1.position(0, answer_button_height*8);
                option1.size(answer_button_width, answer_button_height);
                option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value())});

                // Option 2
                option2 = createButton("B) " + questions_set.answers_options[game_stage][1], questions_set.answers_options[game_stage][1]);
                option2.position(answer_button_width, answer_button_height*8);
                option2.size(answer_button_width, answer_button_height);
                option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value())});

                // Option 3
                option3 = createButton("C) " + questions_set.answers_options[game_stage][2], questions_set.answers_options[game_stage][2]);
                option3.position(0, answer_button_height*9);
                option3.size(answer_button_width, answer_button_height);
                option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value())});

                // Option 4
                option4 = createButton("D) " + questions_set.answers_options[game_stage][3], questions_set.answers_options[game_stage][3]);
                option4.position(answer_button_width, answer_button_height*9);
                option4.size(answer_button_width, answer_button_height);
                option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value())});

                toggle_options = !toggle_options;
            }
        }
    }
    else 
    {
        //background placeholder, can remove later
        stroke(0);
        textAlign(CENTER,CENTER);
        textSize(35);
        text("Background picture here", width/2, height/4);

        
    }
}
