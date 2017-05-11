<?php
header('content-type:text/html;charset=utf-8');
$school = array();

for ($x=0; $x<=100; $x++) {
  	$item = array(
		"title" => 'title'.$x,
		"href" => 'http://www.miaov.com',
		"data" => date("Y/m/d"),
		"quantity" => $x
	);
	array_push($school,$item);
};

$random = rand(0,95);

echo json_encode(array_slice($school, $random, 5));
