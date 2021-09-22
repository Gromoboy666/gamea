/********************** Очищаем divы со страницы *************/
function clear(elements){
  for (var i = 0; i < elements.length; i++){elements[i].style.display = "none";
  }
}

/*************** Показываем на странице divы для игры ***************/
function show(elements){
  for (var i = 0; i < elements.length; i++){elements[i].style.display = "block";}
  butOpen = document.getElementById("open").style.display = "block";
}

var buts = document.getElementsByClassName("button-hero");
var choiseHero = document.getElementsByClassName("hero");
var fight = document.getElementsByClassName("hide");

var header = document.getElementById("head");
var hero = 0
function begin(){
  for(var i = 0; i<buts.length; i++){
    buts[i].onclick = function(){
      header.innerHTML = this.value;
      if (this.value == "Чародей"){document.getElementById("my-hero").src = 'image/charer.png' ;}
      if (this.value == "Воин"){document.getElementById("my-hero").src = "image/Warrior.png";}
      if (this.value == "Ассасин"){document.getElementById("my-hero").src = "image/assasin.png";}
      clear(choiseHero) 
      show(fight)
    }
   
  }
  
}
