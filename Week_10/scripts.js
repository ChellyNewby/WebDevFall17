var colors = ['red', 'blue', 'yellow', 'purple', 'green', 'brown', 'orange', 'pink', 'It doesnt exist does it :('];


function GuessingGame() {
    document.getElementById("demo").innerHTML = "Is it " + colors[Math.floor((Math.random() * 9))] + " ?";
}


function Answer(ans) {
    if (ans == 0) {
        document.getElementById("demo2").innerHTML = "YES! I GUESSED IT";
    } else {
        document.getElementById("demo2").innerHTML = "Darn. Press first button so I can try again :) ";

    }


}