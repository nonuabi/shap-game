'use strick'
var colorbtn = document.getElementById('btnc');
var circle = document.getElementById('circle');

var count = 1;
function changeColor() {
	if(count == 1) {
		circle.style.backgroundColor = "yellow";
	}else if(count==2) {
		circle.style.backgroundColor = "blue";
	} else if (count == 3) {
		circle.style.backgroundColor = "cyan";
	}else if(count == 4) {
		count =0;
	}
	count++;
}

colorbtn.addEventListener('click', changeColor);


//change shapes
var shape = document.getElementById('shape');
var shapebtn = document.getElementById('btns');

function triangle() {
	
}



shapebtn.addEventListener('click', triangle);
