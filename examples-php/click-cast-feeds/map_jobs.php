<?php

$row = $j;

$location = (((string) $row['city']) + ", " + ((string) $row['state']) + ", " + ((string) $row['country']));
$job = [
    'title' => trim((string) $row['title']),
    'reqid' => trim((string) $row['job_reference']),
    'url' => trim((string) $row['url']),
    'dateposted_raw' => date('m/d/Y', strtotime(trim((string) $row['posted_at']))),
    'html' => trim($row['body']),
    'jobdesc' => strip_tags(trim($row['body'])),
    'location' => trim((string) $location),
    'source_location' => trim((string) $location),
    'temp' => 1
];