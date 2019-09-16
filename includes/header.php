<header class="content-page-header">
    <a class="logo" href="<?=$siteBaseURL;?>">
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
    <a href="<?=$siteBaseURL;?>?s=<?php if ($pageMeta['section'] == 'Highlights'):?>1<?php endif; ?><?php if ($pageMeta['section'] == 'Our Business'):?>2<?php endif; ?><?php if ($pageMeta['section'] == 'Our People'):?>3<?php if ($pageMeta['section'] == 'Our Focus'):?>4<?php endif; ?><?php if ($pageMeta['section'] == 'Our Financials'):?>5<?php endif; ?><?php endif; ?>" class="animsition-link" role="button" id="close-btn"></a>
</header>