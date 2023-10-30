<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'Sicko.com';
    $email_subject = 'New form submission';
    $email_body = "User Name: $name.\n".
                    "Subject: $subject.\n". 
                    "User Message: $message .\n";
    $to = 'bedohossam404@gmail.com';
    $headers = "from: $email_from \r\n";
    $headers .="Reply-to: $subject \r\r";
    mail($to , $subject , $email_body , $headers);

  
}
?>