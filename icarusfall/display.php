<?php
    // Send variables for the MySQL database class.
    $database = mysql_connect('icarusfall.db.10489956.hostedresource.com', 'icarusfall', 'Egz4qtop4!') or die('Could not connect: ' . mysql_error());
    mysql_select_db('icarusfall') or die('Could not select database');
 
    $query = "SELECT * FROM `accounts` ORDER by `moonscore` + 'sunscore' DESC LIMIT 10";
    $result = mysql_query($query) or die('Query failed: ' . mysql_error());
 
    $num_results = mysql_num_rows($result);  
 
    for($i = 0; $i < $num_results; $i++)
    {
         $row = mysql_fetch_array($result);
         echo $row['name'] . "\t" . " Moon: " . $row['moonscore'] . " Sun: " . $row['sunscore'] . "\n";
    }
?>