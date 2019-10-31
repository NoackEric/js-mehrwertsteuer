/* Mehrwertsteuer berrechenen:
netto x 1,19 = brutto;
netto x 1,07 = brutto;
für mehrwertsteuer aufschlagen;
id = netto

mehrwertsteuer abziehen:
brutto /  1,19 = netto;
brutto / 1,07 = netto;
für mehrwertsteuer abziehen;
id = brutto 
*/

// var erstellen für das ergebnis welches dann mit in der funktion mit derm bestimten wert multiploziert wird oder dividiert.
// ver erstellen für die beträge 1,19 und 1,07.
// i.wie radiobtn ansprechen:
// btn onclick funktionsname 
function calc() {
    var betrag = document.getElementById("betrag").value;
    let auf = document.getElementById("netto");
    let hoch = document.getElementById("groß").value;
    let klein = document.getElementById("klein").value;
     
    if(auf.checked || hoch.checked){
        betrag = betrag * hoch;
    }else {
        betrag = betrag / hoch;
    }
    if(klein.checked || auf.checked){
        betrag = betrag * klein;
    }else{
        betrag = betrag / klein;
    }
    console.log(betrag)
     

//     auf.checked ? betrag = betrag * hoch : betrag = betrag / hoch ;
//  console.log(betrag);
 
// document.getElementById("endpreis").innerHTML = `<p>${betrag}</p>`;
}

//klein.checked ? betrag = betrag * klein : betrag = betrag / klein
