

//max nesting level is three. 
var suscribed = [
	//0 :
	[],
	//1 :
	[],
	//2 :
	[],
	//3 :
	[]
];

function array_contains (array, element){
	var i = array.length;
	while (i--) {
		if (array[i] === element){
			return true;
		}
	}
	return false;
};

function close_others (element, level) {
	for (var levels = level; levels < suscribed.length; levels++) {
		var item = suscribed[levels].length;
		while(item--){
			if (suscribed[levels][item] != element)
				suscribed[levels][item].classList.remove("show");
		} 
	}
}

function myFunction(a) {
    var element = document.getElementById(a);
    var level = a.split(".")[1];
    var position = suscribed[level];

   	if (!array_contains(position, element))
   		position.push(element);

   	close_others(element, level);
   	element.classList.toggle("show");
}
/*
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  	if (!event.target.matches('.dropbtn')) {

    	var dropdowns = document.getElementsByClassName("dropdown-content");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
    	  	var openDropdown = dropdowns[i];
    	  	if (openDropdown.classList.contains('show')) {
    	  	 	openDropdown.classList.remove('show');
    	  	}
    	}
  	}
}
*/