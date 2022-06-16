<?php

$row = $j;

if ($row['salary_frequency'] === 'hour' && preg_match("/9/i", $row["id"])) {
    $job = [
        'title' => trim((string) $row['title']),
        'reqid' => (string) $row['id'],
        'location' => trim((string) $row['location']),
        'url' => trim((string) $row['url']),
        'dateposted_raw' => date('m/d/Y', strtotime((string) $row['date'])),
        'html' => (string) $row['description'],
        'jobdesc' => strip_tags((string) $row['description']),
        'source_location' => trim((string) $row['location']),
        'temp' => 1
    ];
}