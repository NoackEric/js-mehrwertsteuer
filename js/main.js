function calc() {
    var betrag = document.getElementById("betrag").value;   // eingegebener Wert (ausgangswert)
    let multiplikator = document.getElementById("netto");    // operator *
    var x = document.getElementById("groß").checked ? .19 : .07;
        

    if (multiplikator.checked) {
        betrag = betrag * x;
    } else {
        betrag = betrag / (1 + x);
    }
        
     console.log(betrag)

}
    



