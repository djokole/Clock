const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	if (secondsDegrees >= 444) {
		secondHand.style.transition = 'all 0s';
	} else { secondHand.style.transition = 'all 0.05s';};
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
