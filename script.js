const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	if (secondsDegrees == 90) {
		secondHand.style.transition = 'all 0s';
	} else { secondHand.style.transition = 'all 0.05s';};
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	if (minutesDegrees == 90) {
		minHand.style.transition = 'all 0s';
	} else { minHand.style.transition = 'all 0.05s';};
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	if (hoursDegrees == 90) {
		hourHand.style.transition = 'all 0s';
	} else { hourHand.style.transition = 'all 0.05s';};
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
