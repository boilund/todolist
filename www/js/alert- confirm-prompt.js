// Never use alert, confirm and prompt in production
// - it scares the users and is superugly!

// Alert is a message to the user
alert('Hi there!');

// Confirm is asking yes/no ok/cancel
let happy = confirm('Are you happy?');
console.log('happy', happy);

// Prompt is asking for a string input
let name = prompt('What is your name?');
console.log('name', name);