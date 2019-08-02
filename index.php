<?php require '_config.php'; ?>
<?php include 'includes/html.php'; ?>
<?php include 'includes/head.php'; ?>

<body class="homepage">
<?php include 'includes/nav.php'; ?>
<?php include 'includes/header.php'; ?>
	<div id="main">
		<section data-index=1 id="home">
			<div class="home__content">
				<h1>2019<br>Annual Report</h1>
				<h2>Port of choice for<br>Central New Zealand</h2>
				<button>
					Download Annual Report PDF (175kb)
				</button>
			</div>
		</section>
		<section data-index=2 id="highlights">
				<div id="panel-1" class="home-panel panel-third">
					<div class="panel-more">Overlay content<br><a href="#">click me</a></div>
				</div>
				<div id="panel-2" class="home-panel panel-third">
					<div class="panel-more">Overlay content</div>
				</div>
				<div class="home-panel panel-third" style="top:0;left:66.6%;"><a href="#">click me</a></div>
				<div class="home-panel panel-fifth" style="top:60%;left:0;"></div>
				<div class="home-panel panel-fifth" style="top:60%;left:20%;"></div>
				<div class="home-panel panel-fifth" style="top:60%;left:40%;"></div>
				<div class="home-panel panel-fifth" style="top:60%;left:60%;"></div>
				<div class="home-panel panel-fifth" style="top:60%;left:80%;"></div>
		</section>
		<section data-index=3 id="business">Business</section>
		<section data-index=4 id="people">People</section>
		<section data-index=5 id="focus">Focus</section>
		<section data-index=6 id="financials">Financials</section>
	</div>

	<?php include $includesPath.'tail-scripts.php'; ?>
</body>
</html>
