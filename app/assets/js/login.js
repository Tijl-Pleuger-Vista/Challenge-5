function validateLoginForm(){  
    var email=document.loginForm.name.value;  
    var password=document.loginForm.password.value;  
      
    if (email==null || email==""){  
      alert("Please enter a valid email");  
      return false; 










    }else if(password.length<8){  
      alert("Please enter your password.");  
      return false;  
      }
    }  


























function validateSignupForm(){  
    var name=document.signupForm.name.value;  
    var password=document.signupForm.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<8){  
      alert("Password must be at least 8 characters long, with 2 special characters and a capital letter.");  
      return false;  
      }  
    }  