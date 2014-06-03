require.config({
	baseUrl: '/app'
});

require(
	[
		'conf/config',
        "conf/routes",
		'app',
		'services/routeResolver'
	],
	function () {
		angular.bootstrap(document, [config.appName]);
});
