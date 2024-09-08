function changeColor(){
    let hexNumber = ["0","1","2","3","4","5","6","7","8","9","A",
    "B","C","D","E","F"];
    let hexcode ="";
    for(var i = 0;i < 3;i++){
        let randomIndex=Math.floor(Math.random()*hexNumber.length)
        hexcode +=hexNumber[randomIndex];
    }

    document.getElementById("hex-colors") = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#"+ hexcode;
    
}
function changeColor1(){
    let hexNumber = ["0","1","2"];
    let hexcode1 ="";
    for(var i = 0;i < 3;i++){
        let randomIndex=Math.floor(Math.random()*hexNumber.length)
        hexcode1 +=hexNumber[randomIndex];
    }
    document.getElementById("navbar")= hexcode1;
    document.getElementById("intro") = hexcode1;
    document.getElementsByTagName("h1")[0].style.background = "#"+ hexcode1;
    document.getElementById("Projects") = hexcode1;
    document.getElementsByTagName("h1")[0].style.background = "#"+ hexcode1;
	document.getElementsByClassName("tbox1")= hexcode1;
}
