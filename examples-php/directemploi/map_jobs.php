<?php

$row = $j;

if (preg_match("/w/i", trim((string) strtolower($row["title"])))) {
    // trim data
    $city = trim((string) $row["region"]);
    $state = trim((string) $row["state"]);
    $country = trim((string) $row["country-name"]);

    // data location
    $arrloc = [];
    if($city) $arrloc[] = $city;
    if($state) $arrloc[] = $state;
    if($country) $arrloc[] = $country;

    // data JOBS
    $job = [
        'temp' => 1,
        'title' => trim((string) $row["title"]),
        'html' => (string) $row["description"],
        'jobdesc' => strip_tags($row['description']),
        'location' => trim(implode(", ", $arrloc)),
        'url' => trim((string) $row["url"]),
        'reqid' => (string) $row["JobID"],
        'source_location' => trim((string) $row["location"]),
        'dateposted_raw' => date("m/d/Y", strtotime((string) $row["date"]))
    ];

    $salary = trim((string) $row["salary"]);
    if($salary != "") $job['source_salary'] = trim((string) $row["salary"]);

    $jobtype = trim((string) $row["contract-type"]);
    if($jobtype != "") $job['source_jobtype'] = trim((string) $row["contract-type"]);
}