const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {

    reader.question(`Is ${el1} bigger than ${el2} (yes or no)`, function(answer){
        if (answer === "yes"){
            // reader.close();
            callback(true);
            // reader.close();
        } else {
            // reader.close();
            callback(false);
           
        }
     
    })
}



function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

    madeAnySwaps = false;

    if (i == arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    }

    askIfGreaterThan(arr[i], arr[i + 1], function(boolean) {
        reader.close();
        if (boolean) {
            let firstnum = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = firstnum;
            madeAnySwaps = true;
             i++;
             innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        }  else {
            i++;
            innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        } 
    })

    // i++;
    // innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
}



function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
  
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        } else {
            reader.close();
            sortCompletionCallback();
        }
    }
    outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

// askIfGreaterThan(2, 3, sum => console.log(`what ${sum}`))