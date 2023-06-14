// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Submit form with AJAX
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
	e.preventDefault();

	const name = nameInput.value.trim();
	const email = emailInput.value.trim();
	const message = messageInput.value.trim();

	if (name === '' || email === '' || message === '') {
		alert('Please fill in all fields');
		return;
	}

	const data = new FormData();
	data.append('name', name);
	data.append('email', email);
	data.append('message', message);

	fetch('submit-form.php', {
		method: 'POST',
		body: data
	})
	.then(response => response.text())
	.then(data => {
		alert(data);
		form.reset();
	})
	.catch(error => console.log(error));
});

$(document).ready(function() {
    $('div#sidebar a').click(function() {
      // Hide all sections
      $('div#content > div').hide();
  
      // Show the selected section
      var section = $(this).attr('onclick').replace("showSection('", "").replace("')", "");
      $('#' + section).show();
    });
  });