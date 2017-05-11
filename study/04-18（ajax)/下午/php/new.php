<?php
header('content-type:text/html;charset=utf-8');

$types = $_GET['type'];
if( empty($_GET['start']) ){
	$start = 0;
}else{
	$start = $_GET['start'];
}
if( empty($_GET['end']) ){
	$end = 5;
}else{
	$end = $_GET['end'];
}

$school = array();

for ($x=0; $x<=53; $x++) {
  	$item = array(
		"num" => $x,
	    "job" => "校园招聘",
	    "pNum" => $x+1,
	    "ask" => "岗位要求：1)helpdesk支持；2)熟悉计算机软、硬件及网络维护；3)有相关工作经验，态度端正；4)有一定的服务意识",
	    "data" => "2017-04-17"
	);
	array_push($school,$item);
};

$world = array();

for ($x=0; $x<=53; $x++) {
  	$items = array(
		"num" => $x,
	    "job" => "社会招聘",
	    "pNum" => $x+1,
	    "ask" => "岗位要求：1)helpdesk支持；2)熟悉计算机软、硬件及网络维护；3)有相关工作经验，态度端正；4)有一定的服务意识",
	    "data" => "2017-04-17"
	);
	array_push($world,$items);
};


if($types === "school"){
	echo json_encode(array(
			"status" => 0,
			"data" => array_slice($school,$start,$end)
		));
}else if($types === "world"){
	echo json_encode(array(
			"status" => 0,
			"data" => array_slice($world,$start,$end)
		));
}else{
	echo json_encode(array(
		"status" => 1,
		"message" => '请输入正确的类型'
	));
};
