var rnum1 = Math.floor(Math.random() * 6) + 1;
var rnum2 = Math.floor(Math.random() * 6) + 1;
var rnum3 = Math.floor(Math.random() * 6) + 1;
var rnum4 = Math.floor(Math.random() * 6) + 1;
var img1 = "images/" + "dice" + rnum1 + ".png";
var img2 = "images/" + "dice" + rnum2 + ".png";
var img3 = "images/" + "dice" + rnum3 + ".png";
var img4 = "images/" + "dice" + rnum4 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);
document.querySelectorAll("img")[2].setAttribute("src", img3);
document.querySelectorAll("img")[3].setAttribute("src", img4);

var txt = "";

if ((rnum1 > rnum2) && (rnum1 > rnum3) && (rnum1 > rnum4)) {
  txt = "Satish Choses👍";
} else if ((rnum2 > rnum1) && (rnum2 > rnum3)&& (rnum2 > rnum4)) {
  txt = "Bindu Choses👍";
} else if ((rnum3 > rnum1) && (rnum3 > rnum2) && (rnum3 > rnum4)) {
  txt = "Akiro Choses👍";
} else if ((rnum4 > rnum1) && (rnum4 > rnum2) && (rnum4 > rnum3)) {
  txt = "Dhruv Choses👍";
}
  else {
    txt = "Draw - try again!";
  }

document.querySelector("h1").innerHTML = txt;
