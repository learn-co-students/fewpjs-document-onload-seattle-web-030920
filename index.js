document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateDOM()
  });

  function updateDOM(){
   let word = document.getElementById('text');
   word.innerHTML = "This is really cool!";
  }


