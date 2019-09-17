<?php require '_config.php'; 
		$pageMeta['section'] = 'Home';
		$pageMeta['description'] = 'CentrePort’s Annual Report 2019';
?>
<?php include 'includes/html.php'; ?>
<?php include 'includes/head.php'; ?>

<body id="homepage" class="animsition" data-animsition-in-class="fade-in-right" data-animsition-in-duration="1000" data-animsition-out-class="fade-out-right" data-animsition-out-duration="800">
		<?php include 'includes/navHome.php'; ?>
		<?php include 'includes/headerHome.php'; ?>
			<div id="main" role="main">
				<section data-index=1 id="home">
					<div class="landing-inner">
						<div class="home__content">
							<h1>2019<br>Annual Report</h1>
							<h2>The port of choice for<br>Central New Zealand</h2>
							<button>
								Download Annual Report PDF (XXXkb)
							</button>
						</div>
					</div>
				</section>

				<?php include $includesPath.'/homeHighlights.php'; ?>

				<?php include $includesPath.'/homeBusiness.php'; ?>

				<?php include $includesPath.'/homePeople.php'; ?>

				<?php include $includesPath.'/homeFocus.php'; ?>
				
				<?php include $includesPath.'/homeFinancials.php'; ?>
			</div>
	<?php include $includesPath.'tail-scripts.php'; ?>
</body>
</html>
