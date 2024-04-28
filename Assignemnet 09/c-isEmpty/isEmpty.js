// c) Determine if a given string is empty.
function isEmpty(str) {
    if (str.length==0) {
        return true;
    }
    else{
        return false;
    }
}
var str = " ";
var res = isEmpty(str)
if (res == 1) {
    console.log("given string is empty");
}else{
    console.log("Non empty");
}