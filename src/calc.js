const display = document.querySelector('input#screen');
let = firstNumber = "";
let = secondNumber = "";
let operationSign = "";
let result = 0;

function clearDisplay() {
	display.value = "";
};

function insert(value) {
	display.value += value
};

function getSign(sign) {
	firstNumber = display.value;
	
	clearDisplay();
	if(!firstNumber) {
		return;
	}
	operationSign = sign;
}

function checkVariables() {
	secondNumber = display.value;
	
	clearDisplay();

	if (!secondNumber) {
		return;
	}
	getResult();

}

const getSum = () => +firstNumber + +secondNumber;
const getSubtraction = () => +firstNumber - +secondNumber;
const getMultiplication = () => +firstNumber * +secondNumber;
const getDevision = () => +firstNumber / +secondNumber;

function getResult () {
	switch (operationSign) {
		case '+':
			result = getSum();
			break;
		case '-':
			result = getSubtraction();
			break;
		case '*':
			result = getMultiplication();
			break;
		case '/':
			result = getDevision();
			break;
		default:
			return;
	}
	display.value = result;
}