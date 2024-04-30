const sacrifice_checkbox = document.getElementById("sacrifice_confirm");
sacrifice_checkbox.addEventListener("input", function() {
	if(sacrifice_checkbox.checked){
		game.confirmconfig.sacrifice=true;
	}else{
		game.confirmconfig.sacrifice=false;
	}
});
const boost_checkbox = document.getElementById("boost_confirm");
boost_checkbox.addEventListener("input", function() {
	if(boost_checkbox.checked){
		game.confirmconfig.boost=true;
	}else{
		game.confirmconfig.boost=false;
	}
});
const infinity_checkbox = document.getElementById("infinity_confirm");
infinity_checkbox.addEventListener("input", function() {
	if(infinity_checkbox.checked){
		game.confirmconfig.infinity=true;
	}else{
		game.confirmconfig.infinity=false;
	}
});
const eternity_checkbox = document.getElementById("eternity_confirm");
eternity_checkbox.addEventListener("input", function() {
	if(eternity_checkbox.checked){
		game.confirmconfig.eternity=true;
	}else{
		game.confirmconfig.eternity=false;
	}
});