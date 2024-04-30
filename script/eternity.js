function eternity(){
	let eternity_confirmation = true;
	if(game.confirmconfig.eternity&&game.eternity.inchallenge.indexOf(1) === -1){
		eternity_confirmation = confirm("你真的要进入永恒吗？这会重置你之前的几乎一切进度！");
	}
	if(eternity_confirmation==true){
		if(ExpantaNum(game.infinity.number).gte(ExpantaNum(game.eternity.requirement))){
			game.eternity.lastnumber = get_eternity;
			game.eternity.number=ExpantaNum(game.eternity.number).add(game.eternity.lastnumber);
			game.eternity.totalnumber=ExpantaNum(game.eternity.totalnumber).add(game.eternity.lastnumber);
			game.eternity.eternities=ExpantaNum(game.eternity.eternities).add(1);
			if(ExpantaNum(game.eternity.timespent).lt(250)&&game.eternity.haseternitied) getAchievement(31);
			if(ExpantaNum(get_eternity).gte(ExpantaNum.pow(2,4096))) getAchievement(32);
			if(ExpantaNum(game.eternity.eternities).eq(1)) getAchievement(25);
			if(ExpantaNum(game.eternity.eternities).eq(10)) document.getElementById("eternity_generator_tab").style.display='inline';
			if(ExpantaNum(game.eternity.eternities).eq(11)) document.getElementById("eternity_upgrade_tab").style.display='inline';
			if(ExpantaNum(game.eternity.eternities).eq(13)) document.getElementById("autoIG").style.display='table-cell';
			if(ExpantaNum(game.eternity.eternities).eq(14)) document.getElementById("auto_eternity").style.display='table-cell';
			if(ExpantaNum(game.eternity.eternities).eq(16)) {
				getAchievement(27);
				document.getElementById("eternity_producer_tab").style.display='inline';
			} 
			if(ExpantaNum(game.eternity.eternities).lte(16)){
				getMilestone(game.eternity.eternities.toNumber());
			} 
		}

		if(game.eternity.milestones[3]==0) document.getElementById("infinity_challenge_tab").style.display='none';
		if(game.eternity.milestones[8]==0) document.getElementById("infinity_generator_tab").style.display='none';
		if(game.eternity.milestones[8]==0) document.getElementById("normal_challenge_tab").style.display='none';
		game.normal.generators.amount=[0,0,0,0,0,0,0,0];
		game.normal.generators.bought=[0,0,0,0,0,0,0,0];
		if(game.eternity.milestones[5]==0) {
			game.normal.number=0;
		}else{
			game.normal.number=10;
		}
		game.normal.sacrifice=1;
		game.normal.boost=1;
		get_sacrifice=1;
		get_boost=1;
		document.getElementById("sacrifice_factor").innerHTML=1;
		document.getElementById("boost_factor").innerHTML=1;
		for(let i=0;i<8;i++) game.eternity.generators.amount[i]=game.eternity.generators.bought[i];
		game.eternity.power=0;

		

		if(game.eternity.milestones[2]==0){
			game.normal.generators.autobuyer=[false,false,false,false,false,false,false,false];
			for(let i=1;i<=8;i++){
				document.getElementById("autobuygenerator"+i).checked=false;
			}
			for(let i=1;i<=game.normal.upgrades.length;i++){
				game.normal.upgrades[i-1]=0;
				document.getElementById("nu"+i).style.backgroundColor="#ff0000";
			}
			
			for(i=1;i<=8;i++){
				document.getElementById("autoNG"+i).style.display='none'
			}
			document.getElementById("max all").type="hidden";
			document.getElementById("sacrifice").style.display='none';
			document.getElementById("boost").style.display='none';
		}

		game.infinity.infinities=0;
		game.infinity.number=0;
		if(game.eternity.inchallenge.indexOf(1)!=-1||game.eternity.milestones[14]==0){
			game.infinity.power=0;
			game.infinity.generators.amount=[0,0,0,0,0,0,0,0];
			game.infinity.generators.bought=[0,0,0,0,0,0,0,0];
		}

		if(game.eternity.milestones[8]==0){
			for(let i=1;i<=game.infinity.upgrades.length;i++){
				game.infinity.upgrades[i-1]=0;
				document.getElementById("iu"+i).style.backgroundColor="#ff0000";
			}
		}
		if(game.eternity.milestones[3]==0){
			for(let i=1;i<=game.normal.challenged.length;i++){
				game.normal.challenged[i-1]=0;
				document.getElementById("nc"+i).style.backgroundColor="#ff0000";
			}
		}
		if(game.eternity.milestones[11]==0){
			for(let i=1;i<=game.infinity.challenged.length;i++){
				game.infinity.challenged[i-1]=0;
				document.getElementById("ic"+i).style.backgroundColor="#ff0000";
			}
		}

		if(game.eternity.milestones[4]==0) {
			game.infinity.ordinal.power=0;
			game.infinity.ordinal.number=0;
			game.infinity.ordinal.upgrade.plus=1;
			game.infinity.ordinal.upgrade.multi=1;
			game.infinity.ordinal.upgrade.power=1;
			game.infinity.ordinal.base=10;
			game.infinity.ordinal.essence=0;
		} 





		let d=new Date();
		game.eternity.starttime=d.getTime();
		game.infinity.starttime=d.getTime();
		if(!game.eternity.haseternitied) document.getElementById("eternity_milestone_tab").style.display='inline';
		game.eternity.haseternitied=true;
		
	}
}