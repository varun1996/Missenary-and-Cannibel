let boat=document.getElementById("move");
let pos;
let flag=true;
let lflag=[true,true,true,true,true,true];
let can=document.getElementsByClassName("cannibel");
let id;
let inboat=document.getElementById("boat");
let left=document.getElementById("left");
let passenger=document.getElementById("passenger");
let counter=0;
let boatcan=document.querySelectorAll("passenger.cannibel");
function boatForword() {
	if(flag){
	pos=390;
	
	id=setInterval(forword,5);

	}
	else {
	pos=770;
	id=setInterval(backword,5);
	}


	

}

function forword() {
	if(pos==770){
		flag=false;
		clearInterval(id);
	}
	else {
			pos++;
			boat.style.left=pos+'px';
		
	}

}

function backword() {
	if(pos==390){
		flag=true;
		clearInterval(id);
	}
	else {
		pos--;
		boat.style.left=pos +'px';
	}

}

function goToShip() {
	/*let parent=can.parentNode();*/
	if(counter<2) {
	this.style.display="none";
	
	let p=document.createElement("div");
	p.setAttribute('class','cannibel');


	passenger.appendChild(p);
	counter++;
	}
}
function backToLeft() {

	passenger.removeChild(this);
}



inboat.onclick = boatForword; 


for(let i=0;i<can.length;i++)
can[i].onclick = goToShip;

for(let i=0;i<boatcan.length;i++)
	boatcan[i].onclick = backToLeft;
