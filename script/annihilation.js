function annihilation(){
	let annihilation_confirmation = true;
	if(game.confirmconfig.annihilation){
		annihilation_confirmation = confirm("你真的要湮灭吗？这会重置你之前的几乎一切进度！");
	}
	if(annihilation_confirmation==true){
		if(ExpantaNum(game.eternity.number).gte(ExpantaNum(game.annihilation.requirement))){
			game.annihilation.lastnumber = get_annihilation;
			game.annihilation.number=ExpantaNum(game.annihilation.number).add(game.annihilation.lastnumber);
			game.annihilation.totalnumber=ExpantaNum(game.annihilation.totalnumber).add(game.annihilation.lastnumber);
			game.annihilation.annihilations=ExpantaNum(game.annihilation.annihilations).add(1);
			if(ExpantaNum(game.annihilation.annihilations).eq(1)) getAchievement(35);
		}

		document.getElementById("infinity_challenge_tab").style.display='none';
		document.getElementById("infinity_generator_tab").style.display='none';
		document.getElementById("normal_challenge_tab").style.display='none';
		document.getElementById("ordinal_tab").style.display='none';
		document.getElementById("eternity_generator_tab").style.display='none';
		document.getElementById("eternity_upgrade_tab").style.display='none';
		document.getElementById("eternity_producer_tab").style.display='none';
		document.getElementById("eternity_challenge_tab").style.display='none';
		document.getElementById("eternity_timespace_tab").style.display='none';
		document.getElementById("universe").style.display='none';
		game.normal.generators.amount=[0,0,0,0,0,0,0,0];
		game.normal.generators.bought=[0,0,0,0,0,0,0,0];
		game.normal.number=0;
		game.normal.sacrifice=1;
		game.normal.boost=1;
		get_sacrifice=1;
		get_boost=1;
		document.getElementById("sacrifice_factor").innerHTML=1;
		document.getElementById("boost_factor").innerHTML=1;
		for(let i=0;i<8;i++) game.annihilation.generators.amount[i]=game.annihilation.generators.bought[i];
		game.annihilation.power=0;

		


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


		game.infinity.infinities=0;
		game.infinity.number=0;
		game.infinity.power=0;
		game.infinity.generators.amount=[0,0,0,0,0,0,0,0];
		game.infinity.generators.bought=[0,0,0,0,0,0,0,0];
		game.eternity.eternities=0;
		game.eternity.number=0;
		game.eternity.power=0;
		game.eternity.generators.amount=[0,0,0,0,0,0,0,0];
		game.eternity.generators.bought=[0,0,0,0,0,0,0,0];
		game.eternity.producers.amount=[0,0,1,0,0,0,0,0];
		game.eternity.producers.bought=[0,0,1,0,0,0,0,0];
		game.eternity.timespace.time=0;
		game.eternity.timespace.space=0;
		game.eternity.timespace.timespace=0;
		game.eternity.timespace.universe=0;
		game.eternity.timespace.buyables=[0,0,0,0];
		

		for(let i=1;i<=game.infinity.upgrades.length;i++){
			game.infinity.upgrades[i-1]=0;
			document.getElementById("iu"+i).style.backgroundColor="#ff0000";
		}
		for(let i=1;i<=game.eternity.upgrades.length;i++){
			game.eternity.upgrades[i-1]=0;
			document.getElementById("eu"+i).style.backgroundColor="#ff0000";
		}
		for(let i=1;i<=game.eternity.milestones.length;i++){
			game.eternity.milestones[i-1]=0;
			document.getElementById("eternity_milestone_"+i).style.backgroundColor="#ff0000";
		}
		for(let i=1;i<=game.eternity.timespace.upgrades.length;i++){
			game.eternity.timespace.upgrades[i-1]=0;
			if(i<4){
				document.getElementById("tstu"+i).style.backgroundColor="#ff0000";
			}else if(i<7){
				document.getElementById("tssu"+(i-3)).style.backgroundColor="#ff0000";
			} else if(i<10){
				document.getElementById("tstsu"+(i-6)).style.backgroundColor="#ff0000";
			}else{
				document.getElementById("tsuu"+(i-9)).style.backgroundColor="#ff0000";
			}
		}

		for(let i=1;i<=game.normal.challenged.length;i++){
			game.normal.challenged[i-1]=0;
			document.getElementById("nc"+i).style.backgroundColor="#ff0000";
		}
		for(let i=1;i<=game.infinity.challenged.length;i++){
			game.infinity.challenged[i-1]=0;
			document.getElementById("ic"+i).style.backgroundColor="#ff0000";
		}
		for(let i=1;i<=game.eternity.challenged.length;i++){
			game.eternity.challenged[i-1]=0;
			document.getElementById("ec"+i).style.backgroundColor="#ff0000";
		}


		game.infinity.ordinal.power=0;
		game.infinity.ordinal.number=0;
		game.infinity.ordinal.upgrade.plus=1;
		game.infinity.ordinal.upgrade.multi=1;
		game.infinity.ordinal.upgrade.power=1;
		game.infinity.ordinal.base=10;
		game.infinity.ordinal.essence=0;






		let d=new Date();
		game.annihilation.starttime=d.getTime();
		game.eternity.starttime=d.getTime();
		game.infinity.starttime=d.getTime();
		//if(!game.annihilation.hasannihilated) document.getElementById("eternity_milestone_tab").style.display='inline';
		game.annihilation.hasannihilated=true;
		
	}
}