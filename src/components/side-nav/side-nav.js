/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

var testList = ["test1","test2"];  
document.addEventListener("DOMContentLoaded", function(){
  console.log("triggered new");
  document.getElementById("testdiv").innerHTML = testList.map(poster =>
    '<a href="#">'+poster+'</a>'
  ).join('')
});