let boxes=document.querySelectorAll(".box");
let points1=document.querySelector(".user");
let points2=document.querySelector(".computer");
let points3=document.querySelector(".winner");
boxes.forEach(box => {
    box.onclick = (e) => {
        let no=Math.floor(Math.random()*3);
        if(boxes[no].getAttribute("id")===box.getAttribute("id")){
            points3.innerText="its draw";
            console.log("no");
        }
        else if((boxes[no].getAttribute("id")==="Rock" && box.getAttribute("id")==="Paper")||
            (boxes[no].getAttribute("id")==="Paper"&&box.getAttribute("id")==="Scissor")||
            (boxes[no].getAttribute("id")==="Scissor"&&box.getAttribute("id")==="Rock")){
            points1.innerText=parseInt(points1.innerText)+1;
            points3.innerText="you are winner";console.log("no");
        }
        else{
            points2.innerText=parseInt(points2.innerText)+1;
            points3.innerText="computer is winner";console.log("no");
        }
    }
});


