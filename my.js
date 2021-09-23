function onButtons(){
  butAtack = document.getElementById("atack").onclick = hitEnemy;
  butNext = document.getElementById("next").onclick = nextEnemy;
} 
onButtons()
function clearMessage(){
    document.getElementById("messageAtackEnemy").innerHTML = "";
    document.getElementById("messageAtack").innerHTML = "";
}
/************Генерация ***********/
function generate(min, max){
  return Math.floor(Math.random( ) * (max - min + 1)) + min;}

/************************ Атака врага  ********************************/

function hitEnemy(){
  
  // message = document.getElementById("messageAtackEnemy");
  // message.style.color ="white";
  atack = generate(5 + Math.floor(bonusAtack/2), 10 + bonusAtack);
  
  if ((enemyArmor-atack) > 0){
    enemyHealth-=0
    document.getElementById("messageAtack").innerHTML = "Вы нанесли "+0+" урона";
  } else {
    enemyHealth-=(atack-enemyArmor)
    document.getElementById("messageAtack").innerHTML = "Вы нанесли "+(atack-enemyArmor)+" урона";
  }
  document.getElementById("enemyHealth").innerHTML = "Здоровье: " + enemyHealth;
  if (enemyHealth <= 0){
    kills+=1;
    document.getElementById("chest").src="image/closeChest.png"
    butOpen = document.getElementById("open").onclick =  openChest;
    document.getElementById("kills").innerHTML = "Количество убийств: " +kills;
    clearMessage();
    // bonus = generate(1,3);
    document.getElementById("enemyName").innerHTML = "Враг убит";
    document.getElementById("enemyHealth").innerHTML = "";
    count = 0;
    generateChest()
    color = "#1d3b00";
    return kills;}
  if (health <= 0){
    clear(fight)
    document.getElementById("open").style.display = "none";
    alert("Вы проиграли")
  }
  if (enemyAtack-armor > 0){
    health-=(enemyAtack-armor)
    document.getElementById("messageAtackEnemy").innerHTML = "Вам нанесено "+(enemyAtack-armor)+" урона";
    document.getElementById("myHealth").innerHTML = health-(enemyAtack-armor);
  } else {
    health-=0
    document.getElementById("messageAtackEnemy").innerHTML = "Вам нанесено "+0+" урона";
  }

  /********************* Выводы сообщений  ***************/
  document.getElementById("messageKill").innerHTML = "";
  return health,  enemyHealth;}


/************ Кнопки атаки и смены противника *********************/


/************************ Смена противника ********************************/
count = 0
function nextEnemy(){
  if(count==3){alert("Третьего противника менять нельзя");}
  else{
  count+=1
  document.getElementById("enemy-hero").style.display = "block";
  document.getElementById("enemyName").innerHTML = "Гоблин "+count;
  enemyAtack = generate(Math.floor(1+kills/2),1+kills);
  enemyHealth = generate(15+kills,20+kills);
  enemyArmor = generate(Math.floor(1+kills/2),3+kills);
  document.getElementById("messageKill").innerHTML = "";
  document.getElementById("enemyAtack").innerHTML = "Атака: "+enemyAtack;
  document.getElementById("enemyHealth").innerHTML = "Здоровье: "+enemyHealth;
  document.getElementById("enemyArmor").innerHTML = "Броня: "+enemyArmor;
  document.getElementById("reward").style.display = "none";
  
  butAtack = document.getElementById("atack").onclick = hitEnemy;
  document.getElementById("chest").style.display="none";
  return enemyAtack, enemyHealth, enemyArmor}
}


/************************ Переменные игрока *************************/
var kills = 0
var bonusArmor = 0
var bonusAtack = 0
var health = 100;
var armor = 0;
var atack = generate(5,10);

/*********************** Переменные врага *************************/
var enemyAtack = generate(1,3);
var enemyHealth = generate(15,20);
var enemyArmor = generate(0,3);




/*************************Функция загрузки окна ************************/


window.onload = function(){
  begin();
}
