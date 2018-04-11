<?php
	$host = 'host--localhost';
	$user = 'username';
	$password = 'password';
	$dbname = 'database_name';

	// Set DSN
	$dsn = 'mysql:host='. $host . ';dbname='. $dbname;

	// Create a PDO instance
	$pdo = new PDO($dsn, $user, $password);

	# PDO Query
	$stmt = $pdo->query("SELECT * FROM db_table_name ORDER BY RAND() LIMIT 1");

	// Display Quote
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		echo "<div class='col-sm' id='quote_body'>
	        	<blockquote class='blockquote text-right'>
	            	<p class='mb-0' id='quote_text'>". $row['quote_text'] ."</p>
	                <footer class='blockquote-footer' id='quote_title'>". $row['quote_title'] ."
	                <cite title='Source Title' id='quote_reference'>". $row['quote_reference'] ."</cite></footer>
	            </blockquote>
	          </div>";

	}


	// Close statment ($stmt)
	unset($stmt);

	// Close connection ($pdo)
	unset($pdo);
?>
