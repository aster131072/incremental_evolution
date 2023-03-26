

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
	
	for(var i=1;i<9;i++){
		document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.price[i-1]);

	}
	for(var i=1;i<10;i++){
		if(game.normal.upgrades[i-1]==1){
		document.getElementById("nu"+i).style.backgroundColor="#00ff00";
		document.getElementById("nu"+i+"b").value="已购买";
		}
	}
	for(var i=1;i<=game.ach.length;i++){
		if(game.ach[i-1]==1){
		document.getElementById("ach"+i).className="achYES";
		}
	}
	if(game.normal.upgrades[2]==0) document.getElementById("max all").type="hidden";
	if(game.normal.upgrades[2]==1) document.getElementById("max all").type="button";
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