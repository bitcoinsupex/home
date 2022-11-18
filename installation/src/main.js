
const visor={

    page:function(){

    const pages=Object.values(document.querySelectorAll(".page"))
    pages.map(x=>{
       
    var resolution=1.4        
    if(window.innerWidth > 770)
    resolution=2.2

    
    x.style.width=(window.innerWidth/resolution)+'px'
    })
     //   page.style.height=window.innerHeight/1.1    +'px'
    

    }
}

visor.page()


window.addEventListener("resize",function(){


    visor.page()
    console.log(3)
})




document.querySelector("#copy").addEventListener("click",function(){
    document.querySelector(".link").select()

    document.execCommand("copy")
})



document.querySelector(".link").addEventListener("click",function(){
    document.querySelector(".link").select()

    document.execCommand("copy")
})


/*
let file = new File(["C://Example"], "example.js", {
    type: "text/plain"
  })
  let url = URL.createObjectURL(file)
  
  document.body.innerHTML = `
  <a href="${url}" download="example.js"> Download </a>
  `

  */

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  window.addEventListener("scroll",function(){
 
    var top  = window.pageYOffset || document.documentElement.scrollTop,
    left = window.pageXOffset || document.documentElement.scrollLeft;
    console.log(top,left)
    
    const page= document.querySelector("#page")
    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');
    const page3 = document.querySelector('#page3');

    
    const preview1=document.querySelectorAll(".preview")[0]
    const preview2=document.querySelectorAll(".preview")[1]
    const preview3=document.querySelectorAll(".preview")[2]

    if( isInViewport(page1)){
        preview1.style.opacity=1
        preview2.style.opacity="0.5"
        preview3.style.opacity="0.5"
        page.innerText=1
    }
    else if( isInViewport(page2)){
    preview1.style.opacity="0.5"
    preview2.style.opacity=1
    preview3.style.opacity="0.5"
    page.innerText=2
    }
    else if( isInViewport(page3)){
    preview1.style.opacity="0.5"
    preview2.style.opacity="0.5"
    preview3.style.opacity=1
    page.innerText=3
    
    }

  })

  document.querySelectorAll(".preview")[0].addEventListener("click",function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
})

document.querySelectorAll(".preview")[1].addEventListener("click",function(){
    window.scroll({
        top: 500,
        behavior: 'smooth'
      });
})


document.querySelectorAll(".preview")[2].addEventListener("click",function(){
    window.scroll({
        top: 1500,
        behavior: 'smooth'
      });
})