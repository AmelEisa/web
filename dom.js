
function displayMessage() {

    let MSG = document.getElementById("msg").value;
    const para = document.createElement("span");
    para.innerHTML = (MSG);
    para.style.paddingRight="10px"
    para.style.margin="10px"
    para.style.border="solid blue 0.5px"
    document.getElementById("showinputhere").appendChild(para);
    
    
    
    }