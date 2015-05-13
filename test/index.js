var extractProp = require('../extract-prop');

var body = {
	name: 'frank',
	email: 'frank@example.com',
	populate: 'posts'
};

var pop = extractProp(body, 'populate');

var tests = [
	body.populate === undefined,
	pop === 'posts'
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