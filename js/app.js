$(document).ready(function() {
	for (var x = 1; x <= 100; x++) {

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
	}
});