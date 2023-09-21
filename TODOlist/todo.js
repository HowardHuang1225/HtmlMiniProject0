const content = document.querySelector('.contentframe');
let input = document.getElementById("input").value;

var todonum = 0;

function add(){
    input = document.getElementById("input").value;
    if(input!="" && input[0]!=" "){
        var newDiv = document.createElement("div");
        var p = document.createElement("p");
        var x = document.createElement("p");
        var y = document.createElement("p");
        y.className = "y";
        p.innerText = input;
        newDiv.className = "ct";
        x.className = "x";
        p.className = "p";
        newDiv.id = "ct" + todonum;
        x.innerText = "X";
        y.innerText = "Y";
        newDiv.appendChild(y);
        newDiv.appendChild(x);
        newDiv.appendChild(p);
        newDiv.draggable = "true";
        todonum++;
        content.appendChild(newDiv);
        document.getElementById("input").value = "";
            x.onclick = function (){
                this.parentNode.style.display = "none";
                // alert("remove "  + this.id + " successfully !!!");
                todonum--;
                todonum!=0?document.getElementById("text").innerText = "You have " + todonum + " thing(s) To Do.":document.getElementById("text").innerText = "You have nothing To Do..."; 
            };

//////////////////////////////////////////////////////////////////

            y.onclick = function (){
                this.parentNode.className = "ok";
                this.nextSibling.className = "okk";
                this.style.display = "none";
                //var par = this.parentNode;
               //setTimeout(function(){par.style.display = "none";},5000);
                // alert("remove "  + this.id + " successfully !!!");
                // todonum--;
                todonum!=0?document.getElementById("text").innerText = "You have " + todonum + " thing(s) To Do.":document.getElementById("text").innerText = "You have nothing To Do..."; 
            };

/////////////////////////////////////////////////////////////////////

            todonum!=0?document.getElementById("text").innerText = "You have " + todonum + " thing(s) To Do.":document.getElementById("text").innerText = "You have nothing To Do..."; 
    }
    document.getElementById("input").value = "";
}



function add1(event){
    if(event == 13){
        input = document.getElementById("input").value;
        if(input!="" && input[0]!=" "){
            var newDiv = document.createElement("div");
            var p = document.createElement("p");
            var x = document.createElement("button");
            var y = document.createElement("button");
            y.className = "y";
            p.innerText = input;
            newDiv.className = "ct";
            x.className = "x";
            p.className = "p";
            newDiv.id = "ct" + todonum;
            x.innerText = "  X";
            y.innerText = "Y";
            newDiv.appendChild(y);
            newDiv.appendChild(x);
            newDiv.appendChild(p);
            todonum++;
            newDiv.draggable = "true";
            content.appendChild(newDiv);
            document.getElementById("input").value = "";
            x.onclick = function (){
                this.style.display = "none";
                // alert("remove "  + this.id + " successfully !!!");
                // todonum--;
                todonum!=0?document.getElementById("text").innerText = "You have " + todonum + " thing(s) To Do.":document.getElementById("text").innerText = "You have nothing To Do..."; 
            };

            
            //////////////////////////////////////////////////////////////////

            y.onclick = function (){
                this.parentNode.className = "ok";
                this.nextSibling.className = "okk";
                this.style.display = "none";
                //var par = this.parentNode;
               //setTimeout(function(){par.style.display = "none";},5000);
                // alert("remove "  + this.id + " successfully !!!");
                todonum--;
                todonum!=0?document.getElementById("text").innerText = "You have " + todonum + " thing(s) To Do.":document.getElementById("text").innerText = "You have nothing To Do..."; 
            };

            /////////////////////////////////////////////////////////////////////



            todonum!=0?document.getElementById("text").innerText = "You have " + todonum + " thing(s) To Do.":"You have nothing To Do..."; 
        }
        document.getElementById("input").value = "";
    }
}

var inputt = document.getElementById("input");

inputt.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("addbtn").click();
    
    }
  });




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 获取可拖动的物体

//   var container = document.querySelector('.contentframe');
//   var draggable = document.querySelector('.ct');
//   var isDragging = false;
//   var originalPosition = { x: 0, y: 0 };
//   var offset = { x: 0, y: 0 };
  
//   draggable.addEventListener('mousedown', function (e) {
//       isDragging = true;
  
//       // 计算鼠标点击位置与物体左上角的偏移
//       offset.x = e.clientX - draggable.getBoundingClientRect().left;
//       offset.y = e.clientY - draggable.getBoundingClientRect().top;
  
//       // 存储原始位置
//       originalPosition.x = draggable.getBoundingClientRect().left;
//       originalPosition.y = draggable.getBoundingClientRect().top;
  
//       // 添加样式以改变物体外观
//       draggable.classList.add('dragging');
//   });
  
//   document.addEventListener('mousemove', function (e) {
//       if (isDragging) {
//           // 更新物体的位置
//           draggable.style.left = e.clientX - offset.x + 'px';
//           draggable.style.top = e.clientY - offset.y + 'px';
  
//           // 确定放置位置
//           var siblings = Array.from(container.children).filter(function (el) {
//               return el !== draggable;
//           });
  
//           var insertBefore = siblings.find(function (el) {
//               return e.clientY < el.getBoundingClientRect().top + el.clientHeight / 2;
//           });
  
//           if (insertBefore) {
//               container.insertBefore(draggable, insertBefore);
//           } else {
//               container.appendChild(draggable);
//           }
//       }
//   });
  
//   document.addEventListener('mouseup', function () {
//       isDragging = false;
  
//       // 移除拖动样式
//       draggable.classList.remove('dragging');
  
//       // 恢复原始位置
//       draggable.style.left = originalPosition.x + 'px';
//       draggable.style.top = originalPosition.y + 'px';
//   });
  