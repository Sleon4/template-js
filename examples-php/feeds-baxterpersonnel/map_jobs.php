<?php

$row = $j;

if ($row['salary_frequency'] === 'hour' && !preg_match("/9/i", $row["id"])) {
    $job = [
        'title' => trim($row['title']),
        'reqid' => trim($row['id']),
        'location' => trim($row['location']),
        'url' => trim($row['url']),
        'dateposted_raw' => date('m/d/Y', strtotime(trim($row['date']))),
        'html' => trim($row['description']),
        'jobdesc' => strip_tags(trim($row['description'])),
        'source_location' => trim($row['location']),
        'temp' => 1
    ];
}