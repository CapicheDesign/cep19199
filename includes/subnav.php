<ul class="subnav">
    <?php if ($pageMeta['section'] == 'Our Business'): ?>
        <li><a href="<?=$siteBaseURL?>our-business/inland-strategy/" class="<?php if ($pageMeta['heading'] == 'Inland Strategy'):?>active<?php endif; ?>">Inland Strategy</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/logs/" class="<?php if ($pageMeta['heading'] == 'Logs'):?>active<?php endif; ?>">Logs</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/containers/" class="<?php if ($pageMeta['heading'] == 'Containers'):?>active<?php endif; ?>">Containers</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/ferries-and-fuel" class="<?php if ($pageMeta['heading'] == 'Ferries & Fuel'):?>active<?php endif; ?>">Ferries & Fuel</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/cruise" class="<?php if ($pageMeta['heading'] == 'Cruise'):?>active<?php endif; ?>">Cruise</a></li>
    <?php endif; ?>
</ul>
