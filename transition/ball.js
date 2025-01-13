
const bodyEl = document.querySelector("html");
const ballEl = document.querySelector(".ball");

bodyEl.addEventListener("click", (e) => {
	ballEl.style.transform = 
		`translateX(${e.clientX - 50}px) 
		 translateY(${e.clientY - 50}px)`;
	ballEl.style.margin = "0px";
});
	
