var guessnumber = document.getElementById("guessnumber");
        var result = document.getElementById("result");
        var score = document.getElementById("score");
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        var totalscore = 10;

        function check() {
            var enterednumber = parseInt(guessnumber.value); // Parse entered number as integer
            if (randomNumber === enterednumber) {
                console.log("right");
                result.textContent = "Right";
                alert("YOU WIN");
            } else {
                totalscore--;
                score.textContent = "Score: " + totalscore;
                result.textContent = "Wrong";
            }
        }