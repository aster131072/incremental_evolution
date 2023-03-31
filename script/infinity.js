function infinity(){
	var infinity_confirmation = confirm("你真的要进入无限吗？这会重置你之前的几乎一切进度！");
	if(infinity_confirmation==true){
		game.infinity.number=ExpantaNum(game.infinity.number).add(ExpantaNum.pow(game.normal.number,1/256).times(0.5).round());
		game.infinity.totalnumber=ExpantaNum(game.infinity.totalnumber).add(ExpantaNum.pow(game.normal.number,1/256).times(0.5).round());
		game.infinity.infinities=ExpantaNum(game.infinity.infinities).add(1);
		game.normal.generators.amount=[0,0,0,0,0,0,0,0];
		game.normal.generators.bought=[0,0,0,0,0,0,0,0];
		game.normal.number=ExpantaNum(0);
		game.normal.sacrifice=1;
		game.normal.boost=1;
		game.normal.upgrades=[0,0,0,0,0,0,0,0,0,0,0];
		for(var i=1;i<=game.normal.upgrades.length;i++){
			if(game.normal.upgrades[i-1]==0){
				document.getElementById("nu"+i).style.backgroundColor="#ff0000";
			}
		}
		if(game.normal.upgrades[2]==0) document.getElementById("max all").type="hidden";
		if(game.normal.upgrades[2]==1) document.getElementById("max all").type="button";
		if(game.normal.upgrades[9]==0) document.getElementById("sacrifice").style.display='none';
		if(game.normal.upgrades[9]==1) document.getElementById("sacrifice").style.display='block';
		if(game.normal.upgrades[10]==0) document.getElementById("boost").style.display='none';
		if(game.normal.upgrades[10]==1) document.getElementById("boost").style.display='block';
		var d=new Date();
		game.infinity.starttime=d.getTime();
		game.infinity.hasinfinitied=true;
	}
	infinity_confirmation==false;
}