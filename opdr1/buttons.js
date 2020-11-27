var dagen=["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"]
var text = document.getElementById("text");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text5 = document.getElementById("text5");

for (i = 0; i <= 6; i++) {
	text.innerHTML += dagen[i] + "<br>" ;

}


for (a = 0; a <= 4; a++) {
	text1.innerHTML += dagen[a] + "<br>" ;

}


for (b = 5; b <= 6; b++) {
	text2.innerHTML += dagen[b] + "<br>" ;
	console.log (b);
}

for( c = 7; c-- > 0; ) {
	text3.innerHTML += dagen[c] + "<br>" ;
	
}

for( d = 5; d-- > 0; ) {
	text4.innerHTML += dagen[d] + "<br>" ;
	
}



for( g = 7; g-- > 5; ) {
	text5.innerHTML += dagen[g] + "<br>" ;
	
}





