<?php

$botToken = "573480537:AAHUWJ_ArAOQZSjMkEmlOxqrlAwBIyj7lmM";
$website = "https://api.telegram.org/bot".botToken;

$update = file_get_contents($website."/getupdates");

print_r($update);

?>
