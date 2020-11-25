<!DOCTYPE html>
<html>
<head>
	<title>Практическое задание</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

	<div class="flex-container">

		<div class="header">
			<?php include 'header.inc.php' ?> 
		</div>
		
		<div class="main">
			<h1> <?php echo $p ?> </h1>
		</div>

		<div class="info">
			<img src="img/foto.png">
			<p> Меня зовут
				<?php echo  $name, ' ', $surname;?> <br>
				Мне 
				<?php echo $age; ?>
				лет.
				Проживаю в городе 
				<?php echo $city, '.'; ?>
			</p>	
		</div>

		<div class="knowledge">
			<p>
			<?php include 'knowledge.php' ?>
			<br>
			<?php 
			$a = 10;
			$b = 15;
			$c = $a * $b;
			echo 'Результат умножения ', $a, ' и ', $b, ' равен ', $c, '.<br>';
			?> 
			<?php 
			echo sum(19, 23);
			?>
			</p>
		</div>


	</div>
	<div>
		<?php include 'footer.inc.php' ?>
	</div>

</body>
</html>