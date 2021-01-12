'use strict';

const size = 28;

canvas.width = size;
canvas.height = size;

const ctx = canvas.getContext('2d');

const mouse = { x: 0, y: 0 };
let draw = false;

canvas.addEventListener('mousedown', function(e){          
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	draw = true;
	ctx.beginPath();
	ctx.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener('mousemove', function(e){
	const rect = canvas.getBoundingClientRect();
	if(draw){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		ctx.lineTo(mouse.x, mouse.y);
		ctx.stroke();
	}
});

canvas.addEventListener('mouseup', function(e){
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	ctx.lineTo(mouse.x, mouse.y);
	ctx.stroke();
	ctx.closePath();
	draw = false;
});

getB.addEventListener('click', async function (e) {
	const img = ctx.getImageData(0, 0, size, size);

	console.log(img);
	

	const response = await fetch('http://localhost:8000/img', {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(img)
	});

	console.log(await response.json());
});