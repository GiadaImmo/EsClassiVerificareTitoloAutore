/*
A partire dal codice realizzato nell’esercizio precedente realizzate
una classe "archivio" contenente un metodo che restituisce un
array di libri che corrispondono ad una certa stringa.
L’array in cui eseguire la ricerca è caricato in una variabile nella
stessa classe tramite il costruttore.
Il singolo libro può essere a sua volta rappresentato da una classe
Libro con i quattro attributi necessari, specificati nella consegna
del progetto.
*/

import './style.css';

const libriTrovati = []; // Array che conterrà i libri corrispondenti alla stringa inserita

// Classe contenente il costruttore di un singolo libro e la funzione che riempie l'array libriTrovati
class Archivio {
  constructor(titolo, autore) {
    this.titolo = titolo;
    this.autore = autore;
  }

  trovaLibri(stringaInserita) {
    if (
      this.autore.toLowerCase().includes(stringaInserita.toLowerCase()) ||
      this.titolo.toLowerCase().includes(stringaInserita.toLowerCase())
    ) {
      libriTrovati.push({ titolo: this.titolo, autore: this.autore });
    }
  }
}

const libri = []; // Lista di libri creata con la classe Archivio
let stringa = 'os'; // Stringa da cercare

libri[libri.length] = new Archivio('La Divina Commedia', 'Dante Alighieri');
libri[libri.length] = new Archivio('I Promessi Sposi', 'Alessandro Manzoni');
libri[libri.length] = new Archivio('Senilità', 'Italo Svevo');
libri[libri.length] = new Archivio('Una Donna', 'Sibilla Aleramo');
libri[libri.length] = new Archivio('Harry Potter', 'J.K. Rowling');

libri.forEach((singoloLibro) => singoloLibro.trovaLibri(stringa));

libriTrovati.forEach((singoloLibro) =>
  console.log(' "' + singoloLibro['titolo'] + '" ' + singoloLibro['autore'])
);
