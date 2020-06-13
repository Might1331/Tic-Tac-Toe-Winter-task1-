
//newGame button
var player1="n",player2="n",moveCount=0;
function wipe(){
    for(var i=0;i<9;++i){
      $(".square")[i].innerHTML="_";
    }
    $(".gameboard "+".X").addClass("hide");
    $(".gameboard "+".O").addClass("hide");
    $(".gameboard "+"._").addClass("hide");
    $(".gameboard "+".newGame").addClass("hide");
    $(".square").addClass("hide");
    moveCount=0;
    player1="n";
    player2="n";
}
$(".newGame").click(wipe);


// Checking if win has happened
function result(winner){
  $(".square").addClass("hide");
  $(".gameboard "+"."+winner).removeClass("hide");
  $(".gameboard "+".newGame").removeClass("hide");
  console.log(winner);
  if(winner!=="_"){
    var ans=Number($("."+winner+"-score")[0].innerHTML)+1;
    $("."+winner+"-score")[0].innerHTML=ans;
  }
}
function whowon(){
  var arr=$(".square");
  var winner="n";
  for(var i=0;i<9;i=i+3){
    if((arr[i].innerHTML===arr[i+1].innerHTML && arr[i+1].innerHTML===arr[i+2].innerHTML) && arr[i].innerHTML!=="_"){
      winner=arr[i].innerHTML;
      result(winner);
    }
  }
  for(var i=0;i<3;++i){
    if((arr[i].innerHTML===arr[i+3].innerHTML && arr[i+3].innerHTML===arr[i+6].innerHTML) && arr[i].innerHTML!=="_"){
      winner=arr[i].innerHTML;
      result(winner);
    }
  }
  if((arr[0].innerHTML===arr[4].innerHTML && arr[4].innerHTML===arr[8].innerHTML) && arr[0].innerHTML!=="_"){
    winner=arr[0].innerHTML;
    result(winner);
  }
  if((arr[2].innerHTML===arr[4].innerHTML && arr[4].innerHTML===arr[6].innerHTML) && arr[2].innerHTML!=="_"){
    winner=arr[2].innerHTML;
    result(winner);
  }
  var temp=0;
  for(var i=0;i<9;++i)
  {
    if(arr[i].innerHTML==="_")
      ++temp;
  }
  if(temp===0){
    result("_");
    return "_";
  }
  return winner;
}


// 1v1 game button
$(".1v1").click(function(){
  wipe();
  player1=this.classList[1];
  console.log(this.classList[1]);
  if(player1==="X")
    player2="O";
  else
    player2="X";
    $(".square").removeClass("hide");
});

// active gameboard
$(".square").click(function(){
  if(player1==="X"){
    if(moveCount%2==0)
      this.innerHTML="X";
    else
      this.innerHTML="O";
    ++moveCount;
  }
  else if(player1==="O"){
    if(moveCount%2==0)
      this.innerHTML="O";
    else
      this.innerHTML="X";
    ++moveCount;
  }
  console.log(whowon());
});

//solo game button
