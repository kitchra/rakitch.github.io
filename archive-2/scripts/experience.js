function toggleActive(e) {
    "use strict";
    /* Toggles between "active" class */
    e.classList.toggle("active");
    
    var x = document.getElementById(e);
    if (x.className.indexOf("hide") == -1) {
        x.className += "hide";
    } else {
        x.className = x.className.replace("hide", "");
    }
}
