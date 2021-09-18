const init = () => {
	var gD = parseLS("game_data");

	if(!gD || gD === null) {
		LSinit("game_data",gameData);

		gD = parseLS("game_data");
		bodyBulld(gD);
	} else {
		bodyBulld(gD);
	}
},
bodyBulld = (gD) => {
	const container = createEle("div");

	//
	for (var i = 0; i < btn_names.length; i++) {
		const btns = createEle("button");

		btns.innerHTML = btn_names[i];
		container.append(btns);
	}
	container.className = "container";

	body.append(container);
};
window.onload = () => {
	init();
};