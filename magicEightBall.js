let userName = 'Filip'; // Enter your name here.
let userQuestion = 'Will I ever get a job?' // Ask your question here and run the code!

console.log(userName + "\n" + userQuestion + "\n\n" + "Magic Eight Ball");

let eightBall = Math.floor(Math.random() * 8) + 1;

switch(eightBall) {
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Don\'t count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
}

