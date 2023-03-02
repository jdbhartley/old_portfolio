<?php 
        $db = mysql_connect('icarusfall.db.10489956.hostedresource.com', 'icarusfall', 'Egz4qtop4!') or die('Could not connect: ' . mysql_error()); 
        mysql_select_db('icarusfall') or die('Could not select database');
 
        // Strings must be escaped to prevent SQL injection attack. 
        $name = mysql_real_escape_string($_GET['name'], $db); 
		$email = mysql_real_escape_string($_GET['email'], $db);
        $moonscore = mysql_real_escape_string($_GET['moonscore'], $db); 
		$sunscore = mysql_real_escape_string($_GET['sunscore'], $db); 
        $hash = $_GET['hash']; 
 
        $secretKey="pandafox"; # Change this value to match the value stored in the client javascript below 

        $real_hash = md5($name . $email . $moonscore . $sunscore . $secretKey); 
        if($real_hash == $hash) { 
            // Send variables for the MySQL database class. 
	    $query = "UPDATE accounts SET moonscore = " . $moonscore . ", sunscore = " . $sunscore . " WHERE name = '" . $name . "'";
        $result = mysql_query($query) or die('Query failed: ' . mysql_error()); 
        } 
?>
