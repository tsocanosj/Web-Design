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
   <p> this is another location to go to. </p>
   <button>Ha! This button doesn't do anything!</button>
   <script>
   function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
   </script>
  </body>
