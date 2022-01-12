const init = () => {
	const gd = parseLS("gameData");
	if(!gd){
		LSinit("gameData", gamedata);
		const gd = parseLS("gameData");
		bodyBulld(gd);
	}else{
		bodyBulld(gd);
	}
},
bodyBulld = (gd) => {
	const container = createEle("div"),
	      logger = createEle("div"),
	      settings = createEle("div"),
	      level = createEle("div"),
	      money = createEle("div"),
	      playBox = createEle("div"),
	      btnBox = createEle("div"),
	      arena = createEle("div"),
	      mat = createEle("div");

	//
	level.innerHTML = "LEVEL: " + gd.level;
	level.className = "level w3-white w3-center";

	money.innerHTML = "💲" + gd.money;
	money.className = "money w3-white w3-center";

	settings.append(level,money);
	settings.className = "settings w3-contain";

	playBox.innerHTML = "playbox";
	playBox.className = "playBox w3-card-4 w3-container w3-white w3-margin";

	for (var i = 0; i < btns.length; i++) {
		const btnHolder = createEle("p"),
			  addBtnLabel = createEle("div"),
			  addBtnTitle = createEle("span"),
			  addBtnDetails = createEle("div"),
			  addBtn = createEle("button");
		//
		for (var k = 0; k < 3; k++) {
			const detailRow = createEle("div");

			detailRow.innerHTML = goals[btns[i]].details[k];
			detailRow.className = "detailRow w3-container w3-card-2";

			addBtnDetails.append(detailRow);
		}

		addBtnDetails.className = "addBtnDetails w3-contain w3-opacity w3-light-monarch";

		addBtnTitle.innerHTML = btns[i];
		addBtnTitle.className = "addBtnTitle w3-margin"

		addBtnLabel.append(addBtnTitle,addBtnDetails);
		addBtnLabel.className = "addBtnLabel w3-contain";

		addBtn.innerHTML = "+";
		addBtn.className = "addBtn w3-button w3-hover-light-green w3-green";

		btnHolder.append(addBtn,addBtnLabel);
		btnHolder.className = "btnHolder w3-contain w3-card-2";
        
        if(i >= gd.level) {
        	btnHolder.classList.add("w3-hide");
        } 

		btnBox.append(btnHolder);
	}
    // btnBox.innerHTML = "&nbsp;";
	btnBox.className = "btnBox w3-card-4 w3-container w3-white w3-margin";

	arena.append(btnBox,playBox);
	arena.className = "arena w3-contain w3-green w3-margin";

	mat.append(arena);
	mat.className = "mat w3-contain w3-green w3-padding";

	container.append(settings,mat);
	container.className = "container w3-contain w3-green";

	logger.innerHTML = " logger";
	logger.className = "logger w3-black w3-bottom w3-text-white";

	body.append(container,logger);
	body.className = "w3-green";
};
window.onload = () => {
	init();
};