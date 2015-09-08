<!DOCTYPE html>
<html>
	<head>
		<title>Nouveau compte</title>
	</head>
	<body>
		<form action="createForm.php" method="post">
			<div>
				Nom :
				<input type="text" name="firstname">
			</div>
			<div>
				Prénom :
				<input type="text" name="lastname">
			</div>
			
			<br/>
			<br/>
			
			<div>
				Date de naissance :
				<input type="date" name="birthday">
			</div>
			<div>
				Identifiant :
				<input type="text" name="login">
			</div>
			
			<br/>
			<br/>
			
			<div>
				Mot de passe :
				<input type="text" name="password1">
			</div>
			<div>
				Confirmez votre mot de passe :
				<input type="text" name="password2">
			</div>
			
			<br/>
			<br/>
			
			<div>
				<input type="submit" name="submit">
			</div>
		</form>
	</body>
</html>