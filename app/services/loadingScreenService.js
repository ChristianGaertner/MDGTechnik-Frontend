app.factory('LoadingScreenService', function($rootScope) {

	return {
		show: function(message) {
			$rootScope.loading = {
                    active : true,
                    text : message,
                };
		},
		hide: function() {
			$rootScope.loading.active = false;
		}
	};
});