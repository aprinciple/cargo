<?php 
  if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
    $name  = htmlspecialchars( trim( $_POST["name"] ) );
    $phone = htmlspecialchars( trim( $_POST["phone"] ) );
    $email = (empty( htmlspecialchars(trim( $_POST["email"] )) )) ? 'Не указано' : $_POST['email'];

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

    define('SITE_KEY', '6LdPznEaAAAAANnpiWIdk0ZXrX2Hy55ChAb2uz5a');
    define('SECRET_KEY', '');

    function getCaptcha($secretKey) {
      $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret="."KEY"."&response={$secretKey}");
      $return = json_decode($response);
      return $return;
    }

    $return = getCaptcha($_POST['g-recaptcha-response-ask']);

    if($return->success == true && $return->score > 0.5) {
      mail($to, $subject, $message, $headers);
    }
  }