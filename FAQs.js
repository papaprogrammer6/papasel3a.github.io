let minus =document.getElementById("minus");
  let plus1 =document.getElementById("plus1");
  let plus2 =document.getElementById("plus2");
  let plus3 =document.getElementById("plus3");
  let para =document.getElementById("para");
  let para1 =document.getElementById("para1");
  let para2 =document.getElementById("para2"); 
  let para3 =document.getElementById("para3");

  minus.addEventListener("click",()=>{
    para.classList.toggle("active")
    minus.src = para.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg" ;

  })

  plus1.addEventListener("click",()=>{
    para.classList.remove("active")
    para1.classList.toggle("active")
    minus.src = para.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg" ;
    plus1.src = para1.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg";
  })
  
  plus2.addEventListener("click",()=>{
    para1.classList.remove("active")
    para.classList.remove("active")
    para2.classList.toggle("active")
    minus.src = para.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg" ;
    plus1.src = para1.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg";
    plus2.src = para2.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg";
  })
  plus3.addEventListener("click",()=>{
    para1.classList.remove("active")
    para.classList.remove("active")
    para2.classList.remove("active")
    para3.classList.toggle("active")
    minus.src = para.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg" ;
    plus1.src = para1.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg";
    plus2.src = para2.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg";
    plus3.src = para3.classList.contains("active") ?  "icon-minus.svg":"icon-plus.svg";
  })