/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let seconds = 12560
let minutes = seconds / 60;
let hours = minutes / 60;
console.log(Math.round(hours));
console.log(Math.round((hours % Math.round(hours)) * 60));
console.log(seconds - Math.round(minutes) * 60);
