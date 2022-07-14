class questionAnswerGenerator
{

    constructor(amount_of_questions, range_of_numbers)
    {
        // an array to contain the questions
        this.questions = [];
        this.answers_options = [];
        this.answers = [];
        this.#generateQuestions(amount_of_questions, range_of_numbers);
        this.#generateAnswers(amount_of_questions, range_of_numbers);
    }

    char_to_operator = 
    {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y }
    };

     // a private method to populate the array with 5 questions.
    #generateQuestions(amount_of_questions, range_of_numbers)
     {
         for(let i = 0; i < amount_of_questions; ++i)
            {
                let int1 = floor(random(1, floor(range_of_numbers/2)+1));
                let int2 = floor(random(int1));
                let operatorsArray = ['+', '-'];
                let operator = random(operatorsArray);
                this.questions.push("What is " + int1 + " " + operator + " " + int2 + "?");
                this.answers.push(this.char_to_operator[operator](int1,int2));
            }
     }

     #generateAnswers(amount_of_questions, range_of_numbers)
     {
        for(let i = 0; i < amount_of_questions; ++i )
        {
            // Insert the correct answer into the set
            let answer_set = new Set([this.answers[i]]);

            // Populate the set with random options without duplicates
            for(let j = 0; j < 3; ++j)
            {
                let int1 = floor(random(0, range_of_numbers));
                // Check for duplicates
                while(answer_set.has(int1))
                {
                    int1 = floor(random(0, range_of_numbers));
                }
                answer_set.add(int1);
            }

            // Converting the set to an array
            let temp_arr = Array.from(answer_set);

            //shuffle the answers
            this.#shuffle_array(temp_arr);

            this.answers_options.push(temp_arr);
        }
     }

     displayQuestion(question_number)
     {
        // Questionaire box
        stroke(125);
        strokeWeight(5);
        fill(0);
        rect(0, 0, width, height/5);
        // Questions
        fill(255);
        stroke(255);
        strokeWeight(1);
        textSize(35);
        textAlign(CENTER,CENTER);
        // textFont();
        text(this.questions[question_number], width/2, (height/5)/2);
     }

     checkAnswer(question_number ,chosen_answer)
     {
        if(this.answers[question_number] == chosen_answer)
        {
            game_stage++;
            score[question_number] = "Correct";
            toggle_options = !toggle_options;
        }
        else
        {
            game_stage++;
            score[question_number] = "Wrong";
            toggle_options = !toggle_options;
        }
     }

     // private helper functions

     #shuffle_array(array_to_shuffle)
     {
        let randomized_index = 0;
        let temp_element = 0;
        let size = array_to_shuffle.length;

        for(let i = size - 1; i > 0; i--)
        {
            randomized_index = floor(random(i+1));
            temp_element = array_to_shuffle[i];
            array_to_shuffle[i] = array_to_shuffle[randomized_index];
            array_to_shuffle[randomized_index] = temp_element;
        }
     }
};