function infinity(){
	let infinity_confirmation = true;
	if(game.confirmconfig.infinity&&game.normal.inchallenge.indexOf(1) === -1&&game.infinity.inchallenge.indexOf(1) === -1){
		infinity_confirmation = confirm("你真的要进入无限吗？这会重置你之前的几乎一切进度！");
	}
	if(infinity_confirmation==true){
		if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.infinity.requirement))){
			game.infinity.lastnumber = get_infinity;
			game.infinity.number=ExpantaNum(game.infinity.number).add(game.infinity.lastnumber);
			game.infinity.totalnumber=ExpantaNum(game.infinity.totalnumber).add(game.infinity.lastnumber);
			game.infinity.infinities=ExpantaNum(game.infinity.infinities).add(1);
			getAchievement(11);
			if(ExpantaNum(game.infinity.timespent).lt(250)&&game.infinity.hasinfinitied) getAchievement(21);
		}
		if(game.eternity.inchallenge[0]==1) ec(1);
		
		game.normal.generators.amount=[0,0,0,0,0,0,0,0];
		game.normal.generators.bought=[0,0,0,0,0,0,0,0];
		game.normal.number=0;
		if(game.infinity.upgrades[4]) game.normal.number=10;
		game.normal.sacrifice=1;
		game.normal.boost=1;
		get_sacrifice=1;
		get_boost=1;
		document.getElementById("sacrifice_factor").innerHTML=1;
		document.getElementById("boost_factor").innerHTML=1;
		if(game.eternity.milestones[14]==0) {
			for(let i=0;i<8;i++) game.infinity.generators.amount[i]=game.infinity.generators.bought[i];
		}
		
		game.infinity.power=0;
		if(game.infinity.upgrades[5]==0&&game.eternity.milestones[2]==0) {
			game.normal.upgrades=[0,0,0,0,0,0,0,0,0,0,0];
			game.normal.generators.autobuyer=[false,false,false,false,false,false,false,false];
			for(let i=1;i<=8;i++){
				document.getElementById("autobuygenerator"+i).checked=false;
			}
			for(let i=1;i<=game.normal.upgrades.length;i++){
				if(game.normal.upgrades[i-1]==0){
					document.getElementById("nu"+i).style.backgroundColor="#ff0000";
				}
			}
			for(i=1;i<=8;i++){
				document.getElementById("autoNG"+i).style.display='none'
			}
			document.getElementById("max all").type="hidden";
			document.getElementById("sacrifice").style.display='none';
			document.getElementById("boost").style.display='none';
		} 
		




		let d=new Date();
		game.infinity.starttime=d.getTime();
		if(!game.infinity.hasinfinitied) document.getElementById("infinity_upgrade_tab").style.display='inline';
		game.infinity.hasinfinitied=true;
		
	}
}