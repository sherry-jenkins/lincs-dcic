<!doctype html>
<html lang="en" ng-app="lincsDcic">
<head>
	<meta charset="utf-8">
	<title>BD2K-LINCS DCIC</title>

    <link rel="shortcut icon" href="images/dcic-logo/favicon.png?v=2">

	<!-- CSS -->
	<link rel="stylesheet" href="/lib/bower_components/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="/lib/bower_components/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="/lib/bower_components/bootstrap-social/bootstrap-social.css">
	<link rel="stylesheet" href="/lib/bower_components/fullcalendar/dist/fullcalendar.min.css">
    <link rel="stylesheet" href="/lib/jquery-ui-1.11.4.custom/jquery-ui.min.css">
    <link href='http://fonts.googleapis.com/css?family=Archivo+Narrow:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Monda:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/side.css">

	<!-- Embedded Twitter feed-->
	<script>
		!function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0],
				p = /^http:/.test(d.location) ? 'http' : 'https';
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = p + "://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js, fjs);
			}
		}(document, "script", "twitter-wjs");
	</script>

    <!-- Google Analytics -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-57790233-1', 'auto');
		ga('send', 'pageview');
	</script>
</head>

<body>
    <!-- This pushes the footer to the bottom. -->
    <div id="wrapper">

        <!-- This creates the top level header that spans the entire width -->
        <div ng-include="'view/partial/header.html'"></div>

        <!-- ng-view is used rather than ng-include to handle routing. -->
        <div id="content-wrapper" class="container" ng-view></div>

    </div>

    <div ng-include="'view/partial/footer.html'"></div>
    
	<!-- Libraries -->
	<script src="/lib/bower_components/angular/angular.js"></script>
	<script src="/lib/bower_components/angular-route/angular-route.js"></script>
	<script src="/lib/bower_components/jquery/jquery.min.js"></script>
	<script src="/lib/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
	<script src='/lib/bower_components/moment/min/moment.min.js'></script>
	<script src='/lib/bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
	<script src='/lib/bower_components/fullcalendar/dist/gcal.js'></script>
	<script src="/lib/bower_components/bootstrap/js/dropdown.js"></script>
	<script src="/lib/bower_components/bootstrap/js/collapse.js"></script>
	<script src="/lib/bower_components/bootstrap/js/carousel.js"></script>
	<script src="/lib/bower_components/bootstrap/js/transition.js"></script>
	<script src="/lib/bower_components/underscore/underscore-min.js"></script>
	
	<!-- ************************ Application ************************ -->
	<!-- Data -->
    <script type="text/javascript" src="js/data/apis.js"></script>
	<script type="text/javascript" src="js/data/carousel.js"></script>
	<script type="text/javascript" src="js/data/datacenters.js"></script>
	<script type="text/javascript" src="js/data/datasets.js"></script>
    <script type="text/javascript" src="js/data/index.js"></script>
    <script type="text/javascript" src="js/data/intro.js"></script>
    <script type="text/javascript" src="js/data/funding.js"></script>
	<script type="text/javascript" src="js/data/news.js"></script>
	<script type="text/javascript" src="js/data/publications.js"></script>
	<script type="text/javascript" src="js/data/subnav.js"></script>
	<script type="text/javascript" src="js/data/summer-fellows.js"></script>
	<script type="text/javascript" src="js/data/training.js"></script>
	<script type="text/javascript" src="js/data/team.js"></script>
	<script type="text/javascript" src="js/data/tools.js"></script>
	<script type="text/javascript" src="js/data/webinars.js"></script>

	<!-- Extra functionality -->
	<script type="text/javascript" src="js/analyze.js"></script>
	<script type="text/javascript" src="js/calendar.js"></script>
	<script type="text/javascript" src="js/email.js"></script>
	<script type="text/javascript" src="js/extra.js"></script>
	<script type="text/javascript" src="js/edsrapp.js"></script>
	<script type="text/javascript" src="js/filters.js"></script>

	<!-- Routes -->
	<script type="text/javascript" src="js/app.js"></script>
	<!-- ************************ End application ************************ -->
</body>
</html>
