game = {
	"ach": [0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0],
	"normal":{
		"number":0,
		"upgrades":[0,0,0,0,0,0,0,0,0,0,0],
		"speed":1,
		"multiplier":2,
		"generators":{
			"amount":[0,0,0,0,0,0,0,0],
			"bought":[0,0,0,0,0,0,0,0],
			"price":[10,100,1e4,1e6,1e9,1e13,1e18,1e24],
			"scale":[1e3,1e4,1e5,1e6,1e8,1e10,1e12,1e15],
			"actuallprice":[0,0,0,0,0,0,0,0],
			"factor":[1,1,1,1,1,1,1,1],
			"autobuyer":[false,false,false,false,false,false,false,false],
			"bulkbuy":[false,false,false,false,false,false,false,false],
			"autodelay":[0,0,0,0,0,0,0,0]
		},
		"sacrifice":1,
		"boost":1
	},
	"infinity":{
		"starttime":0,
		"timespent":0,
		"requirement":1e77,
		"number":0,
		"totalnumber":0,
		"infinities":0,
		"lastnumber":0,
		"hasinfinitied":false
	},
	"time": 0,
	"starttime":0,
	"delay": 50
};
game.infinity.requirement=ExpantaNum.pow(2,256);
originalgame = game;