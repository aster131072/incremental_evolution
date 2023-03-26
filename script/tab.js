var tabnow=0;
function setTab(tabname){
	if(tabnow) document.getElementById(tabnow).style.display='none';
	document.getElementById(tabname).style.display='block';
	tabnow=tabname;
}