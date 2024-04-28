// m) Check if a string is a valid email address.
function checkEmail(email) {
    if(email.includes('@') && email.includes('.com'))
    return "this is valid email"
else
    return "this is not valid email"
}
console.log(checkEmail("khangormani79@gmail.com"));
console.log(checkEmail("khangormani"));