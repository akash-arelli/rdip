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
  

var numb = Math.sqrt(val);
if(numb % 1 === 0)
{
return numb;
}
else
{
return numb.toFixed(3);

}
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

function palindrome()
{
    var g=0;
    var p=document.getElementById("string").value;
    var l=p.length;
     if(l==0)
     {
      alert("enter the word");
       return false; 
     
     }
     for(var i=0;i<=l/2;i++)
     {
       if(p.charAt(i)==p.charAt(l-1-i))
       {
         
       }
       else
       {
          g=1;
       }
       
     
     
     }
     if(g==1)
     {
       alert("given word is not a palindrome");
    return false; 
       
     
     }
     else
     {
        alert("given word is  a palindrome");
    return true; 
     
     }

}

function anagram()
{
    
    var word1=document.getElementById("word1").value;
    var word2=document.getElementById("word2").value;
    var length1=word1.length;
    var length2=word2.length;
   
     if(length1==0)
     {
      alert("enter the word no 1");
       return false; 
     
     }
     if(length2==0)
     {
      alert("enter the word no 2");
       return false; 
     
     }
     
     word1=word1.toLowerCase();
     word2=word2.toLowerCase();
     var sum1=0;
     var sum2 = 0;
    for (let i = 0; i < word1.length; i++) {
        sum1 = sum1 + word1.charCodeAt(i);
    }
    for (let j = 0; j < word2.length; j++) {
        sum2 = sum2 + word2.charCodeAt(j);
    }
     if(sum1===sum2)
     {
          alert("It is an anagram");
          return true; 
       
     
     }
     else
     {
        alert("not an anagram");
        return false; 
     
     }

}


/* odd numbers are assigned to cockroach 
even numbers are assigned to nuclear bomb
zero is assigned to human */
function game()
{
   var firstno=document.getElementById("firstno").value;
   var secondno=document.getElementById("secondno").value;
   if(firstno==0)
   {
       firstno=0;
   }
   else{
         if(firstno%2==0)
            {
                firstno=2;
             }
        else
           {
             firstno=1;
             }
   }
     if(secondno==0)
     {
       secondno=0;
      }
   else{
           if(secondno%2==0)
         {
              secondno=2;
        }
         else
          {
           secondno=1;
           }

         }
         if(firstno==secondno)
         {
             
                      
           return   document.write("It Is A Tie");
           
          
         }
         if(firstno==0&&secondno==1||firstno==1&&secondno==0)
         {
             
                      
           return   document.write("HUMAN SURVUVES");
           
          
         }
         if(firstno==1&&secondno==2||firstno==2&&secondno==1)
         {
             
                      
           return   document.write("COCKROACH SURVIVES");
           
          
         }
             if(firstno==0&&secondno==2||firstno==2&&secondno==0)
         {
             
                      
           return   document.write("HUMAN DIES");
           
          
         }
         
         
     }
     
     
     function display() {
    
    return  Math.floor((Math.random() * 1000) + 1);
    
}
     
     
     
     
     