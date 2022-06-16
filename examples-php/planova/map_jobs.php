<?php

$row = $j;

// trim data
$title = trim((string) $row["title"]);
$city = trim((string) $row["region"]);
$state = trim((string) $row["state"]);
$country = trim((string) $row["country-name"]);
$id = (string) $row["JobID"];

// data location
$arrloc = [];
if($city) $arrloc[] = $city;
if($state) $arrloc[] = $state;
if($country) $arrloc[] = $country;
$loc = implode(", ", $arrloc);

// data JOBS
$job = [
    'temp' => 1,
    'title' => $title,
    'html' => (string) $row["description"],
    'jobdesc' => strip_tags($job['html']),
    'location' => trim($loc),
    'url' => trim((string) $row["url"]),
    'reqid' => $id,
    'source_location' => trim((string) $row["location"]),
    'dateposted_raw' => date("m/d/Y", strtotime((string) $row["date"]))
];

$salary = trim((string) $row["salary"]);
if($salary != "") {
    $job['source_salary'] = trim((string) $row["salary"]);
}

$jobtype = trim((string) $row["contract-type"]);
if($jobtype != "") {
    $job['source_jobtype'] = trim((string) $row["contract-type"]);
}