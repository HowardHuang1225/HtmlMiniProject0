var wepon1 = document.getElementById("wepon1");

function attack(){
    wepon1.classList.add("attack");
    console.log("slmdlmldsfmdsm");

    wepon1.addEventListener('animationend', () => {
        wepon1.classList.remove('attack');
      });
}


