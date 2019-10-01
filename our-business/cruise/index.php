<?php require '../../_config.php'; 
		$pageMeta['section'] = 'Trades';
		$pageMeta['heading'] = 'Cruise';
		$pageMeta['description'] = 'History was made in the 2018/19 cruise ship season with ship visits passing the centrury mark for the first time.  By the end of the season a total of 110 visits were achieved.';
?>
<?php include '../../includes/html.php'; ?>
<?php include '../../includes/head.php'; ?>

<body class="content-page trades" id="cruise">
	<div class="animsition" data-animsition-in-class="fade-in-right" data-animsition-in-duration="1000" data-animsition-out-class="fade-out-right" data-animsition-out-duration="800">
		<?php include '../../includes/nav.php'; ?>
		<?php include '../../includes/header.php'; ?>
		<section class="clearfix">
			<aside class="left-col">
				<img src="<?=$siteBaseURL?>img/cruise/left-col-img.jpg" alt="Logs" />
			</aside>
			<div class="right-col" role="main">
				<div class="content-inner">
					<h1>Cruise</h1>
					<div class="heading-divider"></div>
					<p><strong>History was made in the 2018/19 cruise ship season with ship visits passing the century mark for the first time. By the end of the season there were a total of 110 visits.</strong></p>    
					
					<div class="youtube-wrapper m-t-m m-b-m">
						<a class="js-modal-btn" data-video-id="C2z4FIXeLpY">
							<img class="yt-poster" src="<?=$siteBaseURL?>img/cruise/video-placeholder.jpg" alt="video thumbnail image"/>
							<img class="yt-play-btn" src="<?=$siteBaseURL?>img/youtube-play-btn.svg" alt="play"/>
						</a>
					</div>
				</div>

				<div class="content-inner m-t-m">
					<p>More than 300,000 passengers and crew stopped in the Capital and local businesses felt the benefits as they purchased souvenirs, flat whites and cable car tickets.  Many visitors also travelled further afield on tours to the Wairarapa during their stay.</p>
					<p>The biggest week for cruise was in January, with 10 ships and 17,500 passengers visiting in a single week.</p>

					<blockquote class="m-t-m m-b-lg">
						<p>"Cruise visitors are fantastic for the city’s economy, and passengers certainly add a great buzz and vibrancy to the city.”</p>
						<cite>David Perks, General Manager of Wellington NZ</cite>
					</blockquote>


					<div aria-hidden="true" class="slick-slider photo-slider slick-slider__black m-t-0 m-b-m">
						<div><img src="<?=$siteBaseURL?>img/cruise/slider-1-img-1.jpg" alt=""/></div>
						<div><img src="<?=$siteBaseURL?>img/cruise/slider-1-img-3.jpg" alt=""/></div>
						<div><img src="<?=$siteBaseURL?>img/cruise/slider-1-img-2.jpg" alt=""/></div>
					</div>
					<blockquote class="m-t-lg m-b-0">
						<p>"Wellington is a great place for international travellers to see the stories of the nation and visit Te Papa and Parliament, experience a New Zealand city or go on a specialist tour. The people of Wellington have embraced cruise visitors – it is a fantastic promotion of the city and many visitors are inspired to return in the future,” said Perks.</p>
					</blockquote>

					<div class="slick-slider slick-slider__light-blue m-t-lg m-b-lg">
						<div><img src="<?=$siteBaseURL?>img/cruise/slider-2-img-1.jpg" alt="110 Ships"/></div>
						<div><img src="<?=$siteBaseURL?>img/cruise/slider-2-img-2.jpg" alt="+300k visitors"/></div>
						<div><img src="<?=$siteBaseURL?>img/cruise/slider-2-img-3.jpg" alt="+$56m to local economy"/></div>
					</div>

				</div>

				<div class="content-inner m-t-m">
					<p>The demographics of cruise passengers are changing, with an increase in families and a growing diversity of nationalities.</p>
					<p>The 2019/20 season will be even bigger, with 123 ships booked to land in Wellington.</p>

					<blockquote class="m-t-m m-b-lg">
						<p>“Cruise ships contribute $56 million to the Capital’s retail, hospitality and tourism sectors every year. It is a great way to highlight Wellington. We are proud to be part of boosting tourism to the city.”</p>
						<cite>Derek Nind, CEO, CentrePort</cite>
					</blockquote>
				</div>
			</div>
		</section>
		<?php include '../../includes/tail-scripts.php'; ?>
	</div>
</body>
</html>
