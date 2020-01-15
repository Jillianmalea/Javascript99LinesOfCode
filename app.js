let friends = ['Carolline', 'Cameron', 'Emily', 'Lacey', 'Alex'];

function linesCounter() {
    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j > 0; j--) {
            if (j > 1) {
                console.log(friends[i] + ' has ' + j + ' lines of code')
            } else {
                console.log(friends[i] + ' has ' + j + ' line of code')
            }
        }
    }
}

linesCounter()

// console.log(counter + 'lines of code in the file, lines of code takes one out, strikes it all out, lines of code in the file.');
// counter--;
// let word = 'lines';
// let counter = 99;
// while (counter > 0) {

// }
// if (counter-- 1) {
//     word = 'line';
// }