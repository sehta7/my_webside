function hide(){
	var toHide = document.querySelector("des");
	var curs = document.querySelector("tit");
	
	curs.style.cursor = 'pointer';
	curs.onclick = function(){
		if (toHide.style.display === "none") {
			toHide.style.display = "block";
		}
		else{
			toHide.style.display = "none";
		}
	};	
};