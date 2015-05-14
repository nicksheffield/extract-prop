/**
 * Delete a property from an object and return it.
 *
 * @param obj    Object  The object to remove the property from.
 * @param field  String  The name of the property to remove.
 * @param def    Mixed   If the property is not found on the object,
 *                       or is undefined, use this value instead.
 *
 * @return The value of the property you removed.
 **/
module.exports = function(obj, field, def) {
	var val = obj[field];

	delete obj[field];

	if (val === undefined) {
		val = def;
	}

	return val;
};