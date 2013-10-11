angular.module('app').directive('html', function($compile) {
	// Runs during compile
	return {
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs) {
			scope.$watch(attrs.html, function(html) {
				element.html(html);
				$compile(element.contents())(scope);
			});
		}
	};
});