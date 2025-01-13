


const second = document.querySelector(".second");

second.addEventListener("click", (e) => {
	showing();
});


function showing() {
	document.querySelector(".second div").classList.toggle(
			"show");
}
