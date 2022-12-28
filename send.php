<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = "helaliismail@gmail.com";
	$subject = "Contact Form Submission";
	$body = "Name: $name\nEmail: $email\nMessage: $message";
	$headers = "From: $email";

	if(mail($to, $subject, $body, $headers)) {
		echo "Success";
	} else {
		echo "Error";
	}
}

?>
