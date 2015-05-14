var extractProp = require('../extract-prop');

describe('extractProp()', function(){
	
	it('extract property', function(done){
		var body = {
			name: 'frank',
			email: 'frank@example.com',
			populate: 'posts'
		};
		
		if(extractProp(body, 'populate') === 'posts'){
			done();
		}else{
			throw 'property not extracted correctly';
		}
	});
	
	it('extract undefined property', function(done){
		var body = {
			name: 'frank',
			email: 'frank@example.com',
			populate: 'posts'
		};
		
		if(extractProp(body, 'order') === undefined){
			done();
		}else{
			throw 'extracted value was not undefined';
		}
	});
	
	it('default value used if property undefined', function(done){
		var body = {
			name: 'frank',
			email: 'frank@example.com',
			populate: 'posts'
		};
		
		if(extractProp(body, 'order', 'default') === 'default'){
			done();
		}else{
			throw 'default value did not work';
		}
	});
	
});