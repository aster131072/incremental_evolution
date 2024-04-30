

function save(){
	let d=new Date();
	game.time=d.getTime();
	if(game.infinity.ordinal.power=="过大") game.infinity.ordinal.power=1e300;
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	
}
function load(){
	if(JSON.parse(localStorage.getItem("incrementalEvolution"))==null) {
			game = originalgame;
			let d=new Date();
			game.starttime=d.getTime();
		}
	else{
		game = JSON.parse(localStorage.getItem("incrementalEvolution"));
	}
	if(game.infinity.ordinal.power==1e300) game.infinity.ordinal.power="过大";
	//杂项显示
	document.getElementById("delay").value=Math.log10(game.delay);
	document.getElementById("delaytext").innerHTML=game.delay;
	document.getElementById("precision").value=game.precision;
	if(game.confirmconfig.sacrifice){
		document.getElementById("sacrifice_confirm").checked=true;
	} else{
		document.getElementById("sacrifice_confirm").checked=false;
	}
	if(game.confirmconfig.boost){
		document.getElementById("boost_confirm").checked=true;
	} else{
		document.getElementById("boost_confirm").checked=false;
	}
	if(game.confirmconfig.infinity){
		document.getElementById("infinity_confirm").checked=true;
	} else{
		document.getElementById("infinity_confirm").checked=false;
	}
	if(game.confirmconfig.eternity){
		document.getElementById("eternity_confirm").checked=true;
	} else{
		document.getElementById("eternity_confirm").checked=false;
	}
	//自动购买显示
	for(let i=1;i<=8;i++){
		if(game.normal.generators.autobuyer[i-1]){
			document.getElementById("autobuygenerator"+i).checked=true;
		}
		if(game.normal.generators.bulkbuy[i-1]){
			document.getElementById("bulkgenerator"+i).checked=true;
		}
		document.getElementById("generatordelay"+i).value=game.normal.generators.autodelay[i-1];	
	}
	if(game.automator.sacrifice.checked) document.getElementById("auto_sacrifice_checkbox").checked=true;
	document.getElementById("auto_sacrifice_mode").value = game.automator.sacrifice.mode;
	document.getElementById("auto_sacrifice_parameter").value = game.automator.sacrifice.parameter;
	if(game.automator.boost.checked) document.getElementById("auto_boost_checkbox").checked=true;
	document.getElementById("auto_boost_mode").value = game.automator.boost.mode;
	document.getElementById("auto_boost_parameter").value = game.automator.boost.parameter;
	if(game.automator.infinity.checked) document.getElementById("auto_infinity_checkbox").checked=true;
	document.getElementById("auto_infinity_mode").value = game.automator.infinity.mode;
	document.getElementById("auto_infinity_parameter").value = game.automator.infinity.parameter;
	if(game.automator.eternity.checked) document.getElementById("auto_eternity_checkbox").checked=true;
	document.getElementById("auto_eternity_mode").value = game.automator.eternity.mode;
	document.getElementById("auto_eternity_parameter").value = game.automator.eternity.parameter;
	if(game.infinity.generators.autobuyer) document.getElementById("autobuyinfinitygenerator").checked=true;
	//生成器显示
	document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice);
	document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost);
	for(let i=1;i<9;i++){
		document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.price[i-1]);

	}
	document.getElementById("infinity requirement").innerHTML=game.infinity.requirement;
	//升级显示
	for(let i=1;i<=game.normal.upgrades.length;i++){
		if(game.normal.upgrades[i-1]==1){
		document.getElementById("nu"+i).style.backgroundColor="#00ff00";
		//document.getElementById("nu"+i+"b").value="宸茶喘涔?";
		}
	}
	for(let i=1;i<=game.infinity.upgrades.length;i++){
		if(game.infinity.upgrades[i-1]==1&&i<=9){
			document.getElementById("iu"+i).style.backgroundColor="#00ff00";
		}else if(i>=10){
			let red = 51*(5-game.infinity.upgrades[i-1]);
			let green = 51*game.infinity.upgrades[i-1];
			document.getElementById("iu"+i).style.backgroundColor="rgb(" + red + "," + green + ",0)";
			if(game.infinity.upgrades[10]<5){
				let cost = Math.pow(10,3*game.infinity.upgrades[i-1]+1);
				document.getElementById("iu"+i+"b").value=cost+"无限点数";
			}else{
				document.getElementById("iu"+i+"b").value="已达最大";
			}
		}
	}
	for(let i=1;i<=game.eternity.upgrades.length;i++){
		if(game.eternity.upgrades[i-1]==1){
		document.getElementById("eu"+i).style.backgroundColor="#00ff00";
		}
	}
	for(let i=1;i<=game.eternity.timespace.upgrades.length;i++){
		if(i<4){
			if(game.eternity.timespace.upgrades[i-1]==1){
			document.getElementById("tstu"+i).style.backgroundColor="#00ff00";
			}
		}else if(i<7){
			if(game.eternity.timespace.upgrades[i-1]==1){
			document.getElementById("tssu"+(i-3)).style.backgroundColor="#00ff00";
			}
		} else if(i<10){
			if(game.eternity.timespace.upgrades[i-1]==1){
			document.getElementById("tstsu"+(i-6)).style.backgroundColor="#00ff00";
			}
		}else if(i<12){
			if(game.eternity.timespace.upgrades[i-1]==1){
			document.getElementById("tsuu"+(i-9)).style.backgroundColor="#00ff00";
			}
		} else{
			if(game.eternity.timespace.upgrades[11]>=1){
				document.getElementById("tsuu3").style.backgroundColor="rgb(" + (12-game.eternity.timespace.upgrades[11])*255/12 + "," +game.eternity.timespace.upgrades[11]*255/12 + ",0)";
			}
		}
	}
	//里程碑显示
	for(let i=1;i<=game.eternity.milestones.length;i++){
		if(game.eternity.milestones[i-1]==1){
			document.getElementById("eternity_milestone_"+i).style.backgroundColor="#00ff00";
		}
	}
	//挑战显示
	for(let i=1;i<=12;i++){
		if(game.normal.challenged[i-1]==1){
			document.getElementById("nc"+i).style.backgroundColor="#00ff00";
		}
		if(game.normal.inchallenge[i-1]==1){
			document.getElementById("nc"+i+"b").value="退出挑战";
		}
	}
	for(let i=1;i<=8;i++){
		if(game.infinity.challenged[i-1]==1){
			document.getElementById("ic"+i).style.backgroundColor="#00ff00";
		}
		if(game.infinity.inchallenge[i-1]==1){
			document.getElementById("ic"+i+"b").value="退出挑战";
		}
	}
	for(let i=1;i<=8;i++){
		if(game.eternity.challenged[i-1]>=1){
			document.getElementById("ec"+i).style.backgroundColor="rgb(" + (4-game.eternity.challenged[i-1])*255/4 + "," + game.eternity.challenged[i-1]*255/4 + ",0)";
		}
		if(game.eternity.inchallenge[i-1]==1){
			document.getElementById("ec"+i+"b").value="退出挑战";
		}
	}
	//tab显示
	if(game.normal.upgrades[2]==0) document.getElementById("max all").type="hidden";
	if(game.normal.upgrades[2]==1) document.getElementById("max all").type="button";
	if(game.normal.upgrades[8]==1){
		for(i=1;i<=8;i++){
			document.getElementById("autoNG"+i).style.display='table-cell';
		}
	} 
	if(game.normal.challenged[8]==1) document.getElementById("auto_sacrifice").style.display='table-cell';
	if(game.normal.challenged[9]==1) document.getElementById("auto_boost").style.display='table-cell';
	if(game.normal.challenged[10]==1) document.getElementById("auto_infinity").style.display='table-cell';
	if(game.eternity.milestones[9]==1) document.getElementById("eternity_generator_tab").style.display='inline';
	if(game.eternity.milestones[10]==1) document.getElementById("eternity_upgrade_tab").style.display='inline';
	if(game.eternity.milestones[12]==1) document.getElementById("autoIG").style.display='table-cell';
	if(game.eternity.milestones[13]==1) document.getElementById("auto_eternity").style.display='table-cell';
	if(game.eternity.milestones[15]==1) document.getElementById("eternity_producer_tab").style.display='inline';
	if(game.infinity.hasinfinitied){
		document.getElementById("infinity_upgrade_tab").style.display='inline';
	}else{
		document.getElementById("infinity_upgrade_tab").style.display='none';
	}
	if(game.eternity.haseternitied){
		document.getElementById("eternity_milestone_tab").style.display='inline';
	}
	if(game.normal.upgrades[9]==0) document.getElementById("sacrifice").style.display='none';
	if(game.normal.upgrades[9]==1) document.getElementById("sacrifice").style.display='block';
	if(game.normal.upgrades[10]==0) document.getElementById("boost").style.display='none';
	if(game.normal.upgrades[10]==1) document.getElementById("boost").style.display='block';
	if(game.infinity.upgrades[0]==0) document.getElementById("normal_challenge_tab").style.display='none';
	if(game.infinity.upgrades[0]==1) document.getElementById("normal_challenge_tab").style.display='inline';
	if(game.infinity.upgrades[1]==0) document.getElementById("infinity_generator_tab").style.display='none';
	if(game.infinity.upgrades[1]==1) document.getElementById("infinity_generator_tab").style.display='inline';
	if(game.normal.challenged.indexOf(0) === -1) document.getElementById("infinity_challenge_tab").style.display='inline';
	if(game.infinity.challenged.indexOf(0) === -1) document.getElementById("ordinal_tab").style.display='inline';
	if(game.eternity.milestones[9]==1) document.getElementById("eternity_generator_tab").style.display='inline';
	if(game.eternity.milestones[10]==1) document.getElementById("eternity_upgrade_tab").style.display='inline';
	if(game.eternity.milestones[15]==1) document.getElementById("eternity_producer_tab").style.display='inline';
	if(game.eternity.upgrades[4]==1) document.getElementById("eternity_challenge_tab").style.display='inline';
	if(game.eternity.upgrades[9]==1) document.getElementById("universe").style.display='block';
	
	//成就显示
	for(let i=1;i<=game.ach.length;i++){
		if(game.ach[i-1]==1){
		document.getElementById("ach"+i).className="achYES";
		}
	}
		
	if(game.time!=0) {
		let d=new Date();
		let offlinetime = d.getTime()-game.time;
		if(offlinetime>28800000) getAchievement(12);
		if(offlinetime>50000) {
			gameSpeed=1001;
		} setTimeout(function(){gameSpeed=1;},Math.floor(offlinetime/1000));
	}
	
}
function reset(){
let confirmation = confirm("确定要重置整个游戏吗？\n只建议在版本更新或想重玩游戏时使用该功能！");
if(confirmation==true){
	game = originalgame;
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	load();
	let d=new Date();
	game.starttime=d.getTime();
	document.getElementById("infinity_upgrade_tab").style.display='none';
	location.reload();
}
}
function exportgame(){
	save();
	copyText = btoa(JSON.stringify(game));
	navigator.clipboard.writeText(copyText);
}
function importgame(){
	game = JSON.parse(atob(document.getElementById("gamedata").value));
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	load();
}