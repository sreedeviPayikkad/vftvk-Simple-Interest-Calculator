/*
 * displays the result into the intended span, adding a class to highlight numbers as well
 */
function displayResult(p, r, y, a) {
    var result = document.getElementById("result");
    document.getElementById("result").innerHTML = "If you deposit \<span class='highlight'>" + p + ",\</span><br\>at an interest rate of \<span class='highlight'>" + r + "%.\</span>\<br\>You will receive an amount of \<span class='highlight'>" + a + "\</span>,<br\>in the year \<span class='highlight'>" + y + "\</span><br\><br\>";
}

/*
 * calculates the interest for the given values
 * performs input validation for principal amount since requirement is to have a value above zero
 */
function compute() {
    p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    displayResult(p, rate, year, interest);
}

/**
 * updateRate is called everytime the range slider is moved, making the value available as you slide the control
 */
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}