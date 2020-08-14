var validation = () =>{
    var surname = document.tests.surname;
    var givenName= document.tests.givenName;
    var occupation = document.tests.occupation;
    var nationality = document.tests.nationality;
    var category = document.tests.category;

    if (surname.value.length == ""){
        name.style.border = '1px solid red';
        //alert("Please in put name");
        document.getElementById("message").innerHTML= "Invalid";
        document.getElementsById("message").style = 
        "color: red; font-family: Arial, Helvetica, sans-serif;";


    } else if (givenName.value.length == ""){
        name.style.border = '1px solid red';
        //alert("Please in put name");
        document.getElementById("message").innerHTML= "Invalid";
        document.getElementsById("message").style = 
        "color: red; font-family: Arial, Helvetica, sans-serif;";


    }else if (occupation.value.length == ""){
        name.style.border = '1px solid red';
        //alert("Please in put name");
        document.getElementById("message").innerHTML= "Invalid";
        document.getElementsById("message").style = 
        "color: red; font-family: Arial, Helvetica, sans-serif;";


    }else if (nationality.value.length == ""){
        name.style.border = '1px solid red';
        //alert("Please in put name");
        document.getElementById("message").innerHTML= "Invalid";
        document.getElementsById("message").style = 
        "color: red; font-family: Arial, Helvetica, sans-serif;";


    }else {
        name.style.border = '1px solid green';
        alert('Registration Successful');

    }
}