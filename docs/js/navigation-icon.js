(function() {
 
  "use strict";
	var toggle = $("#navigation__button");
	toggle.on("click", function(e){
		e.preventDefault();
		if ( toggle.hasClass("active")) {
			toggle.removeClass("active");
		} else {
			toggle.addClass("active");
		}
	})
})();