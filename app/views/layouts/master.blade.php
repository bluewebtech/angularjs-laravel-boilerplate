<!doctype html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>AngularJS + Laravel Boilerplate</title>
	<link rel="stylesheet" type="text/css" href="/assets/styles/web.css" />
</head>
<body>

	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li>
					<a href="/">HOME</a>
				</li>
				<li>
					<a href="/respect/">RESPECT</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="container" ng-view></div>

	<script type="text/javascript" src="/assets/js/lib/jquery/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="/assets/js/lib/bootstrap/bootstrap.min.js"></script>
	<script type="text/javascript" src="/assets/js/lib/angularjs/angular.min.js"></script>
	<script type="text/javascript" src="/assets/js/lib/angularjs/angular-route.min.js"></script>
	<script type="text/javascript" src="/assets/js/lib/angularjs/angular-animate.min.js"></script>
	<script type="text/javascript" src="/assets/js/lib/requirejs/require.min.js" data-main="/app/main"></script>
</body>
</html>
