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

var pop = extractProp(body, 'populate');

console.log(body);
/*
	will log: { name: 'frank', email: 'frank@example.com' }
*/

console.log(pop);
/*
	will log: 'posts'
*/
```