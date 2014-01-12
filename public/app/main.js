require.config({
	baseUrl: '/app'
});

require(
	[
		'conf/config',
        "conf/routes",
		'app',
		'services/routeResolver',
		'directives/top'
	],
	function () {
		angular.bootstrap(document, [config.appName]);
});
