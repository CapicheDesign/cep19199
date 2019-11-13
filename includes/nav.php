<nav aria-label="main" id="mainNav">
  <div id="menuToggle" class="white-bg">
    <label for="menu-checkbox">Menu</label>
    <input type="checkbox" type="text" name="menu-checkbox" id="menu-checkbox" aria-haspopup="true"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu" aria-expanded="false">
        <div class="menu-divider"></div>
        <li>
            <a href="<?=$siteBaseURL?>" class="homePageLink" id="homeLink" title="Home">Home</a>
        </li>
        <li>
            <a href="<?=$siteBaseURL?>?s=1" class="homePageLink" id="highlightsLink" title="Highlights">Highlights</a>
        </li>
        <li class="<?php if ($pageMeta['section'] == 'Our Business'):?>active<?php endif; ?><?php if ($pageMeta['section'] == 'Trades'):?>active<?php endif; ?>">
            <a href="<?=$siteBaseURL?>?s=2" class="homePageLink <?php if ($pageMeta['section'] == 'Our Business'):?>active<?php endif; ?> <?php if ($pageMeta['section'] == 'Trades'):?>active<?php endif; ?>" id="businessLink" title="Our Business">Our Business</a>
            <a href="#" class="toggleSubnav" aria-haspopup="true" aria-expanded="false">
                <span></span>
                <span></span>
            </a>
            <ul class="sub-nav">         
                <li><a href="<?=$siteBaseURL?>our-business/inland-strategy/" class="animsition-link <?php if ($pageMeta['heading'] == 'Inland Strategy'):?>active<?php endif; ?>">Inland Strategy</a></li>
                <li><a href="<?=$siteBaseURL?>our-business/ceo-report/" class="animsition-link <?php if ($pageMeta['heading'] == "CEO's Report"):?>active<?php endif; ?>">CEO's Report</a></li>
                <li><a href="<?=$siteBaseURL?>our-business/chair-report/" class="animsition-link <?php if ($pageMeta['heading'] == "Chair's Report"):?>active<?php endif; ?>">Chair's Report</a></li>
                <li><a href="<?=$siteBaseURL?>our-business/logs/" class="animsition-link <?php if ($pageMeta['heading'] == 'Logs'):?>active<?php endif; ?>">Logs</a></li>
                <li><a href="<?=$siteBaseURL?>our-business/containers/" class="animsition-link <?php if ($pageMeta['heading'] == 'Containers'):?>active<?php endif; ?>">Containers</a></li>
                <li><a href="<?=$siteBaseURL?>our-business/ferries-and-fuel" class="animsition-link <?php if ($pageMeta['heading'] == 'Ferries & Fuel'):?>active<?php endif; ?>">Ferries & Fuel</a></li>
                <li><a href="<?=$siteBaseURL?>our-business/cruise" class="animsition-link <?php if ($pageMeta['heading'] == 'Cruise'):?>active<?php endif; ?>">Cruise</a></li>
            </ul>
        </li>
        <li class="<?php if ($pageMeta['section'] == 'Our People'):?>active<?php endif; ?>">
            <a href="<?=$siteBaseURL?>?s=3" class="homePageLink <?php if ($pageMeta['section'] == 'Our People'):?>active<?php endif; ?>" id="peopleLink" title="Our People">Our People</a>
            <a href="#" class="toggleSubnav" aria-haspopup="true" aria-expanded="false">
                <span></span>
                <span></span>
            </a>
            <ul class="sub-nav">         
                <li><a href="<?=$siteBaseURL?>our-people/training/" class="animsition-link <?php if ($pageMeta['heading'] == 'Training'):?>active<?php endif; ?>">Training</a></li>
                <li><a href="<?=$siteBaseURL?>our-people/resilient-people/" class="animsition-link <?php if ($pageMeta['heading'] == 'Resilient People'):?>active<?php endif; ?>">Resilient People</a></li>
                <li><a href="<?=$siteBaseURL?>our-people/health-and-safety/" class="animsition-link <?php if ($pageMeta['heading'] == 'Health and Safety'):?>active<?php endif; ?>">Health and Safety</a></li>
                <li><a href="<?=$siteBaseURL?>our-people/values/" class="animsition-link <?php if ($pageMeta['heading'] == 'Values'):?>active<?php endif; ?>">Values</a></li>   
                <li><a href="<?=$siteBaseURL?>our-people/community-engagement/" class="animsition-link <?php if ($pageMeta['heading'] == 'Community Engagement'):?>active<?php endif; ?>">Community Engagement</a></li>   
            </ul>
        </li>
        <li class="<?php if ($pageMeta['section'] == 'Our Focus'):?>active<?php endif; ?>">
            <a href="<?=$siteBaseURL?>?s=4" class="homePageLink <?php if ($pageMeta['section'] == 'Our Focus'):?>active<?php endif; ?>" id="focusLink" title="Our Focus">Our Focus</a>
            <a href="#" class="toggleSubnav" aria-haspopup="true" aria-expanded="false">
                <span></span>
                <span></span>
            </a>
            <ul class="sub-nav">         
                <li><a href="<?=$siteBaseURL?>our-focus/medium-term-plan/" class="animsition-link <?php if ($pageMeta['heading'] == 'Medium-term Operating Plan'):?>active<?php endif; ?>">Medium-term Operating Plan</a></li>
                <li><a href="<?=$siteBaseURL?>our-focus/sustainability/" class="animsition-link <?php if ($pageMeta['heading'] == 'Sustainability'):?>active<?php endif; ?>">Sustainability</a></li>
                <li><a href="<?=$siteBaseURL?>our-focus/ferry-terminal/" class="animsition-link <?php if ($pageMeta['heading'] == 'Multi-user Ferry Terminal'):?>active<?php endif; ?>">Multi-user Ferry Terminal</a></li>
                <li><a href="<?=$siteBaseURL?>our-focus/lifelines/" class="animsition-link <?php if ($pageMeta['heading'] == 'Lifelines'):?>active<?php endif; ?>">Lifelines</a></li>
            </ul>
        </li>
        <li class="<?php if ($pageMeta['section'] == 'Financial Information'):?>active<?php endif; ?>">
            <a href="<?=$siteBaseURL?>?s=5" class="homePageLink <?php if ($pageMeta['section'] == 'Financial Information'):?>active<?php endif; ?>" id="financialsLink" title="Financial Information">Financial Information</a>
            <a href="#" class="toggleSubnav" aria-haspopup="true" aria-expanded="false">
                <span></span>
                <span></span>
            </a>
            <ul class="sub-nav">
                <li><a href="<?=$siteBaseURL?>assets/centreport-2019-auditors-report.pdf" class="pdf-link" target="_blank">Auditor's Report</a></li>         
                <li><a href="<?=$siteBaseURL?>our-financials/governance/" class="animsition-link <?php if ($pageMeta['heading'] == 'Governance'):?>active<?php endif; ?>">Governance</a></li>
            </ul>
        </li>
        <li>
            <footer>
                <p><span>CentrePort Wellington</span>
                CentrePort House, Harbour Quays<br>
                Wellington 6011, New Zealand<br>
                <a href="mailto:customerservices@centreport.co.nz">customerservices@centreport.co.nz</a><br>
                Phone <a href="tel:=6444953800">04-495 3800</a><br><br>
                <a href="https://centreport.co.nz" target="_blank">www.centreport.co.nz</a></p>
            </footer>
        </li>
    </ul>
  </div>
</nav>
