/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

var testList = ["test"];  
document.addEventListener("DOMContentLoaded", function(){
  console.log("triggered");
  document.getElementById("testdiv").innerHTML = testList.map(poster =>
    <div>
      <a href="#">${poster}</a>
    </div>
  );
});