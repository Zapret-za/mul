var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
  modal.style.display = "block";
  document.documentElement.classList.add('lock1');
}
span.onclick = function() {
  modal.style.display = "none";
  document.documentElement.classList.remove('lock1');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}