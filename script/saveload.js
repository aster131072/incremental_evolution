

function save(){
	var d=new Date();
	game.time=d.getTime();
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	
}
function load(){
	if(JSON.parse(localStorage.getItem("incrementalEvolution"))==null) {
			game = originalgame;
			var d=new Date();
			game.starttime=d.getTime();
		}
	else{
		game = JSON.parse(localStorage.getItem("incrementalEvolution"));
	}
	document.getElementById("delay").value=Math.log10(game.delay);
	document.getElementById("delaytext").innerHTML=game.delay;
	document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice);
	document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost);
	document.getElementById("infinity requirement").innerHTML=game.infinity.requirement;
	for(var i=1;i<9;i++){
		document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.price[i-1]);

	}
	//读取升级
	for(var i=1;i<=game.normal.upgrades.length;i++){
		if(game.normal.upgrades[i-1]==1){
		document.getElementById("nu"+i).style.backgroundColor="#00ff00";
		//document.getElementById("nu"+i+"b").value="已购买";
		}
	}
	if(game.normal.upgrades[2]==0) document.getElementById("max all").type="hidden";
	if(game.normal.upgrades[2]==1) document.getElementById("max all").type="button";
	if(game.normal.upgrades[8]==1){
		for(i=1;i<=8;i++){
			document.getElementById("autoNG"+i).style.display='table-cell'
		}
	} 
	if(game.infinity.hasinfinitied){
		document.getElementById("infinity_upgrade_tab").style.display='inline';
	}else{
		document.getElementById("infinity_upgrade_tab").style.display='none';
	}
	if(game.normal.upgrades[9]==0) document.getElementById("sacrifice").style.display='none';
	if(game.normal.upgrades[9]==1) document.getElementById("sacrifice").style.display='block';
	if(game.normal.upgrades[10]==0) document.getElementById("boost").style.display='none';
	if(game.normal.upgrades[10]==1) document.getElementById("boost").style.display='block';

	//读取成就
	for(var i=1;i<=game.ach.length;i++){
		if(game.ach[i-1]==1){
		document.getElementById("ach"+i).className="achYES";
		}
	}
		
	if(game.time!=0) {
		gameSpeed=1001;
		var d=new Date();
		let offlinetime = d.getTime()-game.time;
		if(offlinetime>28800000) getAchievement(12);
		if(offlinetime>1000) setTimeout(function(){gameSpeed=1;},Math.floor(offlinetime/1000));
	}
	
}
function reset(){
var confirmation = confirm("你真的要重置数据吗？这会重置一切，且没有任何奖励");
if(confirmation==true){
	game = originalgame;
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	load();
	var d=new Date();
	game.starttime=d.getTime();
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