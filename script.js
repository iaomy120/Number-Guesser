let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
let chances = 3;

function myFunction() {
    let guess = document.getElementById("numb").value;
    if (guess < correct_ans) {
        document.getElementById("demo").innerHTML =
            "Correct answer is greater! You have " +
            (chances - 1) +
            " chances left.";
    } else if (guess > correct_ans) {
        document.getElementById("demo").innerHTML =
            "Correct answer is smaller! You have " +
            (chances - 1) +
            " chances left.";
    } else {
        document.getElementById("demo").innerHTML = "You Win!";
        document.getElementById("numb").disabled = true;
    }
    chances--;
    if (chances == 0) {
        document.getElementById("demo").innerHTML = "You lose!";
        document.getElementById("numb").disabled = true;
    }
    document.getElementById("numb").value = "";
}

function restartGame() {
    correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
    chances = 3;
    document.getElementById("numb").disabled = false;
    document.getElementById("demo").innerHTML = "";
    document.getElementById("numb").value = "";
}