<header class="content-page-header">
    <a class="logo" href="/">
        <img src="<?=$siteBaseURL;?>img/logo-black.svg" alt="Centreport Wellington" />
    </a>
    <div class="centered-container">
        <div class="headings">
            <h2 id="areaHeading"><?=$pageMeta['section'];?></h2>
            <span class="divider" aria-hidden="true">|</span>
            <h1 id="sectionHeading"><?=$pageMeta['heading'];?></h1>
        </div>
        <?php include '../../includes/subnav.php'; ?>
    </div>
    <a href="/" class="animisition-link" data-animsition-out-class="fade-out-right" data-animsition-out-duration="800" role="button" id="close-btn"></a>
</header>