var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
    //alert(myVar); //returning a ID value of the timer set
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

