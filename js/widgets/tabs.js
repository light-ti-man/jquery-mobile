//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: 
//>>label: Tabs
//>>group: Widgets
//>>css.theme: ../css/themes/default/jquery.mobile.theme.css

define( [ "jquery", "../jquery.mobile.widget", "../jquery.mobile.core","../jquery.ui.tabs", "../jquery.mobile.registry" ], function( jQuery ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {
	var uuid = 0,
		runiqueId = /^ui-id-\d+$/;
	$.fn.extend({
		uniqueId: function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + (++uuid);
				}
			});
		}
	});

	$.widget("mobile.tabs", $.mobile.widget, $.ui.tabs.prototype);

	$.mobile.tabs.initSelector = ":jqmData(role='tabs'), :jqmData(content='tabs')";

	$.mobile._enhancer.add( "mobile.tabs" );
})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");