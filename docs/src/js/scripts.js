const init = () => {
	const gd = parseLS("gameData");
	if(!gd || gd == null){
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
			const detailRow = createEle("div"),
			      paraContent = createEle("span"),
			      dataDesc = createEle("div");
			      dataContent = createEle("span"),
			      parentGoal = gd.gls[btns[i]];
			//

			dataDesc.innerHTML = parentGoal.details[k].desc;
			dataDesc.className = "dataDesc w3-monarch w3-center w3-hide";

			paraContent.innerHTML = parentGoal.details[k].content;
			paraContent.className = "paraContent w3-left";

			dataContent.innerHTML = parentGoal.details[k].data;
			dataContent.id = "dataContent_" + i + "_" + k;

			detailRow.append(paraContent,dataContent,dataDesc);
			detailRow.className = "detailRow w3-container w3-card-2";
			detailRow.onmouseover = showDescription(paraContent,dataContent,dataDesc,parentGoal,detailRow);
			detailRow.onmouseout = hideDescription(paraContent,dataContent,dataDesc,parentGoal,detailRow);
			addBtnDetails.append(detailRow);
		}

		addBtnDetails.className = "addBtnDetails w3-contain w3-opacity w3-light-monarch";

		addBtnTitle.innerHTML = btns[i];
		addBtnTitle.className = "addBtnTitle w3-margin"

		addBtnLabel.append(addBtnTitle,addBtnDetails);
		addBtnLabel.className = "addBtnLabel w3-contain";

		addBtn.innerHTML = "+";
		addBtn.onclick = addUnit(gd,this,i);
		addBtn.className = "addBtn w3-button w3-hover-light-green w3-green";
		if (gd.gls[btns[i]].details[0].data < gd.money) {
			addBtn.disabled = false;
		} else {
			addBtn.disabled = true;
		}

		btnHolder.append(addBtn,addBtnLabel);
		btnHolder.className = "btnHolder w3-contain w3-card-2";
        
        if(i >= gd.level) {
        	btnHolder.classList.add("w3-hide");
        } 

		btnBox.append(btnHolder);
	}

	btnBox.className = "btnBox w3-card-4 w3-container w3-white w3-margin";

	arena.append(btnBox,playBox);
	arena.className = "arena w3-contain w3-grey w3-margin";

	mat.append(arena);
	mat.className = "mat w3-contain w3-grey w3-padding";

	container.append(settings,mat);
	container.className = "container w3-contain w3-grey";

	logger.innerHTML = " logger";
	logger.className = "logger w3-black w3-bottom w3-text-white";

	body.append(container,logger);
	body.className = "w3-green";

	//fireTicker(gd);
},
disableFunc = (gd,i) => {

},
fireTicker = (gd) => {
	var timer = (gd)=> {
		setTimeout(()=>{
			var money = bySel(".money"),
			    myBtn = bySelAll(".addBtn");

			for (var t = 0; t < btns.length; t++) {
				gd.money = gd.money + gd.gls[btns[t]].details[2].data;
				if(gd.gls[btns[t]].details[0].data < gd.money){
					myBtn[t].disabled = false;
				} else {
					myBtn[t].disabled = true;
				}
			}
			
			saveLS("gameData",gd)
			//console.log(money);
			money.innerHTML = "💲" + gd.money;



			timer(gd);
		},5000);
	}
	timer(gd);
},
addUnit = (gd,t,i) => {
	return () => {
		var parentUnit = gd.gls[t.btns[i]].details,
		    myAmount = parentUnit[0].data,
		    myBtn = bySelAll(".addBtn");

		//
		if(myAmount < gd.money){
			gd.money = gd.money - gd.gls[t.btns[i]].details[0].data;
            gd.gls[t.btns[i]].details[0].data = gd.gls[t.btns[i]].details[0].data + gd.gls[t.btns[i]].details[2].data; 
			gd.gls[t.btns[i]].details[1].data = gd.gls[t.btns[i]].details[1].data + 1;
			gd.gls[t.btns[i]].details[2].data = gd.gls[t.btns[i]].details[2].data + gd.gls[t.btns[i]].details[1].data;
	        
	        var dataContentById = bySel("#dataContent_" + i + "_" + 1),
	            dataCostById = bySel("#dataContent_" + i + "_" + 0),
	            dataProdById = bySel("#dataContent_" + i + "_" + 2),
	            money = bySel(".money");
	        
			saveLS("gameData",gd);

			money.innerHTML = "💲" + gd.money;
			dataCostById.innerHTML = gd.gls[t.btns[i]].details[0].data;
			dataContentById.innerHTML = gd.gls[t.btns[i]].details[1].data;
			dataProdById.innerHTML = gd.gls[t.btns[i]].details[2].data;
		}
		if(myAmount > gd.money){
			myBtn[i].disabled = true;
		}
	}
},
hideDescription = (paraContent,dataContent,dataDesc,parentGoal,detailRow) => {
	return () => {
		detailRow.classList.remove("w3-contain");
		detailRow.classList.add("w3-container");
		paraContent.classList.remove("w3-hide");
		dataContent.classList.remove("w3-hide");
		dataDesc.classList.add("w3-hide");
	}
};
showDescription = (paraContent,dataContent,dataDesc,parentGoal,detailRow) => {
	return () => {
		detailRow.classList.remove("w3-container");
		detailRow.classList.add("w3-contain");
		paraContent.classList.add("w3-hide");
		dataContent.classList.add("w3-hide");
		dataDesc.classList.remove("w3-hide");
	}
};
window.onload = () => {
	init();
};