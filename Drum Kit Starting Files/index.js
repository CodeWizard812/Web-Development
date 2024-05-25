for  (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){//in function argument can be any valid name not only event.
    makeSound(event.key);
    buttonAnimation(event.key);
});


    function makeSound(key) {
        switch (key) {
            case "w":
                var a = new Audio('./sounds/tom-1.mp3');
                a.play();
                break;
            case "a":
                var a = new Audio('./sounds/tom-2.mp3');
                a.play();
                break;
            case "s":
                var a = new Audio('./sounds/tom-3.mp3');
                a.play();
                break;
            case "d":
                var a = new Audio('./sounds/tom-4.mp3');
                a.play();
                break;
            case "j":
                var a = new Audio('./sounds/snare.mp3');
                a.play();
                break;
            case "k":
                var a = new Audio('./sounds/crash.mp3');
                a.play();
                break;
            case "l":
                var a = new Audio('./sounds/kick-bass.mp3');
                a.play();
                break;
            default:
                console.log(this.innerHTML);
                break;
        }
    }
    

function buttonAnimation(currentKey){
    var animationbutton = document.querySelector("." + currentKey);

    animationbutton.classList.add("pressed");

    setTimeout(function (){
        animationbutton.classList.remove("pressed");  
    }, 100);
}
