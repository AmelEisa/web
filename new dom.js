function Message() {

    let nom = document.getElementById("nom").value;

    const lala = document.createElement("span");
    lala.innerHTML = (nom);
    lala.style.paddingRight="10px"
    lala.style.margin="9px"
    lala.style.border="solid blue 0.5px"
    lala.style.backgroundColor="aquamarine"
    lala.style.color="blue"

    document.getElementById("seehere").appendChild(lala);
    
    
    
    }