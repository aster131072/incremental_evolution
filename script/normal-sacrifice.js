function sacrifice(){
	var get_sacrifice = ExpantaNum.pow(ExpantaNum(game.normal.number).add(1).log10().div(3).add(1),game.normal.boost)
	if(ExpantaNum(get_sacrifice).gt(game.normal.sacrifice)&&game.normal.generators.amount[7]!=0){
		var sacrifice_confirmation = confirm("你真的要献祭吗？这会重置你的点数和前7阶生成器！");
		if(sacrifice_confirmation==true){
			game.normal.sacrifice=get_sacrifice;
			document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice);
			for(var i=0;i<7;i++){
				game.normal.generators.amount[i]=0;
			}
			game.normal.number=ExpantaNum(0);
			getAchievement(9);
		}
		sacrifice_confirmation=false;
	}

}