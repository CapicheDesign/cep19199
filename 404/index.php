<?php require '../_config.php'; 
		$pageMeta['section'] = 'Error 404';
		$pageMeta['heading'] = 'Sorry, that page does not exist';
		$pageMeta['description'] = 'Error 404 - Sorry, that page does not exist.';
?>
<?php include '../includes/html.php'; ?>
<?php include '../includes/head.php'; ?>

<body class="content-page" id="error">
	<div class="animsition" data-animsition-in-class="fade-in-right" data-animsition-in-duration="1000" data-animsition-out-class="fade-out-right" data-animsition-out-duration="800">
		<?php include '../includes/nav.php'; ?>
		<?php include '../includes/header.php'; ?>
		<section class="clearfix">
			<aside class="left-col">
				<img src="<?=$siteBaseURL?>img/values/left-col-img.jpg" alt="" />
			</aside>
			<div class="right-col" role="main">
				<div class="content-inner p-b-lg">
					<h1>Error 404</h1>
					<div class="heading-divider"></div>

					<p>Sorry, the page you are looking for does not exist. Please close the page, use the naviation menu or click the back button in your browser to try again.</p>

				</div>

			</div>
		</section>
		<?php include '../includes/tail-scripts.php'; ?>
	</div>
</body>
</html>
