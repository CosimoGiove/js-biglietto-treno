" use strect"
//chiedere all'utente il numero di km da percorrere e salvarlo in una variabile prompt//

let NumeroKm = prompt("Numeri di km da percorrere")
NumeroKm = parseInt(NumeroKm)
console.log("Numero di km:", NumeroKm)

//chiedere all'utente l'età del passegero e salvarlo in una variabile prompt//

const EtaPasseggero = prompt("Età del passeggero")
console.log("età del passeggero:",EtaPasseggero)

//calcolare il prezzo del biglietto in base ai km percorsi dall'utente (prezzo al km 0.21 euro)//

let PrezzoKm= NumeroKm*0.21;
PrezzoKm.toFixed(2)



/*Condizioni
se l'utente ha un età compresa dai 0 a 17 anni:*/

const sconto2= PrezzoKm*0.4;
const sconto =PrezzoKm*0.2;
//sconto del 20%//
if (EtaPasseggero < 18){
    PrezzoKm= PrezzoKm - sconto
    console.log("Prezzo scontato totale da pagare : ", PrezzoKm.toFixed(2))

//sconto del 40%//
}else if (EtaPasseggero > 65){

    PrezzoKm= PrezzoKm - sconto2
    console.log("prezzo scontato totale da pagare:", PrezzoKm.toFixed(2))
}
 else{
    console.log("Prezzo intero", PrezzoKm)
 }
 
