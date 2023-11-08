function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Please enter you're Username");  
      return false;  
    }else if(password.length<8){  
      alert("Please enter you're password.");  
      return false;  
      }  
    }  