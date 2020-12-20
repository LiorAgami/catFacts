<?php

// HELPERS FUNCTIONS
function getRequestData() {
	$json = file_get_contents('php://input');
	$request_arr = json_decode($json, true);
	return $request_arr;
}

function retSuccess($data = []) {
	return json_encode([
		'success'=>true,
		'result'=>$data
	]);
}

function retError($msg = '') {
	return json_encode([
		'success'=>false,
		'msg'=>($msg ?? 'Something went wrong!')
	]);
}

$req_params = getRequestData();


// @route   POST api/facts/save
// @desc    Save selected facts
// @params  [ endpoint :'/api/facts/save', factsToSave: [] ]
// @access  public
if(isset($req_params['endpoint']) && $req_params['endpoint'] == '/api/facts/save') {

	if(!isset($req_params['factsToSave'])) {
		echo retError('fact_arr parameter didn\'t found!'); die();
	}

	if(!is_array($req_params['factsToSave'])) {
		echo retError('fact_arr parameter must be array!'); die();
	}

	try{
		if (!file_exists('storage')) {
			mkdir('storage', 0777, true);
		}

		$json = json_encode($req_params['factsToSave']);

		$file = fopen('storage/facts.json','w+');
		fwrite($file, $json);
		fclose($file);

		echo retSuccess('facts saved successfully.'); die();
	}catch(Exception $e) {
		echo retError('Something went wrong - '.$e); die();
	}
}

echo retError('Something went wrong!'); die();

?>