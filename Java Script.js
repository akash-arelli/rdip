 alert( 'Hello, world!' );

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

function myFunction() {
  var x = document.getElementById("myTable");
   var row = x.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
    cell1.innerHTML = "Average";
  cell2.innerHTML = "80";
  
}
document.write("<br>");
document.write(multiply(5));

function multiply(a, b = 1) {
  return a * b;
}
