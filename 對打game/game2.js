var wepon1 = document.getElementById("wepon1");
var player1 = document.getElementById("player1");
var lastKeyCode = null;

function attack(e){
    if(e.keyCode===32){
        if(lastKeyCode===37 ) wepon1.classList.add("attackl"), console.log("attackl success");
        else if(lastKeyCode===39 || lastKeyCode===null) wepon1.classList.add("attackr"), console.log("attackr success");
        
        

        wepon1.addEventListener('animationend', () => {
            if(lastKeyCode===37 ) wepon1.classList.remove('attackl');
            else if(lastKeyCode===39|| lastKeyCode===null) wepon1.classList.remove('attackr');
      });
    }

    if(e.keyCode===13){
        if(wepon1.style.animationName=="attackl" )wepon1.classList.remove('attackl');
        else if(wepon1.style.animationName=="attackr" ) wepon1.classList.remove('attackl');
    }
}




function move(event) {
    const stepSize = 10; // 控制每次移動的步伐大小
  
    // 取得當前物體位置的 left 和 top 值
    let left = parseInt(player1.style.left) || 0;
    
    switch (event.keyCode) {
      case 37: // 左箭頭鍵
        left -= stepSize;
        lastKeyCode = 37;
        break;
      
      case 39: // 右箭頭鍵
        left += stepSize;
        lastKeyCode = 39;
        break;
      default:
        return;
    }
  
    // 將新的位置套用到物體上
    if(left <0 || left>670) return;
    player1.style.left = left + 'px';
    console.log('player1 left position '+ left + 'px');
  }
