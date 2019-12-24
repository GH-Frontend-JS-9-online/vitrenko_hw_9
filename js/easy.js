function start() {
	window.food = document.getElementById('food');
	window.clean = document.getElementById('clean');
	window.happiness = document.getElementById('happiness');
	window.health = document.getElementById('health');
	window.socialization = document.getElementById('socialization');
	window.money = document.getElementById('money');

	food.addEventListener('click', food_checker);
	clean.addEventListener('click', clean_checker);
	happiness.addEventListener('click', happiness_checker);

	food.setAttribute('value', Math.random()*100);
	clean.setAttribute('value', Math.random()*100);
	happiness.setAttribute('value', Math.random()*100);
	health.setAttribute('value', Math.random()*100);
	socialization.setAttribute('value', Math.random()*100);
	money.setAttribute('value', Math.random()*100);

	setInterval(() => food.value -= 3, 5000);
	setInterval(() => clean.value -= 3, 5000);
	setInterval(() => happiness.value -= 3, 5000);
	setInterval(() => health.value -= 3, 5000);
	setInterval(() => socialization.value -= 3, 5000);
	setInterval(() => money.value -= 3, 5000);
}

function food_checker() {
	if (food.value === 0) {
		alert(`Game over`);
		break
	}
}

function clean_checker() {
	if (clean.value === 0) {
		alert(`Game over`);
		break
	}
}

function happiness_checker() {
	if (happiness.value === 0) {
		alert(`Game over`);
		break
	}
}

function eat() {
	food.value += 30;
	clean.value -= 20;
}

function wash() {
	clean.value += 40;
	happiness.value -= 20;
}

function play() {
	happiness.value += 15;
	food.value -= 10;
}

function doctor() {
	health.value += 30;
	money.value -= 20;
}

function bar() {
	socialization.value += 40;
	food.value += 10;
	health.value -= 10;
	money.value -= 20;
}

function work() {
	money.value += 50;
	food.value -= 10;
	health.value -= 10;
	socialization.value -= 20;
}

function food1() {
	food.value += 20;
	money.value -= 20;
}

function business() {
	money.value += 100;
	happiness.value += 100;
	health.value -= 100;
	socialization.value += 20;
}