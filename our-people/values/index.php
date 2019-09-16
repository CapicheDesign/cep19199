<?php require '../../_config.php'; 
		$pageMeta['section'] = 'Our People';
		$pageMeta['heading'] = 'Values';
		$pageMeta['description'] = 'CentrePort’s values guide the behaviour and attitude of our people. They are part of our vocabulary and underpin the way we do and think about things at CentrePort. We literally wear our values and look to live them to deliver for our customers and our people.';
?>
<?php include '../../includes/html.php'; ?>
<?php include '../../includes/head.php'; ?>

<body class="content-page" id="values">
	<div class="animsition" data-animsition-in-class="fade-in-right" data-animsition-in-duration="1000" data-animsition-out-class="fade-out-right" data-animsition-out-duration="800">
		<?php include '../../includes/nav.php'; ?>
		<?php include '../../includes/header.php'; ?>
		<section class="clearfix">
			<aside class="left-col">
				<img src="<?=$siteBaseURL?>img/values/left-col-img.jpg" alt="Our values signage" />
			</aside>
			<div class="right-col" role="main">
				<div class="content-inner">
					<h1>Values</h1>
					<div class="heading-divider"></div>

					<p>CentrePort’s values guide the behaviour and attitude of our people. They are part of our vocabulary and underpin the way we do and think about things at CentrePort. We literally wear our values and look to live them to deliver for our customers and our people.</p>
					<p>A refresh this year saw the imagery evolve but the message remained the same.</p> 
				</div>

				<div class="slick-slider m-t-lg m-b-lg">
					<div><img src="<?=$siteBaseURL?>img/values/slider-1-img-1.jpg" alt="Be Safe"/></div>
					<div><img src="<?=$siteBaseURL?>img/values/slider-1-img-2.jpg" alt="One Team"/></div>
					<div><img src="<?=$siteBaseURL?>img/values/slider-1-img-3.jpg" alt="Make it happen"/></div>
					<div><img src="<?=$siteBaseURL?>img/values/slider-1-img-4.jpg" alt="Aim higher"/></div>
				</div>

			</div>
		</section>
		<?php include '../../includes/tail-scripts.php'; ?>
	</div>
</body>
</html>
