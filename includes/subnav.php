<ul class="subnav">
    <?php if ($pageMeta['section'] == 'Our Business'): ?>
        <li><a href="<?=$siteBaseURL?>our-business/inland-strategy/" class="animsition-link <?php if ($pageMeta['heading'] == 'Inland Strategy'):?>active<?php endif; ?>">Inland Strategy</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/ceo-report/" class="animsition-link <?php if ($pageMeta['heading'] == "CEO's Report"):?>active<?php endif; ?>">CEO's Report</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/chair-report/" class="animsition-link <?php if ($pageMeta['heading'] == 'Chair Report'):?>active<?php endif; ?>">Chair Report</a></li>
    <?php elseif ($pageMeta['section'] == 'Trades'): ?>
        <li><a href="<?=$siteBaseURL?>our-business/logs/" class="animsition-link <?php if ($pageMeta['heading'] == 'Logs'):?>active<?php endif; ?>">Logs</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/containers/" class="animsition-link <?php if ($pageMeta['heading'] == 'Containers'):?>active<?php endif; ?>">Containers</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/ferries-and-fuel" class="animsition-link <?php if ($pageMeta['heading'] == 'Ferries & Fuel'):?>active<?php endif; ?>">Ferries & Fuel</a></li>
        <li><a href="<?=$siteBaseURL?>our-business/cruise" class="animsition-link <?php if ($pageMeta['heading'] == 'Cruise'):?>active<?php endif; ?>">Cruise</a></li>
    <?php elseif ($pageMeta['section'] == 'Our People'): ?>
        <li><a href="<?=$siteBaseURL?>our-people/training/" class="animsition-link <?php if ($pageMeta['heading'] == 'Training'):?>active<?php endif; ?>">Training</a></li>
        <li><a href="<?=$siteBaseURL?>our-people/resilient-people/" class="animsition-link <?php if ($pageMeta['heading'] == 'Resilient People'):?>active<?php endif; ?>">Resilient People</a></li>
        <li><a href="<?=$siteBaseURL?>our-people/health-and-safety/" class="animsition-link <?php if ($pageMeta['heading'] == 'Health and Safety'):?>active<?php endif; ?>">Health and Safety</a></li>
        <li><a href="<?=$siteBaseURL?>our-people/values/" class="animsition-link <?php if ($pageMeta['heading'] == 'Values'):?>active<?php endif; ?>">Values</a></li>
        <li><a href="<?=$siteBaseURL?>our-people/community-engagement/" class="animsition-link <?php if ($pageMeta['heading'] == 'Community Engagement'):?>active<?php endif; ?>">Community Engagement</a></li> 
    <?php elseif ($pageMeta['section'] == 'Our Focus'): ?>
        <li><a href="<?=$siteBaseURL?>our-focus/medium-term-plan/" class="animsition-link <?php if ($pageMeta['heading'] == 'Medium-Term Operating Plan'):?>active<?php endif; ?>">Medium-Term Operating Plan</a></li>
        <li><a href="<?=$siteBaseURL?>our-focus/sustainability/" class="animsition-link <?php if ($pageMeta['heading'] == 'Sustainability'):?>active<?php endif; ?>">Sustainability</a></li>
        <li><a href="<?=$siteBaseURL?>our-focus/ferry-terminal/" class="animsition-link <?php if ($pageMeta['heading'] == 'Multi-user Ferry Terminal'):?>active<?php endif; ?>">Multi-user Ferry Terminal</a></li>
        <li><a href="<?=$siteBaseURL?>our-focus/lifelines/" class="animsition-link <?php if ($pageMeta['heading'] == 'Lifelines'):?>active<?php endif; ?>">Lifelines</a></li>
    <?php endif; ?>
</ul>
