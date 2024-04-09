var i=0;
var nodeList= document.querySelectorAll("button");
for(i=0;i<nodeList.length;i++){
    nodeList[i].addEventListener("click", function(){
         var sound1= this.innerHTML;
         soundMaker(sound1);
         makeAnimation(sound1);
    });
}

document.addEventListener("keypress", function(event){
 soundMaker(event.key);
 makeAnimation(event.key);
});

 function soundMaker(key){
 switch(key)
 {  case "w":
    var tom1= new Audio('./sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2= new Audio('./sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3= new Audio('./sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4= new Audio('./sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var crash= new Audio('./sounds/crash.mp3');
    crash.play();
    break;

    case "k":
    var kick= new Audio('./sounds/kick-bass.mp3');
    kick.play();
    break;

    case "l":
    var snare= new Audio('./sounds/snare.mp3');
    snare.play();
    break;
 }
 
 }

function makeAnimation(currentKey){
  var activeButton= document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
 activeButton.classList.remove("pressed");
  },100);

}