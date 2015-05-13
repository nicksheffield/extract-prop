module.exports = function(obj, field, def){
	var val = obj[field];
	
	delete obj[field];
	
	if(val === undefined){
		val = def ? def : '';
	}
	
	return val;
};