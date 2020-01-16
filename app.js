let friends = ['Carolline', 'Cameron', 'Emily', 'Lacey', 'Dae Suk Cho'];
//I'm typing out comments so I can grasp this easier.
//let = var (so my variable of friends is listed insie this array and array means list)
function linesCounter() {
    for (let i = 0; i < friends.length; i++) {
        // i= index and the index begins at 0, which means the first item in the list (array)
        for (let j = 99; j > 0; j--) {
            //j is a new variable because we've used I, but it works the same.
            if (j > 1) {
                // if J is greater than 1, the console will run because its nested in this set of curly braces
                console.log( j+ ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' takes one out, strikes it all out. ' + j + ' lines of code in the file.' ) 
                // console.log(friends[i] + ' has ' + j + ' lines of code') ( original form that Jake showed me)
            } else {
                // can think of else as otherwise. Will run the console because nested in curly braces.
                console.log( j+ ' line of code in the file, ' + j + ' line of code. ' + friends[i] + ' takes the last one out, clears the whole thing out, ' + j + ' line of code in the file.')
                // console.log(friends[i] + ' has ' + j + ' line of code') ( original form that Jake showed me)
            }
        }
    }
}

linesCounter()

