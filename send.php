<?php
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = "helaliismail@email.com";

  // Set the email subject and body
  $subject = "Message from $name";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  // Send the email
  mail($to, $subject, $body);
?>
