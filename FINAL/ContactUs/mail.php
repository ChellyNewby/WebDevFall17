<?php
$fname = $_POST['fname'];
$flname = $_POST['lname'];
$email = $_POST['email'];
$reason=$_POST['reason'];
$message = $_POST['subject'];
$formcontent=" From: $fname $lname \n  Reason: $reason \n Message: $message";
$recipient = "raeannebaby@hotmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
