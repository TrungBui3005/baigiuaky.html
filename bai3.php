<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>In Dãy Số 1 đến 100</title>
    <link href="css/bai3.css" rel="stylesheet">
</head>
<body>
    <h1>Dãy Số Từ 1 Đến 100</h1>
    <hr>
    
    <div class="result-container">
        <?php
        for ($i = 1; $i <= 100; $i++) {
            if ($i % 2 == 0) {
                echo "<span class='even'>$i</span>";
            } else {
                echo "<span class='odd'>$i</span>";
            }
            if ($i % 10 == 0) {
                echo "<br>";
            }
        }
        ?>
    </div>
</body>
</html>