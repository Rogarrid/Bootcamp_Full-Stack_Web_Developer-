
var counter = 0;
while (counter <= document.querySelectorAll(".drum").length)
  document.querySelectorAll(".drum")[counter++].addEventListener("click", addSoundsTom);

function addSoundsTom ()
{
  alert("hola");
}
