


const second = document.querySelector(".second");

second.addEventListener("click", (e) => {
	showing();
});


function showing() {
	document.querySelector(".second div").classList.toggle(
			"show");
}





const third = document.querySelector(".third");

third.addEventListener("click", (e) => {
	const point = 
		`translateX(${e.clientY - 25}px translau${e.clientX - 25}px)`
	console.log(e.clientX + "\n" + e.screenX + "\n\n");
	console.log(e.clientY + "\n" + e.screenY + "\n\n");
	console.log(e);
	document.querySelector(".ball").style.transform = 
		`translateX(${e.pageX - 25}px`;
	document.querySelector(".ball").style.transform+= 
		`translateY(${e.pageY - 25}px`;
});
