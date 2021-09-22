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
  atack = generate(5 + bonusAtack, 10 + bonusAtack);
  enemyHealth-=atack
  document.getElementById("messageAtack").innerHTML = "Вы нанесли "+atack+" урона";
  document.getElementById("enemyHealth").innerHTML = "Здоровье: " + enemyHealth;
  if (enemyHealth <= 0){
    kills+=1;
    document.getElementById("chest").src="image/closeChest.png"
    butOpen = document.getElementById("open").onclick =  openChest;
    document.getElementById("kills").innerHTML = kills;
    clearMessage();
    // bonus = generate(1,3);
    document.getElementById("enemyName").innerHTML = "Враг убит";
    document.getElementById("enemyHealth").innerHTML = "";
    generateChest()
    color = "#1d3b00";
    // if (bonus == 1){
    //   health += 5*kills;
    //   document.getElementById("myHealth").innerHTML = health;
    //   message.style.color = color;
    //   message.innerHTML = "Вы получили бонус к здоровью: " + 5*kills}
    // else if (bonus == 2){
    //   armor += kills; 
    //   document.getElementById("myArmor").innerHTML = armor;
    //   message.style.color = color;
    //   message.innerHTML = "Вы получили бонус к броне: "+ kills}
    // else if (bonus == 3){
    //   bonusAtack += kills; 
    //   document.getElementById("myAtack").innerHTML = (5+bonusAtack) + "-" + (10+bonusAtack)
    //   message.style.color = color;
    //   message.innerHTML = "Вы получили бонус к атаке: "+kills;}
    return kills;}

  /********************* Выводы сообщений  ***************/
  document.getElementById("messageKill").innerHTML = "";
  document.getElementById("myHealth").innerHTML = health-enemyAtack;
  document.getElementById("messageAtackEnemy").innerHTML = "Вам нанесено "+enemyAtack+" урона";
  return health-=enemyAtack,  enemyHealth;}


/************ Кнопки атаки и смены противника *********************/


/************************ Смена противника ********************************/
count = 0
function nextEnemy(){
  
  enemyAtack = generate(1,3);
  enemyHealth = generate(15,20);
  enemyArmor = generate(0,3);
  document.getElementById("messageKill").innerHTML = "";
  document.getElementById("enemyAtack").innerHTML = "Атака: "+enemyAtack;
  document.getElementById("enemyHealth").innerHTML = "Здоровье: "+enemyHealth;
  document.getElementById("enemyArmor").innerHTML = "Броня: "+enemyArmor;
  document.getElementById("reward").style.display = "none";
  
  butAtack = document.getElementById("atack").onclick = hitEnemy;
  document.getElementById("chest").style.display="none";
  return enemyAtack, enemyHealth, enemyArmor}


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
