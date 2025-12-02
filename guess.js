const max = prompt("Enter the max number :");
const random = Math.floor(Math.random() * max) +1 ;
let guess = prompt("guess the number :");
while(true) {
    if(guess == "quit") {
        console.log("quitting...");
        break;
    }
    if(guess == random) {
        console.log("you are correct ! the random number was", random);
        break;
    }
    else if (guess < random) {
        guess = prompt(" Hint : Your guess was too small.Please try larger number");
    }
    else if (guess > random) {
        guess = prompt(" Hint : Your guess was too large.Please try smaller number");
    }
    /*else{
        guess = prompt("your guess is wrong. You can try again.");
    }*/
}