function allValid(){
    if (firstName() &&
        lastName() &&
        email() &&
        phone() &&
        username() &&
        password() &&
        address() &&
        city() && 
        state() &&
        country() &&
        zipcode())
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
};


FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};


LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
            validLastname = true;
            console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
};

Email.addEventListener('blur', email, false);
function email(){
        //1) Create variable
        var validEmail=false;

        //2) read value from HTML
        var email = document.getElementById("Email").value;
        var errorMessages = "";

        //rfc 5322
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        //Do validation
        if (email==="null" || email==="") {
            errorMessages += "<p>The email is required";
            console.log("Email invalid — empty")
          
        } else if (email.match(mailformat)===null) {
            errorMessages += "<p>Please enter a valid email adress</p>";
            console.log("Email invalid — does not match regex")
        } else {
            validEmail = true;
            console.log("Email valid")
        };

        //4) Send error message to HTML
        document.getElementById("em").innerHTML = errorMessages;

        //5) return status of each field
        return (validEmail);

};

Phone.addEventListener('blur', phone, false);
function phone(){
    //1) Create variable
    var validPhone=false;

    //2) read value from HTML
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    //regex
    var phoneformat = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    
    //Do validation
    if (phone==="null" || phone==="") {
        errorMessages += "<p>The phone number is required";
        console.log("Email invalid — empty")
        
    } else if (phone.match(phoneformat)===null) {
        errorMessages += "<p>Please enter a valid phone number</p>";
        console.log("Phone invalid — does not match regex")
    } else {
        validPhone = true;
        console.log("Phone valid")
    };

    //4) Send error message to HTML
    document.getElementById("ph").innerHTML = errorMessages;

    //5) return status of each field
    return (validPhone);
};

// started using something I'd have to moduify less per use here... hope scope keeps me safe
Username.addEventListener('blur', username, false);
function username(){
    //1) Create variable
    var validity=false;

    //2) read value from HTML
    var input = document.getElementById("Username").value;
    var errorMessages = "";

    //Do validation
    if (input==="null" || input==="") {
        errorMessages += "<p>The username is required";
        console.log("Username invalid — empty")
        
    } else if (input.length >= 12) {
        errorMessages += "<p>Username must be 12 caracters or less</p>";
        console.log("Username invalid — too long")
    } else {
        validity = true;
        console.log("Username valid")
    };

    //4) Send error message to HTML
    document.getElementById("usn").innerHTML = errorMessages;

    //5) return status of each field
    return (validity);

};

Password.addEventListener('blur', password, false);
function password(){
    //1) Create variable
    var validity=false;

    //2) read value from HTML
    var input = document.getElementById("Password").value;
    var errorMessages = "";

    //Do validation
    if (input==="null" || input==="") {
        errorMessages += "<p>The password is required";
        console.log("Password invalid — empty")
        
    } else if (input.length >= 7) {
        errorMessages += "<p>Password must be 7 caracters or less</p>";
        console.log("Password invalid — too long")
    } else {
        validity = true;
        console.log("Password valid")
    };

    //4) Send error message to HTML
    document.getElementById("pwd").innerHTML = errorMessages;

    //5) return status of each field
    return (validity);
};

Address.addEventListener('blur', address, false);
function address(){
        //1) Create variable
        var validity=false;

        //2) read value from HTML
        var input = document.getElementById("Address").value;
        var errorMessages = "";
    
        //Do validation
        if (input==="null" || input==="") {
            errorMessages += "<p>The address is required";
            console.log("Address invalid — empty")
        } else {
            validity = true;
            console.log("Address valid")
        };
    
        //4) Send error message to HTML
        document.getElementById("addr").innerHTML = errorMessages;
    
        //5) return status of each field
        return (validity);
};

City.addEventListener('blur', city, false);
function city(){
        //1) Create variable
        var validity=false;

        //2) read value from HTML
        var input = document.getElementById("City").value;
        var errorMessages = "";
    
        //Do validation
        if (input==="null" || input==="") {
            errorMessages += "<p>The city is required";
            console.log("City invalid — empty")
        } else {
            validity = true;
            console.log("City valid")
        };
    
        //4) Send error message to HTML
        document.getElementById("cty").innerHTML = errorMessages;
    
        //5) return status of each field
        return (validity);
};

State.addEventListener('blur', state, false);
function state(){
        //1) Create variable
        var validity=false;

        //2) read value from HTML
        var input = document.getElementById("State").value;
        var errorMessages = "";
    
        //Do validation
        if (input==="null" || input==="") {
            errorMessages += "<p>The state is required";
            console.log("State invalid — empty")
        } else {
            validity = true;
            console.log("State valid")
        };
    
        //4) Send error message to HTML
        document.getElementById("st").innerHTML = errorMessages;
    
        //5) return status of each field
        return (validity);
};

Country.addEventListener('blur', country, false);
function country(){
        //1) Create variable
        var validity=false;

        //2) read value from HTML
        var input = document.getElementById("Country").value;
        var errorMessages = "";
    
        //Do validation
        if (input==="null" || input==="") {
            errorMessages += "<p>The country is required";
            console.log("Country invalid — empty")
        } else {
            validity = true;
            console.log("Country valid")
        };
    
        //4) Send error message to HTML
        document.getElementById("na").innerHTML = errorMessages;
    
        //5) return status of each field
        return (validity);
};

ZipCode.addEventListener('blur', zipcode, false);
function zipcode(){
    //1) Create variable
    var validZip=false;

    //2) read value from HTML
    var zip = document.getElementById("ZipCode").value;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    //regex
    var zipcodeformat = /^[0-9]{5}(?:-[0-9]{4})?$/
    
    //Do validation
    if (country==="United States") {
        if (zip==="null" || zip==="") {
            errorMessages += "<p>The zip code is required";
            console.log("Email invalid — empty")
            
        } else if (zip.match(zipcodeformat)===null) {
            errorMessages += "<p>Please enter a valid zip code</p>";
            console.log("Zip code invalid — [0-9] and [-] only, 5-digit or 9-digit variant")
        } else {
            validZip = true;
            console.log("Zip valid")
        };
    } else {
        validZip = true;
        console.log("Zip not required")
    }
    
    //4) Send error message to HTML
    document.getElementById("zc").innerHTML = errorMessages;

    //5) return status of each field
    return (validZip);
};