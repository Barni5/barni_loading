
szeretlekxd = new Object()
    szeretlekxd.staffcsapat = [
        { name: "Apad", role: "Idiota", Img: "kepek/capy.png" },
        { name: "Anyad", role: "Faszfej", Img: "kepek/capy.png" },
        { name: "Apad", role: "Idiota", Img: "kepek/capy.png" },
        { name: "Anyad", role: "Faszfej", Img: "kepek/capy.png" },
        { name: "Apad", role: "Idiota", Img: "kepek/capy.png" },
        { name: "Anyad", role: "Faszfej", Img: "kepek/capy.png" },
        { name: "Apad", role: "Idiota", Img: "kepek/capy.png" },
        { name: "Anyad", role: "Faszfej", Img: "kepek/capy.png" },
    ]
    
    szeretlekxd.serverDescriptioncolor = "#dfecec",

    szeretlekxd.ServerMaincolor = "#dfecec",

    szeretlekxd.ServerSecondaryColor = "#242424"


var servertitle = document.getElementById("servertitle")
var textcontainer = document.getElementById("textcontainer")

textcontainer.appendChild(servertitle)
servertitle.style.color = szeretlekxd.ServerMaincolor
servertitle.innerHTML = 'Szerver Neve'

var serverdescription = document.createElement("p")
textcontainer.appendChild(serverdescription)
serverdescription.style.color = szeretlekxd.serverDescriptioncolor
serverdescription.innerHTML = '- Napi fejlesztések'

var serverdescription2 = document.createElement("p")
textcontainer.appendChild(serverdescription2)
serverdescription2.style.color = szeretlekxd.serverDescriptioncolor
serverdescription2.innerHTML = '- Aktív Vezetőség'

var serverdescription3 = document.createElement("p")
textcontainer.appendChild(serverdescription3)
serverdescription3.style.color = szeretlekxd.serverDescriptioncolor
serverdescription3.innerHTML = '- 24/7 Elérhető segítség'

var serverdescription5 = document.createElement("p")
textcontainer.appendChild(serverdescription5)
serverdescription5.style.color = szeretlekxd.serverDescriptioncolor
serverdescription5.innerHTML = '- Köszönjük hogy minket választottál'

var szabalylink = document.getElementById("Szabaly")
var szabalyelement = document.getElementById("element2")
szabalylink.innerHTML = 'Szabalyzat';
szabalylink.style.color = szeretlekxd.ServerSecondaryColor;
szabalylink.style.backgroundColor = szeretlekxd.ServerMaincolor
szabalylink.addEventListener("click", function(){
window.location.href = 'https://barni5.hu/';
})

var StaffTitle = document.getElementById("stafftitle")

StaffTitle.style.color = szeretlekxd.ServerMaincolor

//STAFF TEAM
var stafflist = document.getElementById("stafflist")
var staffs = document.getElementById("staff")
var staffname = document.getElementById("staffname")

szeretlekxd.staffcsapat.forEach(function (staffcsapat) {
    var li = document.createElement("li");
    var h1 = document.createElement("h1");
    var img = document.createElement("img");
    var role = document.createElement("h2");
    li.appendChild(h1)
    h1.innerHTML = staffcsapat.name
    h1.style.fontSize = "3.4vh",
    h1.style.textTransform = "uppercase",
    role.style.fontSize = "3.4vh",
    role.style.textTransform = "uppercase",
    li.appendChild(img)
    li.appendChild(role)
    role.innerHTML = staffcsapat.role
    img.src = staffcsapat.Img
    li.style.backgroundColor  = szeretlekxd.ServerMaincolor
    li.style.color = szeretlekxd.ServerSecondaryColor   
    stafflist.appendChild(li);
});


// Music 
let audio = document.getElementById("aidop");
    
audio.src = '../zene/zene.mp3';
audio.volume = 0.07;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause()  
        }
    }
});