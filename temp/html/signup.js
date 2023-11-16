function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<8){  
    alert("Password must be at least 8 characters long, with 2 special characters and a capital letter.");  
    return false;  
    }  
  }  