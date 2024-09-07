document.addEventListener("DOMContentLoaded",function(){
   const allBorder = document.getElementById("all");
   const borderElement = document.getElementById("border");
   const all_value = document.getElementById("all_value");
   const border_valueElement = document.getElementById("border_value");
   const code = document.getElementById("code");
   const container = document.querySelector(".container");
   const btncopy = document.getElementById("btncopy");
   const border_styleElement = document.getElementById("border_style");


   var all_radius = 10;
   var border_style="solid";
   var border_size=3;
   var coding = "";

   function allBorderUpdate(){
    all_radius=allBorder.value;
    border_size=borderElement.value;
    all_value.innerText= all_radius+"px";
    border_valueElement.innerText= border_size+"px";
    coding=`
    border-radius:${all_radius}px; 
    border:${border_size}px ${border_style} red
    ` ;
    code.value=coding;
    container.style.cssText=coding;

   }


   allBorder.addEventListener("mousemove",allBorderUpdate);
   allBorder.addEventListener("change",allBorderUpdate);

   borderElement.addEventListener("mousemove",allBorderUpdate);
   borderElement.addEventListener("change",allBorderUpdate);


   btncopy.addEventListener("click",function(){
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("code copied")

   });
   allBorderUpdate();
   border_styleElement.addEventListener("change",function(){
      border_style=this.value;
      allBorderUpdate();

   })

});