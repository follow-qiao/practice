<?php

$fn = $_GET['cb'];
$type = $_GET['type'];


if($type === 'school'){
	$data = array("school1","school2","school3");
}else{
	$data = array("a","b","c");
}

echo $fn.'('.json_encode($data).')';