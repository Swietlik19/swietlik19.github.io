<?php

  $name = $_POST['name'];
  $name = trim(urldecode(htmlspecialchars($name)));

  if (mail("es15may@mail.ru", "Заказ с сайта", "Имя:".$name,"From: example2@mail.ru \r\n"))
   { 
      echo "сообщение успешно отправлено"; 
  } else { 
      echo "при отправке сообщения возникли ошибки"; 
  }
?>
