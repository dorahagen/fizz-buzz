$(document).ready(function() {

	var playFB = function () {

		var number = $('#entry').val();

		if (isNaN(+number) === true) {
			alert ("Please enter a number.");
			$('#entry').val('');
			$('#entry').focus();
		}

		if (+number <= 0) {
			alert ("Your number must be positive!");
			$('#entry').val('');
			$('#entry').focus();
		}

		for (var x = 1; x <= +number; x++) {

			if (x % 15 === 0) {
				$('#data').append('FizzBuzz');

			} else if (x % 3 === 0) {
				$('#data').append('Fizz');

			} else if (x % 5 === 0) {
				$('#data').append('Buzz');

			} else {
				$('#data').append(x);
			}

			$('#data').append('<br />');
			$('#entry').val('');
		}
	};

	$('#entry').focus();
	$('button').click(playFB);
	$('#entry').keyup(function(event) {
		if (event.keyCode == 13) {
			$('button').click();
		}
	});
});