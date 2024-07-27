let de;
let ac;
let dot;
let divide;
let seven;
let eight;
let nine;
let multiply;
let four;
let five;
let six;
let subtract;
let one;
let two;
let three;
let add;
let doubleZero;
let zero;
let equal;
let displayInput;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	ac = document.querySelector(".clear");
	de = document.querySelector(".delete");
	dot = document.querySelector(".dot");
	divide = document.querySelector(".divide");
	seven = document.querySelector(".seven");
	eight = document.querySelector(".eight");
	nine = document.querySelector(".nine");
	multiply = document.querySelector(".multiply");
	four = document.querySelector(".four");
	five = document.querySelector(".five");
	six = document.querySelector(".six");
	subtract = document.querySelector(".subtract");
	one = document.querySelector(".one");
	two = document.querySelector(".two");
	three = document.querySelector(".three");
	add = document.querySelector(".add");
	doubleZero = document.querySelector(".doubleZero");
	zero = document.querySelector(".zero");
	equal = document.querySelector("#equal");
	displayInput = document.querySelector(".display-input");
	display = document.querySelector('input[name="display"]');
};

const prepareDOMEvents = () => {
	ac.addEventListener("click", () => (display.value = ""));
	de.addEventListener("click", function () {
		display.value = display.value.toString().slice(0, -1);
	});
	dot.addEventListener("click", () => appendValue("."));
	divide.addEventListener("click", () => appendValue("/"));
	seven.addEventListener("click", () => appendValue("7"));
	eight.addEventListener("click", () => appendValue("8"));
	nine.addEventListener("click", () => appendValue("9"));
	multiply.addEventListener("click", () => appendValue("*"));
	four.addEventListener("click", () => appendValue("4"));
	five.addEventListener("click", () => appendValue("5"));
	six.addEventListener("click", () => appendValue("6"));
	subtract.addEventListener("click", () => appendValue("-"));
	one.addEventListener("click", () => appendValue("1"));
	two.addEventListener("click", () => appendValue("2"));
	three.addEventListener("click", () => appendValue("3"));
	add.addEventListener("click", () => appendValue("+"));
	doubleZero.addEventListener("click", () => appendValue("00"));
	zero.addEventListener("click", () => appendValue("0"));
	equal.addEventListener("click", function () {
		calculate();
	});
	document.addEventListener("keydown", handleKeyboardInput);
};

const handleKeyboardInput = (event) => {
	const key = event.key;
	if (!isNaN(key) || key === ".") {
		appendValue(key);
	} else if (key === "Backspace") {
		display.value = display.value.toString().slice(0, -1);
	} else if (key === "Enter") {
		event.preventDefault();
		calculate();
	} else if (key === "=") {
		calculate();
	} else if (key === "+" || key === "-" || key === "*" || key === "/") {
		appendValue(key);
	} else if (key === "Escape") {
		display.value = "";
	}
};

const appendValue = (value) => {
	display.value += value;
};
function validateExpression(expression) {
	const regex = /^(\d+(\.\d+)?)([+\-*/]\d+(\.\d+)?)*$/;
	return regex.test(expression);
}

function calculate() {
	const expression = display.value;
	if (validateExpression(expression)) {
		try {
			display.value = eval(expression);
		} catch (e) {
			display.value = "Nieprawidłowe działanie";
		}
	} else {
		display.value = "Nieprawidłowe działanie";
	}
}

// function calculate2() {
//     try {
//         display.value = eval(display.value);
//     } catch (e) {
//         alert('Invalid Expression');
//     }
// }

document.addEventListener("DOMContentLoaded", main);
