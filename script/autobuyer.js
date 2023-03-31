function autobuynormalgenerator(){
	for(i=1;i<=8;i++){
		buymaxnormalgenerator(i);
	}
	
}

const autonormalgenerator = [];
for (let i = 1; i <= 8; i++) {
  (function(index) { // 使用立即执行函数封装回调函数
    const checkbox = document.getElementById("autobuygenerator" + index);
    checkbox.addEventListener("input", function() {
      if (checkbox && checkbox.checked) {
        const generatordelay = Math.max(
          document.getElementById("generatordelay" + index).value,
          game.delay
        );
        if (document.getElementById("bulkgenerator" + index).checked == false) {
          const autogeneratorId = setInterval(function() {
            buynormalgenerator(index);
          }, generatordelay);
          autonormalgenerator[index - 1] = autogeneratorId;
        } else {
          const autogeneratorId = setInterval(function() {
            buymaxnormalgenerator(index);
          }, generatordelay);
          autonormalgenerator[index - 1] = autogeneratorId;
        }
      } else {
        clearInterval(autonormalgenerator[index - 1]);
      }
    });
  })(i); // 传递当前的 i 值
}
