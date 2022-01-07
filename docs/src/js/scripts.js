const init = () => {
	bodyBulld();
},
bodyBulld = () => {
	const container = createEle("div"),
	      logger = createEle("div"),
	      settings = createEle("div"),
	      eggsCell = createEle("span"),
	      mat = createEle("div");

	//
	eggsCell.innerHTML = "EGGS: ";
	eggsCell.className = "eggsCell w3-white w3-card-2 w3-padding";

	settings.append(eggsCell);
	settings.className = "settings w3-container w3-grey w3-card-2 w3-padding";

	mat.innerHTML = "no light";
	mat.className = "mat w3-contain w3-white w3-padding w3-card-2";

	container.append(settings,mat);
	container.className = "container w3-container w3-white w3-padding";

	logger.innerHTML = " logger";
	logger.className = "logger w3-white w3-bottom w3-text-grey";

	body.append(container,logger);
	body.className = "w3-container";
};
window.onload = () => {
	init();
};