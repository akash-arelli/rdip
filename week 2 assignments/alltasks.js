   function dis(val) 
         { 
             return document.getElementById("result").value+=val; 
         } 
           
          
         function solve() 
         { 
             
             let x = eval(document.getElementById("result").value ) 
            
             return x;
         } 
           
         
         function clr() 
         { 
             return ""; 
         } 
         function abs(val) {
  
return Math.abs(val);
}

  function domath(val) {
  
return Math.sqrt(val);
}


function validateForm() {
  var x = document.forms["form1"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (!isNaN(x.charAt(0))) {
    alert("name cannot start with a number");
    return false;
  }
    var y = document.forms["form1"]["phone"].value;
  if (y == "") {
    alert("phone no: must be filled out");
    return false;
  }
  if (y.length!=10) {
    alert("fill all 10 digits");
    return false;
  }
  
  for(var i=0;i<y.length;i++)
  {
      if(isNaN(y.charAt(i)))
      {
          alert("phone no cannot contain alphabets");
    return false; 
      }
  
  }
      var z = document.forms["form1"]["email"].value;
  if (z == "") {
    alert("Email must be filled");
    return false;
  }
   var k=0;
   for(var i=0;i<z.length;i++)
  {
      if(z.charAt(i)=="@"||z.charAt(i)==".")
      {
          k++;
            
    
      }
      
  
  }
  if(k<2)
      {
           alert("Enter a valid email");
        return false;
      }
  
}
