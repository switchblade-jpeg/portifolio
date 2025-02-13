function mostrarmenu() {
    var x = document.getElementById("abas");
    if (x.style.display === "flex") {
        x.style.display = "none";
       
        menu = document.getElementById("menu-baixo")
        menu.animate([{
            transform: "translateY(700px)",
        }, { transform: "translateY(0px)",}], 
        {
        duration: 300, fill: "forwards",
        })
            }

    else {
        x.style.display = "flex";
        aba = document.getElementById("aba")
        menu = document.getElementById("menu-baixo")
menu.animate([{
    transform: "translateY(0)",
}, { transform: "translateY(500px)",}], 
{
duration: 300, fill: "forwards",
})
    }
    
}

function mostrarmenu() {
    var x = document.getElementById("abas");
    if (x.style.display === "flex") {
        x.style.display = "none";
       
        menu = document.getElementById("menu-baixo")
        menu.animate([{
            transform: "translateY(700px)",
        }, { transform: "translateY(0px)",}], 
        {
        duration: 300, fill: "forwards",
        })
            }

    else {
        x.style.display = "flex";
        menu = document.getElementById("menu-baixo")
menu.animate([{
    transform: "translateY(0)",
}, { transform: "translateY(700px)",}], 
{
duration: 300, fill: "forwards",
})
    }
    
}

