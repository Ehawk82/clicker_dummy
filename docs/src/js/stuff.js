var btn_names = ["tier 1","tier 2","tier 3","tier 4","tier 5","tier 6","tier 7"];

var gameData = {
	0: {amount: 0,cost: 1},
	1: {amount: 0,cost: 2},
	2: {amount: 0,cost: 5},
	3: {amount: 0,cost: 10},
	4: {amount: 0,cost: 25},
	5: {amount: 0,cost: 50},
	6: {amount: 0,cost: 100},
	income: 0,
	expenses: 0,
	bank: 1,
	level: 0,
	bonuses: {
		0: {name:"",cost: 10,effect: 0},
		1: {name:"",cost: 20,effect: 0},
		2: {name:"",cost: 30,effect: 0},
		3: {name:"",cost: 40,effect: 0},
		4: {name:"",cost: 50,effect: 0},
		5: {name:"",cost: 60,effect: 0},
		6: {name:"",cost: 70,effect: 0},
	},
	research: {
		0: {name:"1",cost: 100,effect: 0},
		1: {name:"2",cost: 1000,effect: 0},
		2: {name:"3",cost: 10000,effect: 0},
		3: {name:"4",cost: 100000,effect: 0},
		4: {name:"5",cost: 1000000,effect: 0},
		5: {name:"6",cost: 10000000,effect: 0},
		6: {name:"7",cost: 100000000,effect: 0},
	}
};