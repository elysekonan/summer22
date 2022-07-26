// should print

// 3...
// 2...
// 1...
// 0

function countdown() {
    console.log('Kitchen timer');
    for (let i = 3; i > 0; i--) {
        console.log(i + "...");
    }
    console.log(0);
}

setTimeout(countdown, 3000);