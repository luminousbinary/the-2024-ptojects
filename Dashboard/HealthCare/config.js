
// Usualy this is done from the backend
// and the values are passed through from the envifonment variable
// so i am using this as an  this is an environment variable...
const username = 'coalition';
const password = 'skills-test';
const TOKEN = btoa(`${username}:${password}`);

export default TOKEN;

