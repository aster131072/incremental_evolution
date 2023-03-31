

function save(){
	var d=new Date();
	game.time=d.getTime();
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	
}
function load(){
	if(JSON.parse(localStorage.getItem("incrementalEvolution"))==null) {
			game = originalgame;
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
	for(var i=1;i<=game.normal.upgrades.length;i++){
		if(game.normal.upgrades[i-1]==1){
		document.getElementById("nu"+i).style.backgroundColor="#00ff00";
		//document.getElementById("nu"+i+"b").value="已购买";
		}
	}
	for(var i=1;i<=game.ach.length;i++){
		if(game.ach[i-1]==1){
		document.getElementById("ach"+i).className="achYES";
		}
	}
	if(game.normal.upgrades[2]==0) document.getElementById("max all").type="hidden";
	if(game.normal.upgrades[2]==1) document.getElementById("max all").type="button";
	//if(game.normal.upgrades[8]==0) document.getElementById("autobuyer").type="hidden";
	//if(game.normal.upgrades[8]==1) document.getElementById("autobuyer").type="button";
	if(game.normal.upgrades[9]==0) document.getElementById("sacrifice").style.display='none';
	if(game.normal.upgrades[9]==1) document.getElementById("sacrifice").style.display='block';
	if(game.normal.upgrades[10]==0) document.getElementById("boost").style.display='none';
	if(game.normal.upgrades[10]==1) document.getElementById("boost").style.display='block';
	gameSpeed=1001;
	var d=new Date();
	if(game.time!=0) setTimeout(function(){gameSpeed=1;},(d.getTime()-game.time)/1000);
}
function reset(){
var confirmation = confirm("你真的要重置数据吗？");
if(confirmation==true){
	game = originalgame;
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	load();
	location.reload();
}
}
function exportgame(){
	save();
	copyText = JSON.stringify(game);
	navigator.clipboard.writeText(copyText);
}
function importgame(){
	game = JSON.parse(document.getElementById("gamedata").value);
	localStorage.setItem("incrementalEvolution",JSON.stringify(game));
	load();
}