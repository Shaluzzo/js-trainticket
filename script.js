var age = prompt('Quanti anni hai?');
var distance = prompt('Quanti km devi percorrere?');
var prezzo = (distance * 0.21);
var under = (prezzo - ((prezzo / 100) * 20));
var over = (prezzo - ((prezzo / 100) * 40));

if (age <= 17) {
document.writeln('Il costo del biglietto è ' + under + '$');
}

else if (age >= 65) {
document.writeln('Il costo del biglietto è ' + over + '$');
}

else {
  document.writeln('Il costo del biglietto è ' + prezzo + '$');
}
