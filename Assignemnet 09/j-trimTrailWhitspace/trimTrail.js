// j) Trim leading and trailing whitespace from a string.
// Trim leading and trailing ==> remove white space from side but not remove from middle of string.

function removeSpace(str) {
    return str.trim()
}
var str = " Hello world "
console.log(removeSpace(str));

