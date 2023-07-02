// learnt to use audio function & EventListener
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function () {
            var Key1 = this.innerHTML;
            document.querySelector("." + Key1).classList.add("pressed");
            playsound(Key1);
            setTimeout(function () {
                document.querySelector("." + Key1).classList.remove("pressed")
            }, 100);
        });
    
    document.addEventListener("keypress", function (event) {
        var key2 = (event.key);
        document.querySelector("." +key2).classList.add("pressed");
        playsound(key2);
        setTimeout(function () {
            document.querySelector("." + key2).classList.remove("pressed")
        }, 100);
    })

    function playsound(args) {
        switch (args) {
            case 'w':
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play();
                break;
            case 'a':
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                break;
            case 's':
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                break;
            case 'd':
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                break;
            case 'j':
                var audio = new Audio("sounds/snare.mp3")
                audio.play();
                break;
            case 'k':
                var audio = new Audio("sounds/crash.mp3")
                audio.play();
                break;
            case 'l':
                var audio = new Audio("sounds/kick.mp3")
                audio.play();
                break;
            default: console.log(innerInfo);
        }
    }

}
