// initalize variable that store the main header
const text = document.getElementById("mainH1");
const strText = text.textContent;

console.log(strText);
// split the header to letters and store as array
const splitText = strText.split("");
// hide original text
text.textContent = "";
//populate back to header as single letters
for (let i = 0; i < splitText.length; i++) {
	text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
	const span = text.querySelectorAll("span")[char];
	span.classList.add("fade");
	span.classList.add("fadeColor");
	char++;
	if (char === splitText.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}
