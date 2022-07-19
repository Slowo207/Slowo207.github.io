class Scoreboard
{
    constructor(amount_of_questions)
    {
        // score of the questions
        this.score = [];
        this.#generateDefaultScore(amount_of_questions);
    }

    #generateDefaultScore(amount_of_questions)
    {
        for(let i = 0; i < amount_of_questions; ++i)
        {
            this.score.push("-");
        }
    }

    displayScoreboard()
    {
        stroke(0);
        textAlign(CENTER,CENTER);
        textSize(20);
        fill(0);
        text("Question 1: ", width/2 - 50, 3*(height/10));
        text(this.score[0], width/2 + 50, 3*(height/10));
        
        text("Question 2: ", width/2 - 50, 4*(height/10));
        text(this.score[1], width/2 + 50, 4*(height/10));
        
        text("Question 3: ", width/2 - 50, 5*(height/10));
        text(this.score[2], width/2 + 50, 5*(height/10));
        
        text("Question 4: ", width/2 - 50, 6*(height/10));
        text(this.score[3], width/2 + 50, 6*(height/10));

        text("Question 5: ", width/2 - 50, 7*(height/10));
        text(this.score[4], width/2 + 50, 7*(height/10));
    }
}