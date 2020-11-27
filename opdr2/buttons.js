var a1=[1,2,3,4,5,6,7,8,9,10]
var a2=[2,4,6,8,10,12,14,16,18,20]
var text = document.getElementById("text");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");


optellen() 
aftrekken()
vermenigvuldige()
delen()



function optellen(){
for (i = 0; i <= 9; i++) {
	var antwoord = a1[i] + a2[i]
	text.innerHTML += a1[i] + " + " + a2[i] + " = " + antwoord + "<br>"  ;
}
}


function aftrekken(){
for (i = 0; i <= 9; i++) {
	var antwoord = a2[i] - a1[i]
	text1.innerHTML += a2[i] + " - " + a1[i] + " = " + antwoord + "<br>"  ;
}
}




function vermenigvuldige(){
for (i = 0; i <= 9; i++) {
	var antwoord = a1[i] * a2[i]
	text2.innerHTML += a1[i] + " * " + a2[i] + " = " + antwoord + "<br>"  ;
}
}


function delen(){
for (i = 0; i <= 9; i++) {
	var antwoord = a2[i] / a1[i]
	text3.innerHTML += a2[i] + " / " + a1[i] + " = " + antwoord + "<br>"  ;
}
}



