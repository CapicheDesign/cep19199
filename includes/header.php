<header class="content-page-header">
    <a class="logo" href="<?=$siteBaseURL;?>">
        <img src="<?=$siteBaseURL;?>img/logo-black.svg" alt="Centreport Wellington" />
    </a>
    <div class="centered-container">
        <div class="headings">
        <a href="<?=$siteBaseURL;?>?s=<?php if ($pageMeta['section'] == 'Highlights'):?>1<?php endif; ?><?php if ($pageMeta['section'] == 'Our business'):?>2<?php endif; ?><?php if ($pageMeta['section'] == 'Trades'):?>2<?php endif; ?><?php if ($pageMeta['section'] == 'Our people'):?>3<?php endif; ?><?php if ($pageMeta['section'] == 'Our focus'):?>4<?php endif; ?><?php if ($pageMeta['section'] == 'Financial Statements'):?>5<?php endif; ?>" class="animsition-link">
            <h2 id="areaHeading">
                <?php if ($pageMeta['section'] == 'Trades'):?>Our business<?php endif; ?>
                <?php if ($pageMeta['section'] != 'Trades'):?><?=$pageMeta['section'];?><?php endif; ?>
            </h2>
        </a>
        <span class="divider" aria-hidden="true">|</span>
            <h1 id="sectionHeading">
                <?php if ($pageMeta['section'] == 'Trades'):?>Trades<?php endif; ?>
                <?php if ($pageMeta['section'] != 'Trades'):?><?=$pageMeta['heading'];?><?php endif; ?>  
            </h1>
        </div>
        <?php include '../../includes/subnav.php'; ?>
    </div>
    <a href="<?=$siteBaseURL;?>?s=<?php if ($pageMeta['section'] == 'Highlights'):?>1<?php endif; ?><?php if ($pageMeta['section'] == 'Our business'):?>2<?php endif; ?><?php if ($pageMeta['section'] == 'Trades'):?>2<?php endif; ?><?php if ($pageMeta['section'] == 'Our people'):?>3<?php endif; ?><?php if ($pageMeta['section'] == 'Our focus'):?>4<?php endif; ?><?php if ($pageMeta['section'] == 'Financial Statements'):?>5<?php endif; ?>" class="animsition-link" role="button" id="close-btn"></a>
</header>