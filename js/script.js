//btn animation
window.onload = function () {
  let node = document.querySelector(".btn-feat");
  node.addEventListener("click", function () { 
    if (node.classList.contains("roll-down")) {
      node.classList.remove("roll-down")
      node.classList.add("roll-up");
    } else {
      node.classList.remove("roll-up");
      node.classList.add("roll-down");
    } 
    
    console.log(node.classList);
  });
}