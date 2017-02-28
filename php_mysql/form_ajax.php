<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script>
  function ajaxRequest() {
    $.ajax({
      method: 'POST',
      url: 'index_insert.php',
      dataType: 'text',
      data: {
        title: $("#title").val(),
        details: $("#details").val(),
        timestamp: $("#time").val(),
        favorite_game: $("#game").val()
      },
      success: function(response) {
        console.log(response);
      }
    });
  };
  </script>
  <title>Form Ajax</title>
</head>
<body>
  <form>
    <input type="text" id="title" name="Title" value="" placeholder="Title">
    <input type="text" id="details" name="Details" value="" placeholder="Details">
    <input type="text" id="time" name="Timestamp" value="" placeholder="Timestamp">
    <input type="text" id="game" name="Favorite Game" value="" placeholder="Favorite Game">
    <button type="button" onClick="ajaxRequest()" name="button">Submit</button>
  </form>
</body>
</html>
