//general variables
var map=["s,e","w,e","w,e","w,s","e,s","s,w","e,s","w,s"
    ,"n,s","s","s","e,n,s","n,w,e","w,n","n","n,s"
    ,"n,e,s","w,n","n,s","s,n,e","w","s,e","w,e","w,n"
    ,"n,e,s","w,e","w,n,s","e,s,n","w,s,e","w,n","s,e","w"
    ,"n,s","s","e,n,s","w,n,e","w,n,e","w,e,s","w,n,e","win"
    ,"n,e,s","w,n","n,e","w,e","w","n,e","w,e","w,s"
    ,"n,e","w,s,e","s,e,w","w,s,e","w,e","w,s,e","w,s,e","w,s,n"
    ,"e","w,e,n","n,w","n,e","w,e","n,w,e","n,w,e","w,n"];
var battle=[1,7,10,13,17,25,49,55,61];
var treasure=[2,4,8,9,14,24,37,57,60];
var buy=[20,33,44];
var bank=0;
var cords=0;
var HP=5;
var movement=1;
var used=0;
var text="";
var step=0;
//sound variables
const music=new Audio("music.wav")
const gold=new Audio("pickup.wav");
const hit=new Audio("hit.wav");
const move=new Audio("move.wav");
const wall=new Audio("wall.wav");
const death=new Audio("death.wav");
const win=new Audio("win.wav");
const restart=new Audio("reset.wav");
//title editing
function changetitle(){
storytext();
end();
music.play();
var cord=document.getElementById("cord");
var roomE=document.getElementById("right");
var roomN=document.getElementById("up");
var roomS=document.getElementById("down");
var roomW=document.getElementById("left");
document.getElementById("room").innerHTML = "~~~~{Room: "+cords+"}~~~~";
document.getElementById("coins").innerHTML = "~~~~{Bank: "+bank+" Coins}~~~~";
document.getElementById("health").innerHTML = "~~~~{Health: "+HP+"/5}~~~~";
document.getElementById("description").innerHTML = text;
cord.innerHTML="~~~{"+map[cords].toUpperCase()+"}~~~";
if(step==0){
if (map[cords].includes("e")){
  roomE.innerHTML="~~~{"+map[cords+1].toUpperCase()+"}~~~";
}else{
  roomE.innerHTML="~~~{#,#}~~~";
}
}else{
roomE.innerHTML="~~~{#,#}~~~";
}
if(step==0){
if (map[cords].includes("n")){
  roomN.innerHTML="~~~{"+map[cords-8].toUpperCase()+"}~~~";
}else{
  roomN.innerHTML="~~~{#,#}~~~";
} 
}else{
roomN.innerHTML="~~~{#,#}~~~";
}
if(step==0){
if (map[cords].includes("s")){
  roomS.innerHTML="~~~{"+map[cords+8].toUpperCase()+"}~~~";
}else{
  roomS.innerHTML="~~~{#,#}~~~";
}  
}else{
roomS.innerHTML="~~~{#,#}~~~";
}
if(step==0){
if (map[cords].includes("w")){
  roomW.innerHTML="~~~{"+map[cords-1].toUpperCase()+"}~~~";
}else{
  roomW.innerHTML="~~~{#,#}~~~";
} 
}else{
roomW.innerHTML="~~~{#,#}~~~";
}
}
//win check
function end(){
if(map[cords].includes("win")){
win.play();
movement=0;
alert("You have won!!!!!");
}
}
//shop
function shop(){
if(buy.includes(cords)){
if(HP<5){
  if(bank>0){
    if(used==1){
      let index=buy.indexOf(cords);
      HP+=1;
      bank-=1;
      used=0;
      alert("You have purchased an extra life.");
      buy.splice(index,1);
      changetitle();
    }
  }else{
    alert("Not enough coins!");
  }
}else{
  alert("Alredy on max health!");
}
}
}
//fight check
function fight(){
if(used==1){
if(battle.includes(cords)){
  let index=battle.indexOf(cords);
  battle.splice(index,1);
  hit.play();
  used=0;    
  HP-=1;
  alert("You have taken damage!");
  changetitle();
  if(HP==0){
    death.play();
    movement=0;
  }  
}  
}
}
//treasure check
function check(){
if(used==1){
if(treasure.includes(cords)){
gold.play();
bank+=1; 
used=0;
alert("you found coins!");
let index=treasure.indexOf(cords);
treasure.splice(index,1); 
changetitle();
}  
}
}
//interaction conditions
function use(){
if(treasure.includes(cords)){
used=1;
check();
}
if(battle.includes(cords)){
used=1;
fight();
}
if(buy.includes(cords)){
used=1;
shop();
}
if(cords==56){
used=1;
stairs();
}
}
//stairs
function stairs(){
map=["s,e","w,s","s,e,s","w,e","w,s",
  "n,s","n","s,n","n,s","n,s",
  "n,e","w,e","w,n","n,s","win",
  "e,s","w,e","w,e,s","w,n,s","s",
  "n,e","w","n","w,e","n,w"];
battle=[2,7,10,18,24];
treasure=[5,11,20];
buy=[1,15];
cords=0;
step=1;
used=0;
changetitle();
}
//reset
function reset(){
restart.play();
cords=0;
bank=0;
HP=5;
used=0;
step=0;
map=["s,e","w,e","w,e","w,s","e,s","s,w","e,s","w,s"
    ,"n,s","s","s","e,n,s","n,w,e","w,n","n","n,s"
    ,"n,e,s","w,n","n,s","s,n,e","w","s,e","w,e","w,n"
    ,"n,e,s","w,e","w,n,s","e,s,n","w,s,e","w,n","s,e","w"
    ,"n,s","s","e,n,s","w,n,e","w,n,e","w,e,s","w,n,e","win"
    ,"n,e,s","w,n","n,e","w,e","w","n,e","w,e","w,s"
    ,"n,e","w,s,e","s,e,w","w,s,e","w,e","w,s,e","w,s,e","w,s,n"
    ,"e","w,e,n","n,w","n,e","w,e","n,w,e","n,w,e","w,n"];
treasure=[2,4,8,9,14,24,37,57,60];
battle=[1,7,10,13,17,25,49,55,61];
buy=[20,33,44];
movement=1;
changetitle();
}
//movement functions
function north(){
if(movement==1){
if(map[cords].includes("n")){
  if(step==0){
    if(map[cords-8].includes("s")){
      cords-=8;
      changetitle();
      move.play();
    }
  }else{
    if(map[cords-5].includes("s")){
      cords-=5;
      changetitle();
      move.play();
    }
  }
}else{
  wall.play();
}
}
}  
function south(){
if(movement==1){
if(map[cords].includes("s")){
  if(step==0){
    if(map[cords+8].includes("n")){
      cords+=8;
      changetitle();
      move.play();
    }
  }else{
    if(map[cords+5].includes("n")){
      cords+=5;
      changetitle();
      move.play();
    }
  }
}else{
  wall.play();
}
}
}        
function east(){
if(movement==1){
if(map[cords].includes("e")){
  if(map[cords+1].includes("w")){
    cords+=1;
    changetitle();
    move.play();
  }
}else{
  wall.play();
}
}
}        
function west(){
if(movement==1){
if(map[cords].includes("w")){
  if(map[cords-1].includes("e")){
    cords-=1;
    changetitle();
    move.play();
  }
}else{  
  wall.play();
}
}
}
//story text
function storytext(){
if(step==0){
if(cords==0){
  text="You find yourself inside of an old cellar, the walls are covered in moss and the walls are cold to the touch.";
}
if(cords==1){
  text="You are in a corridor, its walls are made from large rough-textured bricks and the floor is made from oak that has been worn down over many years of use. you can hear slight movements in the ground. There is a crack in the floor boards, large enough for you to fit your hand into it.(?)";
}
if(cords==2){
  text="This area has been blackened by the dark, you run your hands accros the wall in order to maintain your balance. you can feel cracks in parts of the wall and sompthing is reflecting flickers of light from within.(?)";
}
if(cords==3){
  text="You arrive at a corner,you can see lots of wooden support beams that are both holding the walls up and holding the craggy ceiling up.";
}
if(cords==4){
  text="In this old room you see tatterd tarps laying on the ground. you notice a bulge in the tarp, there is somthing under it.(?)";
}
if(cords==5){
  text="You enter a small corridor that turns sharply. Apon looking around you see large cobwebs scatered around the ceiling.";
}
if(cords==6){
  text="As you walk along this corridor the old wooden floorboards creak agressivly as the weight of your steps flexes the floor.";
}
if(cords==7){
  text="You find a room that has a prison cell of to the side of the room. the door to the cell is open. you see large gashes in the wall at the back of the cell.(?)";
}
if(cords==8){
  text="You enter a large, echoing room. in one of its corners you can see a small box resting apon a small pile of rubble. this box is locked however, on the opposite side of the room you can see an ornimental key jamed into ha crack in the wall.(?)";
}
if(cords==9){
  text="You have encounterd a dead end. The air is cold here and the cold has extinguished the candles on the candelabra above. At thr bace of the floor is a disloged brick, it is possible to move it.(?)";
}
if(cords==10){
  text="You have discoverd a dead end in the tangling maze of this castles basement. You step carefully as the floor has been eaten away by a colony of termites. looking deep into the hole you can see pure gold, but it would be hard to reach with the aggresive termites guarding it.(?)";
}
if(cords==11){
  text="You come across a fork in the corridor. On the old rock walls, there are torches fixed into it with large rusty bolts. You try, but you cant move any of the torches.";
}
if(cords==12){
  text="You are in a gloomy room that has 3 ways of travel. you look carefully around this room but dont find anything ut of the ordinary.";
}
if(cords==13){
  text="Apon entering this room, you can see a large chest siting in the midle of the room. as you look closely at it you see it move slightly.(?)";
}
if(cords==14){
  text="You ecounter a dead end, in the center of this room there is a large rustic table which has a bag full of coins. However as you look to the corner of the room you spot a large sleeping wolf. taking the bag could alert the monster to your presence.(?)";
}
if(cords==15){
  text="This corridoor echos with your footsteps, the corse stone ground grips tightly to your shoes.";
}
if(cords==16){
  text="You arrive at an intersection of corridoors, the air is cold and thin. you gaze towards the celing to find ice hanging from it.";
}
if(cords==17){
  text="As you walk into the room a barrel slides out of place revealing a door shaped crack in the wall.(?)";
}
if(cords==18){
  text="You can see rats scurried accros the ground and traveled through a crevice in the wall.";
}
if(cords==19){
  text="As you enter this room you notice a rotting old shelf, crumbling on the shatered cobblestone.";
}
if(cords==20){
  text="You enter a small chamber which has an overly decorated ceiling and walls advertising health potions. In the center of the room is a merchant offering potions for a small price.(?)";
}
if(cords==21){
  text="You enter a small corridoor, in the very corner there is a large compex of spider webs.";
}
if(cords==22){
  text="This coridoor is long and is lined with dim candles secured on the walls.";
}
if(cords==23){
  text="";
}
if(cords==24){
  text="(?)";
}
if(cords==25){
  text="(?)";
}
if(cords==26){
  text="";
}
if(cords==27){
  text="";
}
if(cords==28){
  text="";
}
if(cords==29){
  text="";
}
if(cords==30){
  text="";
}
if(cords==31){
  text="";
}
if(cords==32){
  text="";
}
if(cords==33){
  text="You enter a small chamber which has an overly decorated ceiling and walls advertising health potions. In the center of the room is a merchant offering potions for a small price.(?)";
}
if(cords==34){
  text="";
}
if(cords==35){
  text="";
}
if(cords==36){
  text="";
}
if(cords==37){
  text="(?)";
}
if(cords==38){
  text="";
}
if(cords==39){
  text="You have escaped the castle, congratulations!";
}
if(cords==40){
  text="";
}
if(cords==41){
  text="";
}
if(cords==42){
  text="";
}
if(cords==43){
  text="";
}
if(cords==44){
  text="You enter a small chamber which has an overly decorated ceiling and walls advertising health potions. In the center of the room is a merchant offering potions for a small price.(?)";
}
if(cords==45){
  text="";
}
if(cords==46){
  text="";
}
if(cords==47){
  text="";
}
if(cords==48){
  text="";
}
if(cords==49){
  text="(?)";
}
if(cords==50){
  text="";
}
if(cords==51){
  text="";
}
if(cords==52){
  text="";
}
if(cords==53){
  text="";
}
if(cords==54){
  text="";
}
if(cords==55){
  text="(?)";
}
if(cords==56){
  text="As you walk into this room you can see the outline of a staircase that leads further under the ground. It is pitch black.(?)";
}
if(cords==57){
  text="(?)";
}
if(cords==58){
  text="";
}
if(cords==59){
  text="";
}
if(cords==60){
  text="(?)";
}
if(cords==61){
  text="(?)";
}
if(cords==62){
  text="";
}
if(cords==63){
  text="";
}
}else{
text="As you enter the lower chamber the staircase colapses, blocking you deeper underground. this lower floor is extremly dark, preventing you from seeing rooms around you."
}
}