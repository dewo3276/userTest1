<?php
  $data_file = fopen("../timer.txt","a") or die("There is a problem");

  $time = $_POST;

  fwrite($data_file, $time);

  fclose($data_file);
?>
