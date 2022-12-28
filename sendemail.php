
<?php

// require the smtpJS library
require_once('smtpJS.php');

// get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// set up the email
$to = 'solidernet.client@gmail.com';
$subject = 'New Message from Contact Form: ' . $subject;
$headers = 'From: ' . $name . ' <' . $email . '>';

// encrypt the password
$password = base64_encode('solidernet@1990');

// send the email using smtpJS
$mail = new smtpJS();
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->Username = 'your@email.com';
$mail->Password = $password;
$mail->SetFrom($email, $name);
$mail->Subject = $subject;
$mail->Body = $message;
$mail->AddAddress($to);
if(!$mail->Send()) {
    header('Location: contact.php');
  echo 'Error sending email: ' . $mail->ErrorInfo;
} else {
  header('Location: contact.php');
  echo 'Email sent successfully!';
}

?>

