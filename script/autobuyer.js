for (let i = 1; i <= 8; i++) {
  (function(index) {
    const checkbox = document.getElementById("autobuygenerator" + index);
    checkbox.addEventListener("input", function() {
      if (checkbox && checkbox.checked) {
      	let d=new Date();
        game.normal.generators.autobuyer[index - 1] = true;
        game.normal.generators.timer[index - 1] = d.getTime();
      } else if (checkbox) {
        game.normal.generators.autobuyer[index - 1] = false;
      }
    });
    const generatordelayInput = document.getElementById("generatordelay" + index);
    generatordelayInput.addEventListener("input", function() {
  	  if (generatordelayInput) {
      	const generatordelay = Math.max(generatordelayInput.value/gameSpeed, game.delay);
        game.normal.generators.autodelay[index - 1] = generatordelay;
      }
    });
    const bulkgeneratorCheckbox = document.getElementById("bulkgenerator" + index);
    bulkgeneratorCheckbox.addEventListener("input", function() {
      if (bulkgeneratorCheckbox && bulkgeneratorCheckbox.checked == false) {
        game.normal.generators.bulkbuy[index - 1] = false; 
      } else if(bulkgeneratorCheckbox) {
        game.normal.generators.bulkbuy[index - 1] = true;
      }	
    });
  })(i);
}

function autobuygenerator_on(){
	for(let i=1;i<=8;i++){
		game.normal.generators.autobuyer[i-1]=true;
		document.getElementById("autobuygenerator"+i).checked=true;
	}
}

function autobuygenerator_off(){
	for(let i=1;i<=8;i++){
		game.normal.generators.autobuyer[i-1]=false;
		document.getElementById("autobuygenerator"+i).checked=false;
	}
}

const auto_sacrifice_checkbox = document.getElementById("auto_sacrifice_checkbox");
auto_sacrifice_checkbox.addEventListener("input", function() {
	if(auto_sacrifice_checkbox.checked == true){
		let d=new Date();
		game.automator.sacrifice.timer = d.getTime();
		game.automator.sacrifice.checked = true;
	}else{
		game.automator.sacrifice.checked = false;
	}
});

const auto_sacrifice_mode = document.getElementById("auto_sacrifice_mode");
auto_sacrifice_mode.addEventListener("change", function() {
	if(auto_sacrifice_mode){
		game.automator.sacrifice.mode = auto_sacrifice_mode.value;
	}
});
const auto_sacrifice_parameter = document.getElementById("auto_sacrifice_parameter");
auto_sacrifice_parameter.addEventListener("input", function() {
	if(auto_sacrifice_parameter){
		game.automator.sacrifice.parameter = auto_sacrifice_parameter.value;
	}
});
const auto_boost_checkbox = document.getElementById("auto_boost_checkbox");
auto_boost_checkbox.addEventListener("input", function() {
	if(auto_boost_checkbox.checked == true){
		let d=new Date();
		game.automator.boost.timer = d.getTime();
		game.automator.boost.checked = true;
	}else{
		game.automator.boost.checked = false;
	}
});
const auto_boost_mode = document.getElementById("auto_boost_mode");
auto_boost_mode.addEventListener("change", function() {
	if(auto_boost_mode){
		game.automator.boost.mode = auto_boost_mode.value;
	}
});
const auto_boost_parameter = document.getElementById("auto_boost_parameter");
auto_boost_parameter.addEventListener("input", function() {
	if(auto_boost_parameter){
		game.automator.boost.parameter = auto_boost_parameter.value;
	}
});
const auto_infinity_checkbox = document.getElementById("auto_infinity_checkbox");
auto_infinity_checkbox.addEventListener("input", function() {
	if(auto_infinity_checkbox.checked == true){
		let d=new Date();
		game.automator.infinity.timer = d.getTime();
		game.automator.infinity.checked = true;
	}else{
		game.automator.infinity.checked = false;
	}
});
const auto_infinity_mode = document.getElementById("auto_infinity_mode");
auto_infinity_mode.addEventListener("change", function() {
	if(auto_infinity_mode){
		game.automator.infinity.mode = auto_infinity_mode.value;
	}
});
const auto_infinity_parameter = document.getElementById("auto_infinity_parameter");
auto_infinity_parameter.addEventListener("input", function() {
	if(auto_infinity_parameter){
		game.automator.infinity.parameter = auto_infinity_parameter.value;
	}
});
