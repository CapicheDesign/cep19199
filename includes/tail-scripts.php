<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="js/bundle.js"></script>

<?php if($isDev) { ?>
	<script src="<?=$themeURL;?>js/dev-only.js"></script>
<?php } ?>

<?php include "google-analytics.php"; ?>