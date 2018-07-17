(function ( $ ) {
 
    $.fn.colorify = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
			id: "test",
            color: "green",
            backgroundColor: "white"
        }, options );
 
        // Colorify the collection based on the settings variable.
        return $("#"+settings.id).css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
	
	colorMe = $.fn.colorify;
 
}( jQuery ));