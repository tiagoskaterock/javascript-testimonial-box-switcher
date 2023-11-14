<!DOCTYPE html>
<html>
<head>
	<title>JavaScript Testimonial Box Switcher</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>	

	<div class="testimonial-container">
		<div class="progress-bar"></div>
		<div class="fas fa-quote-right fa-quote"></div>
		<div class="fas fa-quote-left fa-quote"></div>

		<p class="testimonial">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>		

		<div class="user">
			<img 
				src="http://randomuser.me/api/portraits/women/<?= rand(1, 99) ?>.jpg" 
				alt="User Image" 
				class="user-image"
			/>
			<div class="user-details">
				<h4 class="username">
					Melissa Santos
				</h4>
				<p class="role">
					Marketing
				</p>
			</div>
		</div>
		
	</div>

	<script src="script.js"></script>

</body>
</html>
