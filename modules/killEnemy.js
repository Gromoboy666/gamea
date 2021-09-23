/************** Убирает ненужные элементы и создает на поле сундук ***********/
var animation = anime({
  targets: '#chest',  
  rotate: {
    value: 360, 
    duration:2000, 
    delay: 0, 
    easing: 'easeInOutElastic',
  },
});
function generateChest(){
  document.getElementById("enemyAtack").innerHTML = "";
  document.getElementById("enemyHealth").innerHTML = "";
  document.getElementById("enemyArmor").innerHTML = "";
  document.getElementById("enemy-hero").style.display = "none";
  butAtack = document.getElementById("atack").onclick = null;
  butNext = document.getElementById("next").onclick =  null;
  butOpen = document.getElementById("open").onclick =  openChest;
  document.getElementById("chest").style.display="inline-block";
  butOpen = document.getElementById("open").style.display = "inline-block";
}

function openChest(){
  animation.play();
  setTimeout(() => {
    document.getElementById("reward").style.display = "block";
    play = generate(1,3);
    if (play == 1){
      document.getElementById("chest").src="image/openChest.png";
      document.getElementById("reward").innerHTML = generateBonus()}
    else if (play != 1 ) {
      document.getElementById("reward").innerHTML = "Сундук не открыт";}
    butNext = document.getElementById("next").onclick = nextEnemy;
    }, 2000)
  butOpen = document.getElementById("open").onclick =  null;
}
