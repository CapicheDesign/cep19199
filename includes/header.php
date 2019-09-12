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
    <a href="/" class="animisition-link" role="button" id="close-btn"><img src="<?=$siteBaseURL;?>img/icon-close.png" alt="Close" /></a>
</header>