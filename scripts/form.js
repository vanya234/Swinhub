/*  either one works
module.exports = {

    Name: function() {
        return "hello";
    },

    nameTest: function(name) {
        return name;
    }
}    

module.exports = {
    idTest,
    nameTest,
    pwdTest
} */

var errorMsg = "Form failed to submit: \n";

function idTest(id) {

    id = id.trim();
    if (id.length != 0 )
    {
        if (id.match(/^[0-9]+$/))
        {
            if (id.length == 9)
                return id;
            else
                errorMsg += "Invalid Student ID format.\n";
        }
        else
            errorMsg += "Student ID must contain only numbers.\n";
    }
    else
        errorMsg += "Student ID must not be empty.\n"
        
}

function nameTest(name) {

    name = name.trim();
    if (name.length != 0)
    {
        if (name.match(/^[a-zA-Z]+$/))
        {
            if (name.length >= 4 && name.length <= 10)
                return name;
            else
                errorMsg += "Username should have between 4 and 10 alphabets.\n";
        }
        else
            errorMsg += "Username must contain only alphabets.\n"; 
    }
    else
        errorMsg += "Username must not be empty.\n";
    
}

function pwdTest(pwd) {

    pwd = pwd.trim();
    if (pwd.length != 0)
    {
        if (pwd.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/))
        {
            if (pwd.length >= 8 && pwd.length <= 20)
                return pwd;
            else
                errorMsg += "Password must be between 8 to 20 characters.\n";
        }
        else
            errorMsg += "Password must contain at least 1 lowercase, 1 uppercase and 1 number.\n";
    }
    else
        errorMsg +="Password must not be empty.\n";
}

function displayForm() {
    document.getElementById("selection").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function cancelForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("selection").style.display = "block";
}

function validateForm() {

    idTest(document.getElementById("id").value);
    nameTest(document.getElementById("uname").value);
    pwdTest(document.getElementById("pwd").value);
    
    if (!(document.getElementById("confirm").value == document.getElementById("pwd").value))
        errorMsg += "Passwords are not equal.\n";
     
    if (errorMsg.length == 0)
        alert("Form submitted.");
    else
        alert(errorMsg);
}




