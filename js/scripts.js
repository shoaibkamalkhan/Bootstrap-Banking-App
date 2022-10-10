/* API Code */

// This variable selects the url we are posting to.
const url = 'https://27979f46-0c53-4efb-9ef0-608da66d0ff9.mock.pstmn.io/userSessions';
// This variable selects the form element that we are submitting and posting.
const formEl = document.querySelector('form');

console.log(formEl);

// This sets up an event listener on the form element for the submit event.
formEl.addEventListener('submit', async (e) => {
	// This prevents the form from posting automatically.
	e.preventDefault();
	// This creates a formData variable that contains our posting data.
	const formData = {
		email: document.getElementById("email").value,
		password: document.getElementById("password").value
	};

	const formDataJsonString = JSON.stringify(formData);

	console.log(formData);

	// This posts our data using fetch.
	fetch(url, {
		method: 'POST',
		body: formDataJsonString,
	});

	console.log(formDataJsonString);
});


