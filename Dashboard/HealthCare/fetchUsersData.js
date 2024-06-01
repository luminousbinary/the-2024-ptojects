// The username and password
// DO NOT store credentials in your JS file like this
// asume the data is being called from a serer
import TOKEN  from "./config.js";
let url= 'https://fedskillstest.coalitiontechnologies.workers.dev' ;

// Authenticate (dummy API)
fetch(url, {
	headers: {
		'Authorization': `Basic ${TOKEN}`
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn(error);
});
