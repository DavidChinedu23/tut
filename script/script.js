/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("body").style.marginLeft = "200px";
    document.getElementById("hide-button").style.display = "none";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.getElementById("hide-button").style.display= "block";
  } 

function openChildMenu(){
  document.getElementById("childMenu").style.width = "100px";
  document.getElementById("infoBiroKredit").onclick = "closeChildMenu()";
}

function closeChildMenu(){
  document.getElementById("childMenu").style.width = "0px";
  document.getElementById("infoBiroKredit").onclick = "openChildMenu()";
}

function validateForm(){
  var npwp = document.forms["infoDebiturForm"][""].value;
  if (npwp != [1-9]){
    npwp.classList.add("ok");
  }
}

function validateNpwp(){
  var npwp = document.forms["infoDeiturForm"]["inputNpwp"].value;
  npwp
}

$(document).ready(function() {
  $('#searchMain').click(function() {
      $('#search-Table-Main').show();
  });
});

function searchMain(){
  var x = document.getElementById("search-Table-Main");
  x.style.visibility='block';

  //searchValid();
}