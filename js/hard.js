function start() {
	window.food = document.getElementById('food');
	window.clean = document.getElementById('clean');
	window.happiness = document.getElementById('happiness');
	window.health = document.getElementById('health');
	window.socialization = document.getElementById('socialization');
	window.money = document.getElementById('money');

	food.value = Math.round(Math.random() * 100);
	clean.value = Math.round(Math.random() * 100);
	happiness.value = Math.round(Math.random() * 100);
	health.value = Math.round(Math.random() * 100);
	socialization.value = Math.round(Math.random() * 100);
	money.value = Math.round(Math.random() * 100);

	setTimeout(() => food.value -=7, 7000);
	setTimeout(() => clean.value -=7, 7000);
	setTimeout(() => happiness.value -=7, 7000);
	setTimeout(() => health.value -=7, 7000);
	setTimeout(() => socialization.value -=7, 7000);
	setTimeout(() => money.value -=7, 7000);
}

function eat() {
	food.value = +food.value + 30;
	clean.value = +clean.value - 20;
}

function wash() {
	clean.value = +clean.value + 40;
	happiness.value = +happiness.value - 20;
}

function play() {
	happiness.value = +happiness.value + 15;
	food.value = +food.value- 10;
}

function doctor() {
	health.value = +health.value + 30;
	money.value = +money.value - 20;
}

function bar() {
	socialization.value = +socialization.value + 40;
	food.value = +food.value + 10;
	health.value = +health.value - 10;
	money.value = +money.value - 20;
}

function work() {
	money.value = +money.value + 50;
	food.value = +food.value - 10;
	health.value = +health.value - 10;
	socialization.value = +socialization.value - 20;
}

function food1() {
	food.value = +food.value + 20;
	money.value = +money.value - 20;
}

function business() {
	money.value = +money.value + 100;
	happiness.value = +happiness.value + 100;
	health.value = +health.value - 100;
	socialization.value = +socialization.value + 20;
}