var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
    //alert(myVar); //returning a ID value of the timer set
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

//change menu icon to cross symbol
function changeMenuIcon(x) {
    x.classList.toggle("change");
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

}