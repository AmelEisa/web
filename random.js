var div=document.getElementById("nebraska")
function randomColor(){
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);

    document.getElementById("nebraska").style.backgroundColor="rgb("+r+","+g+","+b+")";
}
randomColor();