function validateLoginForm(){
    var email=document.loginForm.email.value;
    var password=document.loginForm.password.value;

    if (email==null || email==""){  
      alert("your email");  
      return false;
  }
    else if(password.length<8){  
      alert("your password");  
      return false;
  }
}

function validateSignupForm(){  
    var email=document.loginForm.email.value;
    var name=document.signupForm.name.value;  
    var password=document.signupForm.password.value;  
      
    if (email==null || email==""){  
      alert("something@something.something");  
      return false;  
  }
    else if (name==null || name==""){  
      alert("anything");  
      return false;  
  }
    else if(password.length<8){  
      alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");  
      return false;  
  }  
}  