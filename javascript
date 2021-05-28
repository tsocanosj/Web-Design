<!DOCTYPE html>
<html>
  <head>
    <title>Javascript</title>
    <link href="Style.css" type="text/css"
          rel="stylesheet" />
  </head>
  <body>
   <p> <a href= "Interest.html">Home</a> </p>
   <p> this is another location to go to. </p>
   <button id="doNot">Do Not Press This Button</button>
   
   <script>
           var dont = document.getElementById('doNot');
        dont.addEventListener('click', countdown);
        var countdown = function() {
       var number = 10
       println("Why did you do that? Now the world will end in " + number + " seconds");
        }
   </script>
  </body>
