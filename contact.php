<?php
// the message
$msg = "Name of Sender: " . $_GET["name"] . " Email of Sender: " . $_GET["email"] . " Message: " . $_GET["message"];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("jdbhartley@gmail.com",$_GET["subject"],$msg);
?>