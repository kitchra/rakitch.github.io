function toggleActive(e) {
    "use strict";
    /* Toggles between "active" class */
    e.classList.toggle("active");
    
    /* Toggles showing the panel */
    var panel = e.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}