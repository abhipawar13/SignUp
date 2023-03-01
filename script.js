var form = document.querySelector('form');
var errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirm-password').value;

	if (!username || !password || !confirmPassword) {
		errorMessage.textContent = 'Please fill all the fields';
	} else if (password.length < 6) {
		errorMessage.textContent = 'Password should be at least 6 characters long';
	} else if (password !== confirmPassword) {
		errorMessage.textContent = 'Passwords do not match';
    }else if (password == confirmPassword) {
		errorMessage.textContent = 'Successfully signUp';
    }
	else {
		errorMessage.textContent = '';
		form.submit();
	}
});
