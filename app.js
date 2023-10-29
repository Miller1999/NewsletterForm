const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const main = document.getElementById("form");
const message = document.getElementById("message");
const formMessage = document.querySelector("span");
const email = document.getElementById("mail");
const image = document.getElementById("image");

const buttonsList = Array.from(buttons);

const breakpoint = 430;

function changeSize() {
	if (window.innerWidth <= breakpoint) {
		image.src = "./assets/images/illustration-sign-up-mobile.svg";
	}
}

buttonsList.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
	});
});

buttonsList[1].addEventListener("click", () => {
	window.location.reload();
});

input.addEventListener("blur", (e) => {
	const mail = e.target.value;
	if (e.target.validity.valid === false) {
		form.classList.add("form--input-error");
		formMessage.classList.add("form--message-error");
	} else {
		form.classList.remove("form--input-error");
		formMessage.classList.remove("form--message-error");
		buttonsList[0].addEventListener("click", () => {
			main.classList.add("hidden");
			message.classList.remove("hidden");
		});
	}
	email.innerText = mail;
});

window.onresize = changeSize();
