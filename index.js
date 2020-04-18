var drumBtnNumber = document.querySelectorAll(".drum").length;


for (var i=0;i<drumBtnNumber;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

function handleClick(){
  
  whichSound(this.innerHTML);
  
  btnAnimate(this.innerHTML);
  
}

document.addEventListener("keydown",function(event){
  
  whichSound(event.key);
  
  btnAnimate(event.key);
});



function whichSound(key){
  
  switch (key){
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "s":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "l":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    
    default:
  }
}

function btnAnimate(currentKey){
  
  var activeBtn = document.querySelector("." + currentKey);
  
  activeBtn.classList.add("pressed");
  
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  }, 100);
  
}