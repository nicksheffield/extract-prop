# extract-props

Delete a property from an object and return it

## Install

> npm install extract-prop

## Usage

```javascript
var extractProp = require('extract-prop');

var body = {
	name: 'frank',
	email: 'frank@example.com',
	populate: 'posts'
};

// this value exists in the object
var pop = extractProp(body, 'populate');
// this value doesn't exist in the object, but has a fallback value
var order = extractProp(body, 'order', 'default value');
// this value just doesn't exist in the object
var nonexistent = extractProp(body, 'nonexistent');

console.log(body);
/*
	will log: { name: 'frank', email: 'frank@example.com' }
*/

console.log(pop);
/*
	will log: 'posts'
*/

console.log(order);
/*
	will log: 'default value'
*/

console.log(nonexistent);
/*
	will log: undefined
*/
```