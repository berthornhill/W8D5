const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});





function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        reader.close();
       return completionCallback(sum);
    } else {
        reader.question("Enter a number", function (number) {
            const number1 = parseInt(number);
            sum += number1;
            console.log(sum);

            // console.log(sum);
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);

        });
    }   
}

addNumbers(0, 4, sum => console.log(`Total Sum: ${sum}`)); 
// reader.close();