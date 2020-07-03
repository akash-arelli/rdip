   
    window.alert( 'Hello, world!' );

  var x=5;
  var y=6;
  document.write(x," ",y);
  console.log(x);
  console.log(y);
  var total=x+y;
  document.write("<br>");
  document.write(" total="+total);
  console.log(x+y);
  var num = [1,2,3,4,5];
  document.write("<br>");
  var str;
  
  for (i in num){
     str+=num[i].toString();
    
}
document.write("<br>");
document.write(str);
  
    function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


    

function myFunction1() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo2").value;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 100)   throw "is too high";
    if(x < 10)  throw "is too low";
    if(x>=10&&x<=100) throw "correct";
    
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("demo").value = "";
  }
}

function myFunction() {
  
  var x = document.getElementById("myTable");
  var row = x.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Average";
  cell2.innerHTML = "80";
  
}

function l(){
var k=0;
var l=1;
var sum=k;
var i;
var text = "";
for( i=0;i<5;i++)
{
   text += sum + "<br>";
 
   sum=k+l;
    k=l; 
     l=sum
  
  
}

   document.getElementById("demo1").innerHTML=text;
}

function myFunction2() {
var str = "This is doing the same job as the <link> element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).";
var pos = str.search("same");
var i;
var k;
var l;
var res="";
k=0;
for(i=0;5;i++)
{
   if(str[i]==" ")
   {
      k++;
   }  

   if(k==4)
   {
     for(l=i+2;str[l]!=" ";l++);
      res=str.substr(i,l-i);
      document.getElementById("demo8").innerHTML = res;
      break;
   }

}
}



function myFunction3() {
var str = "This is doing the same job as the <link> element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).";
var pos = str.search("same");
var i;
var k;
var l;
var res="";
k=0;
for(i=0;5;i++)
{
   if(str[i]==" ")
   {
      k++;
   }  

   if(k==6)
   {
     for(l=i+2;str[l]!=" ";l++);
      res=str.substr(i,l-i);
      document.getElementById("demo8").innerHTML = res;
      break;
   }

}
    
}





function myFunction4() {
var str = "This is doing the same job as the <link> element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).";
var pos = str.search("same");
var i;
var k;
var l;
var res="";
k=0;
for(i=0;5;i++)
{
   if(str[i]==" ")
   {
      k++;
   }  

   if(k==9)
   {
     for(l=i+2;str[l]!=" ";l++);
      res=str.substr(i,l-i);
      document.getElementById("demo8").innerHTML = res;
      break;
   }

}

}
