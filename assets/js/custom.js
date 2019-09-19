/*  Experience tab */
function openExp(evt, status) {
 // alert(111);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentExp");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinksExp");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(status).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if(document.body.contains(document.getElementById('defaultOpenExp'))){
    document.getElementById("defaultOpenExp").click();
}


/* Recommendations tab*/
function openTest(evt, status) {
  //alert();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(status).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if(document.body.contains(document.getElementById('defaultOpen'))){
    document.getElementById("defaultOpen").click();
}




