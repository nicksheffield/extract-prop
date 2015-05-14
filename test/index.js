var extractProp = require('../extract-prop');

var body = {
	name: 'frank',
	email: 'frank@example.com',
	populate: 'posts'
};

var pop = extractProp(body, 'populate');
var doesntExist = extractProp(body, 'doesntExist');
var order = extractProp(body, 'order', 'default value');

var tests = [
	body.populate === undefined,
	pop === 'posts',
	doesntExist === undefined,
	order === 'default value'
];

for(var i=0; i<tests.length; i++){
	console.log(i, tests[i]);
}
console.log('=======');
var pass = tests.reduce(function(bool, old){
	return old && bool;
}, true);
if(pass){
	console.log('All tests passed');
}else{
	console.log('Some tests failed');
}