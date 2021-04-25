window.addEventListener("keydown", function(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    })
    function removeTransition(e) {
        if(e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }

    const keysSquad = document.querySelectorAll(".keyboard__key");

    keysSquad.forEach(key => key.addEventListener("transitionend", removeTransition));
