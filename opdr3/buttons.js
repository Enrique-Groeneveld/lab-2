var a1=[2,4,6,8]

var text = document.getElementById("text");


optellen() 
optellen1() 
optellen2() 
optellen3() 




function optellen(){
for (i = 1; i <= 10; i++) {
	var antwoord = a1[0] * i
	text.innerHTML +=i + " x " + a1[0] + " = " + antwoord + "<br>"  ;
}
}

function optellen1(){
for (i = 1; i <= 10; i++) {
	var antwoord = a1[1] * i
	text1.innerHTML += i+ " x " + a1[1] + " = " + antwoord + "<br>"  ;
}
}

function optellen2(){
for (i = 1; i <= 10; i++) {
	var antwoord = a1[2] * i
	text2.innerHTML += i+ " x " + a1[2] + " = " + antwoord + "<br>"  ;
}
}

function optellen3(){
for (i = 1; i <= 10; i++) {
	var antwoord = a1[3] * i
	text3.innerHTML += i+ " x " + a1[3] + " = " + antwoord + "<br>"  ;
}
}


