function boost(){
	if(ExpantaNum(game.normal.number).add(1).log10().times(0.022).add(1).gt(ExpantaNum(game.normal.boost))){
		var boost_confirmation = confirm("你真的要加速吗？这会重置你的点数和前7阶生成器，且效果在下次献祭时才会生效！");
		if(boost_confirmation==true){
			game.normal.boost=ExpantaNum(game.normal.number).add(1).log10().times(0.022).add(1);
			document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost);
			for(var i=0;i<7;i++){
				game.normal.generators.amount[i]=0;
			}
			game.normal.number=ExpantaNum(0);
		}
		boost_confirmation=false;
	}

}