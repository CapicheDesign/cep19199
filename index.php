<?php require '_config.php'; ?>
<?php include 'includes/html.php'; ?>
<?php include 'includes/head.php'; ?>

<body class="homepage">
<?php include 'includes/nav.php'; ?>
<?php include 'includes/header.php'; ?>
	<div id="main">
		<section data-index=1 id="home">
			<div class="landing-inner">
				<div class="home__content">
					<h1>2019<br>Annual Report</h1>
					<h2>Port of choice for<br>Central New Zealand</h2>
					<button>
						Download Annual Report PDF (175kb)
					</button>
				</div>
			</div>
		</section>
		<section data-index=2 id="highlights">
				<div id="panel-1" class="home-panel panel-third light-blue-bg">
					<div class="panel-content">
					<span class="small-bold-text">Net Revenue</span>
					<span class="large-text">$67.7m</span>
					<span class="mid-size-text">growth of 14%</span>
				</div>
				<a class="arrow-yellow-fwd" href="#"></a>
					<!-- <div class="home-panel--overlay">Overlay content</div> -->
				</div>
				<div id="panel-2" class="home-panel panel-third">
					<span class="mid-size-text">We're serious<br>about safety</span>
					<a class="arrow-yellow-fwd" href="#"></a>
					<!-- <div class="home-panel--overlay">Overlay content</div> -->
				</div>
				<div id="panel-3" class="home-panel panel-third yellow-bg" >
					<!-- <div class="home-panel--overlay">Overlay content</div> -->
				</div>
				<div id="panel-4" class="home-panel panel-third">
					<!-- <div class="home-panel--overlay">Overlay content</div> -->
				</div>
				<div id="panel-5" class="home-panel panel-third white-bg">
					<!-- <div class="home-panel--overlay">Overlay content</div> -->
				</div>
				<div id="panel-6" class="home-panel panel-third black-bg">
					<!-- <div class="home-panel--overlay">Overlay content</div> -->
				</div>
		</section>
		<section data-index=3 id="business">Business</section>
		<section data-index=4 id="people">People</section>
		<section data-index=5 id="focus">Focus</section>
		<section data-index=6 id="financials">Financials</section>
	</div>

	<?php include $includesPath.'tail-scripts.php'; ?>
</body>
</html>
