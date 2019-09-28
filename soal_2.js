<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		function username(username) {
			console.log(username);
			let patt = /[A-Za-z]{6}/;

			let result = username.match(patt);

			if(result) {
				console.log('true')
			}else {
				console.log('false')
			}
		}
		function password(pass) {
			/*
				pattern dari regex
				^7 => di awali dengan angka 7
				?=.*[A-Z]) => harus ada huruf kapital banyak atau  minimal 1 huruf
				(?=.*[a-z]) => harus ada huruf kecil banyak atau minimal 1 huruf
				(?=.*[0-9]) => harus ada huruf kecil banyak atau minimal 1 angka
				(?=.*?[#?!@$%^&*-]) harus ada huruf kecil banyak atau minimal 1 simbol
				.{5, 10} => minimal 5 sampai 10 digit
			*/
			let patt = /^7(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{5,10}/;

			//match fungsi javascript untuk mencocokan regex 
			let result = pass.match(patt);

			//cek jika regex dan password cocok 
			if(result) {
				console.log('true')
			}else{
				console.log('false!');
			}
		}

		username('Azhjil');

		password('7Af8G%HHH');
	</script>
</body>
</html>
