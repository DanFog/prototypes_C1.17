<!-- index_insert.php -->
<?php
  require_once("./mysql_connect.php");
  print_r($_POST);
  $query = "INSERT INTO `todo_items` SET `title`='{$_POST['title']}', `details`='{$_POST['details']}', `timestamp`='{$_POST['timestamp']}', `user_id`='7'";
  print($query);
  mysqli_query($conn, $query);

  if(mysqli_affected_rows($conn) > 0) {
    print(mysqli_affected_rows($conn)." rows were affected.");
  }
?>
