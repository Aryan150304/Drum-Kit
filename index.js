var name= prompt("Hey! Welcome to Drum kit made by Aryan. Tell me your name");
// Adding Event listeners to our buttons
for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
  console.log(event);
     var soundDecide =this.textContent;
    makeSound(soundDecide);
    buttonAnimation(soundDecide);

  });
}

document.addEventListener("keydown",  function(event){
  // you can give any name in function
   var keyDetector = event.key;
   makeSound(keyDetector);
   buttonAnimation(keyDetector);

});



function makeSound(name)
{
  switch (name) {
    case 'w':
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('snare.mp3');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('crash.mp3');
      audio.play();
      break;

    case 'l':
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;

    default:
      alert(name+" you have pressed a wrong button");
  };
}

function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");

setTimeout( function() {
  document.querySelector("."+currentKey).classList.remove("pressed");
},100);



};
