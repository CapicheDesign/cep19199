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

		<?php include $includesPath.'/homeHighlights.php'; ?>

		<?php include $includesPath.'/homeBusiness.php'; ?>
		
		<?php include $includesPath.'/homeFinancials.php'; ?>
	</div>

	<?php include $includesPath.'tail-scripts.php'; ?>
</body>
</html>
