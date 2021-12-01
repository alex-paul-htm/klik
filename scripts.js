var clickMon;
var clickAmount;
var clickSec;
var upgraded;
//screw you spoke don't steal this glorious code I made for the motherland!. its 2AM HELP!
//update 2am self is stupid, why would you do what you did to this poor code- 11 AM self.
function starterino() {
clickMon = 0;
  clickAmount = 1;
  // clickSec = 1;
  // alert("so did this :)");
  // click();
}
// setInterval(autoClick();, 1000);
function click() {
  //alert("this did too :o");
  clickMon += clickAmount;
  document.getElementById("score").innerHTML = clickMon;
}
document.addEventListener('keyup', function(e){
  if(e.keyCode == 32)
    click();
});
function upgrades(cost, clickAmo) {
  if(clickMon < cost) {
    alert("YOU ARE TOO POOR!!!!")
  }
  else {
  clickMon -= cost;
  clickAmount += clickAmo;
  document.getElementById("score").innerHTML = clickMon;
  upgraded = 1;
  }
}
function milestone(amount) {
  if(clickMon == amount){
    alert("you reached the milestone of " + amount + " congrats");
  }
  if(clickMon == amount && upgraded === 0){
    alert("you reached the milestone of " + amount + " without upgrading impressive")
  }
}
// function autoUp(cost, clickps){
//   if(clickMon < cost) {
//     alert("YOU ARE TOO POOR!!!!")
//   }
//   else {
//     clickSec += clickps;
//   }
// }
// function autoClick() {
//   clickMon += clickSec;
//   document.getElementById("score").innerHTML = clickMon;
// }