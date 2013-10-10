angular.module('app').factory('NotificationService', function($rootScope) {

	return {
		show: function(m_title, m_message) {
			$rootScope.modal = {
                    title : m_title,
                    msg : m_message,
                };
                $('#NotificationService').modal('show');
		}
	};
});