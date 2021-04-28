// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  const txt =document.getElementById("text");
  txt.innerHTML="This is really cool!";
  document.body.append(txt);
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
