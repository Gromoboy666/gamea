function generateBonus(){
  bonus = generate(1,5);
  switch(bonus){
    case 1:
      health += kills*5
      document.getElementById("myHealth").innerHTML = health;
      return health, "Бонус к здоровью +"+kills*5
    case 3:
      health += kills*5
      document.getElementById("myHealth").innerHTML = health;
      return health, "Бонус к здоровью +"+kills*5
    case 2:
      armor+= kills
      document.getElementById("myArmor").innerHTML = armor;
      return armor, "Бонус к броне +"+kills
    case 4:
      bonusAtack+= kills
      document.getElementById("myAtack").innerHTML = 5+Math.floor(bonusAtack/2)+"-"+ (10+bonusAtack);
      return bonusAtack, "Бонус к атаке +"+kills
    case 5:
      bonusAtack+= kills
      document.getElementById("myAtack").innerHTML = 5+Math.floor(bonusAtack/2)+"-"+ (10+bonusAtack);
      return bonusAtack, "Бонус к атаке +"+kills
  }
  // if(bonus==1){
  //   health += kills*5
  //   document.getElementById("myHealth").innerHTML = health;
  //   return health, "Бонус к здоровью +"+kills*5
  // } else if(bonus==2) {

  // }
}