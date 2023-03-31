
function showNotification(notificationName) {
	var notification = document.querySelector(notificationName);
  notification.classList.add("show");
  setTimeout(function(){notification.classList.remove("show");},5000);
}

function getAchievement(i){
	if(game.ach[i-1]==0){
		game.ach[i-1]=1;
		document.getElementById("ach"+i).className="achYES";
		showNotification("#notificationach"+i);
	}
}


