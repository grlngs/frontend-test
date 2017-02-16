<?php
if($_POST)
{
	$to_email   	= "mailadres@blocklevel.nl";
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

		$output = json_encode(array(
			'type'=>'error',
			'text' => 'Could not send mail! (error:500)'
		));
		die($output);
    }

	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$message		= filter_var($_POST["msg"], FILTER_SANITIZE_STRING);

	if(strlen($user_name)<4){
		$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
		die($output);
	}
	if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
	if(strlen($message)<3){
		$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
		die($output);
	}

	$message_body = $message."\r\n\r\n-".$user_name."\r\nEmail : ".$user_email."\r\nPhone Number : (".$country_code.") ". $phone_number ;

	$headers = 'From: '.$user_name.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	$send_mail = mail($to_email, 'Blocklevel contactform', $message_body, $headers);

	if(!$send_mail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! (error:8191)'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => '
		<font class="font red">T</font>
		<font class="font lightorange">H</font>
		<font class="font yellow">A</font>
		<font class="font cyaan">N</font>
		<font class="font lightblue">K</font>
		 <br />
		 <font class="font darkblue">Y</font>
		 <font class="font darkorange">O</font>
		 <font class="font brown">U</font>'));
		die($output);
	}
}

?>
