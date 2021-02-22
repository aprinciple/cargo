<?php 
  if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
    $name  = htmlspecialchars( trim( $_POST["name"] ) );
    $phone = htmlspecialchars( trim( $_POST["phone"] ) );
    $email = (empty( htmlspecialchars(trim( $_POST["email"] )) )) ? 'Не указано' : $_POST['email'];
    // define('SITE_KEY', '6LdseuEUAAAAALw4N6MPyKyYlZLfl9R7FH9DR84T');
    // define('SECRET_KEY', '6LdseuEUAAAAAE-4s0FIvMe7bpcqUr4GDMvitwij');

    // function getCaptcha($secretKey) {
    //   $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret="."6LdseuEUAAAAAE-4s0FIvMe7bpcqUr4GDMvitwij"."&response={$secretKey}");
    //   $return = json_decode($response);
    //   return $return;
    // }

    // $return = getCaptcha($_POST['g-recaptcha-response-ask']);

    // if($return->success == true && $return->score > 0.5) {
    // }
    $to = 'avprinciple@gmail.com';
    $from = 'info@cargoin.ru';
    $subject = 'Обратная связь';
    $message = 'Имя: '. $name ."\r\n";
    $message .= 'Телефон: '. $phone ."\r\n";
    $message .= 'Почта: '. $email;
  
    $headers = array(
      'From' => $from,
      'Reply-To' => $from
    );

    mail($to, $subject, $message, $headers);
  }