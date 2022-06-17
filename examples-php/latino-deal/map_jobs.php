<?php

$row = $j;

$city = trim((string) $row["city"]);
$state = trim((string) $row["city_area"]);
$country = trim((string) $row["region"]);

$arrloc = [];
if($city) $arrloc[] = $city;
if($state) $arrloc[] = $state;
if($country) $arrloc[] = $country;

$job = [
    'title' => trim((string) $row['title']),
    'reqid' => trim((string) $row['id']),
    'url' => trim((string) $row['url']),
    'dateposted_raw' => date('m/d/Y', strtotime(trim((string) $row['date']))),
    'jobdesc' => strip_tags(trim($row['content'])),
    'location' => trim(implode(", ", $arrloc)),
    'temp' => 1
];