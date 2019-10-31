function calc() {
    var betrag = document.getElementById("betrag").value;   // eingegebener Wert (ausgangswert)
    let multiplikator = document.getElementById("netto");    // operator *
    var x = document.getElementById("groß").checked ? .19 : .07;
    var steuer = ''

    if (multiplikator.checked) {
        steuer = betrag * x;
    } else {
        steuer = betrag / (1 + x);
    }
        
     console.log(steuer)
document.getElementById("müll").innerHTML = `${steuer}`;
}




