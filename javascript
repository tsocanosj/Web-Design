<!DOCTYPE html>
<html>
  <head>
  <div class="topnav" id="myTopnav">
  <a href="Interest.html" class="active">Home</a>
  <a href="Page2.html">Page 2</a>
  <a href="javascript">Javascript</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
    <title>Javascript</title>
    <link href="Style.css" type="text/css"
          rel="stylesheet" />
  </head>
  <body>
   <p> <a href= "Interest.html">Home</a> </p>
   <p> this is another location to go to. </p>
   <button id="doNot">Do Not Press This Button</button>
   
   <script>
   function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
           var dont = document.getElementById('doNot');
        dont.addEventListener('click', countdown);
        var countdown = function() {
       var number = 10
       println("Why did you do that? Now the world will end in " + number + " seconds");
        }
   </script>
  </body>
