document.getElementById("modal").style.display = "none";

document.getElementById("addItem").onclick = function() {
    document.getElementById("modal").style.display = "block";
}

document.getElementById("modalClose").onclick = function() {
    document.getElementById("modal").style.display = "none";
}


function modalClose(){
    document.getElementById("modal").style.display = "none";
}