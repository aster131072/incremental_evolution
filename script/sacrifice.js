function sacrifice(){
	if(ExpantaNum.pow(ExpantaNum(game.normal.number).add(1).log10().div(3).add(1),game.normal.boost).gt(ExpantaNum(game.normal.sacrifice))){
		var sacrifice_confirmation = confirm("你真的要献祭吗？这会重置你的点数和生成器！");
		if(sacrifice_confirmation==true){
			game.normal.sacrifice=ExpantaNum.pow(ExpantaNum(game.normal.number).add(1).log10().div(3).add(1),game.normal.boost);
			document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice);
			game.normal.generators.amount=[0,0,0,0,0,0,0,0];
			game.normal.generators.bought=[0,0,0,0,0,0,0,0];
			game.normal.number=ExpantaNum(0);
		}
		sacrifice_confirmation=false;
	}

}