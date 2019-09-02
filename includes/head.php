<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?=(strlen($pageMeta['heading']) > 0 ) ? $pageMeta['title'].' - '.$pageMeta['heading'] : $pageMeta['title'];?></title>
    <?php if(strlen($pageMeta['description']) > 0) { ?>
    <meta name="description" content="<?=$pageMeta['description']?>" />
    <?php } ?>
    <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?=$siteBaseURL;?>css/master.css">
    <script src="<?=$siteBaseURL;?>bower_components/modernizr/modernizr.js"></script>
</head>