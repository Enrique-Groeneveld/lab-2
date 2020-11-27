var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];
var text = document.getElementById("text");


random() 




function random(){

var outcome = Math.floor((Math.random() * 6) + 1);


	text.innerHTML += spellen[outcome];

}



