<?php 
  if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
    $name      = htmlspecialchars( trim( $_POST["name"] ) );
    $phone     = htmlspecialchars( trim( $_POST["phone"] ) );
    $email     = (empty( htmlspecialchars(trim( $_POST["email"] )) )) ? 'Не указано' : $_POST['email'];
    
    $departure = htmlspecialchars( trim( $_POST["departure"] ) );
    $arrival   = htmlspecialchars( trim( $_POST["arrival"] ) );
    $type      = $_POST["type"];
    $services  = implode(", " ,$_POST["services"]);
    $weight    = htmlspecialchars( trim( $_POST["weight"] ) );
    $size      = htmlspecialchars( trim( $_POST["size"] ) );

    $to = 'avprinciple@gmail.com';
    $from = 'info@cargoin.ru';
    $subject = 'Заявка';
    $message = 'Имя: '. $name ."\r\n";
    $message .= 'Телефон: '. $phone ."\r\n";
    $message .= 'Почта: '. $email ."\r\n";

    $message .= '--------------------------------------------------'."\r\n";

    $message .= 'Пункт отправления: '. $departure ."\r\n";
    $message .= 'Пункт прибытия: '. $arrival ."\r\n";
    $message .= 'Тип перевозки: '. $type ."\r\n";
    $message .= 'Дополнительные услуги: '. $services ."\r\n";
    $message .= 'Вес: '. $weight ."\r\n";
    $message .= 'Объем: '. $size;

    $headers = array(
      'From' => $from,
      'Reply-To' => $from
    );

    define('SITE_KEY', '6LdPznEaAAAAANnpiWIdk0ZXrX2Hy55ChAb2uz5a');
    define('SECRET_KEY', '6LdPznEaAAAAAC4wfvEtBXqCpkWdUIdCfMiOzzuq');

    function getCaptcha($secretKey) {
      $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret="."6LdPznEaAAAAAC4wfvEtBXqCpkWdUIdCfMiOzzuq"."&response={$secretKey}");
      $return = json_decode($response);
      return $return;
    }

    $return = getCaptcha($_POST['g-recaptcha-response-request']);

    if($return->success == true && $return->score > 0.5) {
      mail($to, $subject, $message, $headers);
    }
  }