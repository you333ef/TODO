let inptpapa=document.getElementById("inptpapa");
let btnpapa=document.getElementById("btnpapa");
let tasks=document.getElementById("Tasks");
let EmptyArray=[];
 btnpapa.onclick=function click(){
    if(inptpapa.value ===""){
alert("You Must Write SomeThing..!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=inptpapa.value;
        tasks.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="  ×";
        li.appendChild(span)
    }
  
    inptpapa.value='';
    safedata()
}



//  لما حد يدوس على أي عنصر في الـ tasks:

// لو العنصر اللي دوس عليه كان LI:
// الكود هنا بيشوف إذا كان العنصر LI معاه الفئة "taskElement" ولا لا. إذا كانت موجودة، يشيلها، وإذا مش موجودة، يضيفها.
// لو العنصر اللي دوس عليه كان SPAN:
// الكود هنا بيشوف إذا كان العنصر اللي دوس عليه بتاع نوع span. لو كان، بيحذف العنصر اللي عليه ال SPAN.
// يعني بشكل عام، لما تدوس على عنصر LI في tasks، بيحط أو يشيل الفئة "taskElement" منه، ولما تدوس على عنصر SPAN، بيحذف العنصر اللي عليه.




tasks.addEventListener('click', function(e) {
    if (e.target.matches('li')) {
        e.target.classList.toggle("taskElement");
        safedata()
    } else if (e.target.matches('span')) {
        e.target.parentElement.remove();
        safedata()
    }
}, false);
function safedata(){
localStorage.setItem("data",tasks.innerHTML)
}
function SafeAllData(){
tasks.innerHTML=localStorage.getItem("data")
}
SafeAllData();


