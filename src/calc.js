let keys = document.querySelectorAll('#calculator span');
let operators = ['+', '-', 'x', '÷'];


for(let i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {

		let input = document.querySelector('.screen');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;
		
		if(btnVal == 'C') {
			input.innerHTML = '';
		}
		
		else if(btnVal == '=') {
			let equation = inputVal;
			let lastChar = equation[equation.length - 1];
			
		}
		
		else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
						}
		}
		
}