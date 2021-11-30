const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question("What's your name or nickname: ", (answer) => {
  answers.push(answer);
  rl.question("what activity do you like doing: ", (answer) => {
    answers.push(answer);
    rl.question("what do you listen to while doing that: ", (answer) => {
      answers.push(answer);
      rl.question("what meal of the day is your favourite: ", (answer) => {
        answers.push(answer);
        rl.question("what's your favourie food for that time of the day: ", (answer) => {
          answers.push(answer);
          rl.question("which sport is your absolute favorite: ", (answer) => {
            answers.push(answer);
            rl.question("what are you amazing at : ", (answer) => {
              answers.push(answer);
              console.log(`${answers[0]} loves listing to ${answers[2]} while ${answers[1]}, ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}`);
              rl.close();
            });
          });
        });
      });
      
      
    });

    
  });
 
});


