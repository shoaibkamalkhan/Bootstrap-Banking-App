/* API Code */

const signInForm = document.getElementById('sign-in-form');

signInForm.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {

/* This allows us to submit the form ourselves and not by browser default */
    event.preventDefault();
/* This gets the element which the event handler was attached to. */
    const form = event.currentTarget;
/* This takes the API URL from the form's `action` attribute. */
    const url = form.action;
}

console.log(signInForm);


// fetch('https://27979f46-0c53-4efb-9ef0-608da66d0ff9.mock.pstmn.io/userSessions', { method: 'POST'})
//     .then(results => results.json())
//     .then(console.log)
