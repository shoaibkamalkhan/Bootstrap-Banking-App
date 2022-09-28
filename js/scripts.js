/* API Code */

// This variable selects the url we are posting to.
const url = 'https://27979f46-0c53-4efb-9ef0-608da66d0ff9.mock.pstmn.io/userSessions';

// This variable selects the form element that we are posting.
const formEl = document.querySelector('form');

console.log(formEl);

// This sets up an event listener on the form element for the submit event.
formEl.addEventListener('submit', async (e) => {
	// This prevents the form from posting automatically.
	e.preventDefault();
	// This creates a new FormData object.
	const formData = {
		email: document.getElementById("email").value,
		password: document.getElementById("password").value
	};
	console.log(formData);
	
	fetch(url, {
		method: 'POST',
		body: formData,
	});
});



// // This variable selects the url we are posting to.
// const url = 'https://27979f46-0c53-4efb-9ef0-608da66d0ff9.mock.pstmn.io/userSessions';

// // This variable selects the form element that we are posting.
// const formEl = document.querySelector('form');

// console.log(formEl);

// // This sets up an event listener on the form element for the submit event.
// formEl.addEventListener('submit', async (e) => {
// 	// This prevents the form from posting automatically.
// 	e.preventDefault();
// 	// This creates a new FormData object.
// 	const formData = new FormData(formEl);
// 	// This serializes the FormData object.
// 	const formDataSeralized = Object.fromEntries(formData);

// 	console.log(formDataSeralized, 'formDataSeralized');
// 	console.log(formData, 'formData');

// 	// This is a try catch statement that performs the POST with fetch.
// 	try {
// 		const response = await fetch(url, {
// 			method: 'POST'
// 		});
// 		const json = await response.json();
// 		console.log(json);
// 	} catch (e) {
// 		console.error(e);
// 	}

// });


// const signInForm = document.getElementById('sign-in-form');

// signInForm.addEventListener('submit', handleFormSubmit);

// async function handleFormSubmit(event) {

// /* This method allows us to submit the form ourselves and not by the browser default */
//     event.preventDefault();
// /* This variable gets the element which the event handler is attached to. */
//     const form = event.currentTarget;
// /* This gets the API URL from the form's `action` attribute. */
//     const url = form.action;

//     try {
//         /* This takes all the fields in the form and makes their values
// 		 * available through a `FormData` instance. */
//         const formData = {
// 			email: document.getElementById("email").value,
// 			password: document.getElementById("password").value
// 		};
//         /* We'll define the `postFormDataAsJson()` function in the next step. */
//         const responseData = await postFormDataAsJson({ url, formData });
//         console.log({ responseData });
//         } catch (error) {
// 		console.error(error);
// 	}
	
// }

// async function postFormDataAsJson({ url, formData }) {
//     const plainFormData = formData;
// 	const formDataJsonString = JSON.stringify(plainFormData);

// 	const fetchOptions = {
// 		/**
// 		 * The default method for a request with fetch is GET,
// 		 * so we must tell it to use the POST HTTP method.
// 		 */
// 		method: "POST",
// 		/**
// 		 * These headers will be added to the request and tell
// 		 * the API that the request body is JSON and that we can
// 		 * accept JSON responses.
// 		 */
// 		headers: {
// 			"Content-Type": "application/json",
// 			"Accept": "application/json"
// 		},
// 		/**
// 		 * The body of our POST request is the JSON string that
// 		 * we created above.
// 		 */
// 		body: formDataJsonString,
// 	}

//     const response = await fetch(url, fetchOptions);

// 	if (!response.ok) {
// 		const errorMessage = await response.text();
// 		throw new Error(errorMessage);
// 	}

// 	return response.json();

// }



// console.log();


// fetch('https://27979f46-0c53-4efb-9ef0-608da66d0ff9.mock.pstmn.io/userSessions', { method: 'POST'})
//     .then(results => results.json())
//     .then(console.log)

// 	const formData = {
// 		email: document.getElementById("email").value,
// 		password: document.getElementById("password").value
// 	};