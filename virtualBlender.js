function changeGlass() {
  if (
    document.getElementById("emptyGlass").src ==
    "https://thumbs.dreamstime.com/b/tasty-blueberry-smoothie-glass-white-background-126244025.jpg"
  ) {
    document.getElementById("emptyGlass").src =
      "https://www.maddisonsuk.com/WebRoot/BT3/Shops/BT4896/4AD4/72CA/5934/D604/2171/0A0A/33E7/7FDF/12oz_clear_tumbler_-_smoothie_cup_-_milkshake_cup_-_takeaway_-_wholesales.jpg";
    //document.getElementById("fillButton").innerHTML = "Fill another glass";
    document.querySelector("#fillButton").innerHTML = "Fill my glass!";
  } else {
    document.getElementById("emptyGlass").src =
      "https://thumbs.dreamstime.com/b/tasty-blueberry-smoothie-glass-white-background-126244025.jpg";
    document.querySelector("#fillButton").innerHTML = "Fill another glass!";
  }
}
function runGify1() {
  document.getElementById("magic").style.backgroundImage =
    "url('https://media2.giphy.com/media/5tvQPr9jj2ZfxE2EF3/giphy.gif')";
}
