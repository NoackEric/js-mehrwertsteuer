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

    auf.checked ? betrag = betrag * hoch : betrag = betrag / hoch 

    klein.checked ? betrag = betrag * klein : betrag = betrag / klein
}
 console.log(betrag);