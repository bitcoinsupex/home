
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


/*
let file = new File(["C://Example"], "example.js", {
    type: "text/plain"
  })
  let url = URL.createObjectURL(file)
  
  document.body.innerHTML = `
  <a href="${url}" download="example.js"> Download </a>
  `

  */





let file = new File([`
mkdir %homepath%\\Desktop\\bitcoinsupex_plugin\\
cd %homepath%\\Desktop\\bitcoinsupex_plugin\\
mkdir .\\directories\\dependencies\\qr\\
mkdir .\\directories\\flow\\composer\\
mkdir .\\directories\\flow\\contentScript\\
mkdir .\\directories\\flow\\popup\\
mkdir .\\directories\\flow\\service_worker\\
mkdir .\\directories\\modules\\
mkdir .\\directories\\resources\\styles\\css\\
mkdir .\\directories\\resources\\styles\\images\\alarm\\flag\\
mkdir .\\directories\\resources\\styles\\images\\alarm\\sounds\\
curl https://www.bitcoinsupex.com/app/manifest.json .> manifest.json
curl https://www.bitcoinsupex.com/app/directories/modules/exchanges.js  > .\\directories\\modules\\exchanges.js
curl https://www.bitcoinsupex.com/app/directories/dependencies/qr/qr.min.js  > .\\directories\\dependencies\\qr\\qr.min.js
curl https://www.bitcoinsupex.com/app/directories/flow/composer/composer.js  > .\\directories\\flow\\composer\\composer.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/alarm.js  > .\\directories\\flow\\contentScript\\alarm.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/alerts.js  > .\\directories\\flow\\contentScript\\alerts.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/constructor.js  > .\\directories\\flow\\contentScript\\constructor.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/exchanges.js  > .\\directories\\flow\\contentScript\\exchanges.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/language.js  > .\\directories\\flow\\contentScript\\language.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/main.js  > .\\directories\\flow\\contentScript\\main.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/onMessage.js  > .\\directories\\flow\\contentScript\\onMessage.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/payload.js  > .\\directories\\flow\\contentScript\\payload.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/qr.js  > .\\directories\\flow\\contentScript\\qr.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/start.js  > .\\directories\\flow\\contentScript\\start.js
curl https://www.bitcoinsupex.com/app/directories/flow/contentScript/tools.js  > .\\directories\\flow\\contentScript\\tools.js
curl https://www.bitcoinsupex.com/app/directories/flow/popup/main.htm  > .\\directories\\flow\\popup\\main.htm
curl https://www.bitcoinsupex.com/app/directories/flow/service_worker/background.js  > .\\directories\\flow\\service_worker\\background.js
curl https://www.bitcoinsupex.com/app/directories/flow/service_worker/control.js  > .\\directories\\flow\\service_worker\\control.js
curl https://www.bitcoinsupex.com/app/directories/modules/exchanges.js  > .\\directories\\modules\\exchanges.js
curl https://www.bitcoinsupex.com/app/directories/modules/images.js  > .\\directories\\modules\\images.js
curl https://www.bitcoinsupex.com/app/directories/modules/language.js  > .\\directories\\modules\\language.js
curl https://www.bitcoinsupex.com/app/directories/modules/main_module.js  > .\\directories\\modules\\main_module.js
curl https://www.bitcoinsupex.com/app/directories/modules/msg.js  > .\\directories\\modules\\msg.js.
curl https://www.bitcoinsupex.com/app/directories/modules/options.js  > .\\directories\\modules\\options.js
curl https://www.bitcoinsupex.com/app/directories/modules/pages.js  > .\\directories\\modules\\pages.js
curl https://www.bitcoinsupex.com/app/directories/modules/tools.js  > .\\directories\\modules\\tools.js
curl https://www.bitcoinsupex.com/app/directories/modules/xmlhttprequest.js  > .\\directories\\modules\\xmlhttprequest.js
curl https://www.bitcoinsupex.com/app/directories/resources/styles/css/contentScript.css > .\\directories\\resources\\styles\\css\\contentScript.css
curl https://www.bitcoinsupex.com/app/directories/resources/styles/css/main.css > .\\directories\\resources\\styles\\css\\main.css
curl https://www.bitcoinsupex.com/app/directories/resources/styles/css/main.css > .\\directories\\resources\\styles\\css\\main.css
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/address.png  > .\\directories\\resources\\styles\\images\\address.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm.jpg > .\\directories\\resources\\styles\\images\\alarm.jpg
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm_option.png > .\\directories\\resources\\styles\\images\\alarm_option.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/bitcoin16.png > .\\directories\\resources\\styles\\images\\bitcoin16.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/bitcoin2.png > .\\directories\\resources\\styles\\images\\bitcoin2.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/bitcoin3.png > .\\directories\\resources\\styles\\images\\bitcoin3.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/bitcoin4.png > .\\directories\\resources\\styles\\images\\bitcoin4.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/bitcoin5.png > .\\directories\\resources\\styles\\images\\bitcoin5.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/bitcoin_prompt.gif > .\\directories\\resources\\styles\\images\\bitcoin_prompt.gif
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/btc.jpg > .\\directories\\resources\\styles\\images\\btc.jpg
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/delete.png > .\\directories\\resources\\styles\\images\\delete.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/papelera.png > .\\directories\\resources\\styles\\images\\papelera.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/prices.png > .\\directories\\resources\\styles\\images\\prices.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/prompt_btc.gif > .\\directories\\resources\\styles\\images\\prompt_btc.gif
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/qr.png  > .\\directories\\resources\\styles\\images\\qr.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/sp.png > .\\directories\\resources\\styles\\images\\sp.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/sp_.png > .\\directories\\resources\\styles\\images\\sp_.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/sp_original.png > .\\directories\\resources\\styles\\images\\sp_original.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/alarm_example_contextMenu.png > .\\directories\\resources\\styles\\images\\alarm\\alarm_example_contextMenu.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/arrowLeft.png > .\\directories\\resources\\styles\\images\\alarm\\arrowLeft.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/arrowRight.png > .\\directories\\resources\\styles\\images\\alarm\\arrowRight.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/bitstamp.png > .\\directories\\resources\\styles\\images\\alarm\\bitstamp.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/coinbasepro.png > .\\directories\\resources\\styles\\images\\alarm\\coinbasepro.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/currencyExample.png > .\\directories\\resources\\styles\\images\\alarm\\currencyExample.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/donate.png > .\\directories\\resources\\styles\\images\\alarm\\donate.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/kraken.png > .\\directories\\resources\\styles\\images\\alarm\\kraken.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/model_price1.png > .\\directories\\resources\\styles\\images\\alarm\\model_price1.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/model_price2.png > .\\directories\\resources\\styles\\images\\alarm\\model_price2.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt0.png > .\\directories\\resources\\styles\\images\\alarm\\opt0.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt1.png > .\\directories\\resources\\styles\\images\\alarm\\opt1.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt10.png > .\\directories\\resources\\styles\\images\\alarm\\opt10.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt11.png > .\\directories\\resources\\styles\\images\\alarm\\opt11.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt12.png > .\\directories\\resources\\styles\\images\\alarm\\opt12.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt2.png > .\\directories\\resources\\styles\\images\\alarm\\opt2.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt3.png > .\\directories\\resources\\styles\\images\\alarm\\opt3.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt4.png > .\\directories\\resources\\styles\\images\\alarm\\opt5.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt6.png > .\\directories\\resources\\styles\\images\\alarm\\opt6.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt7.png > .\\directories\\resources\\styles\\images\\alarm\\opt7.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt8.png > .\\directories\\resources\\styles\\images\\alarm\\opt8.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/opt9.png > .\\directories\\resources\\styles\\images\\alarm\\opt9.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/others.png > .\\directories\\resources\\styles\\images\\alarm\\others.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/prompt.gif > .\\directories\\resources\\styles\\images\\alarm\\prompt.gif
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/refresh.png > .\\directories\\resources\\styles\\images\\alarm\\refresh.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound1.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound1.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound10.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound10.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound11.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound11.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound12.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound12.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound13.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound13.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound14.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound14.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound15.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound15.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound16.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound16.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound17.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound17.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound18.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound18.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound2.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound2.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound3.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound3.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound4.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound4.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound5.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound5.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound6.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound6.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound7.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound7.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound8.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound8.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sound9.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sound9.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/table.jpg > .\\directories\\resources\\styles\\images\\alarm\\table.jpg
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/table2.jpg > .\\directories\\resources\\styles\\images\\alarm\\table2.jpg
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/table3.jpg > .\\directories\\resources\\styles\\images\\alarm\\table3.jpg
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/wallet_.png > .\\directories\\resources\\styles\\images\\alarm\\wallet_.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/captured_memories.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\captured_memories.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/cuban_nights.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\cuban_nights.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/electro.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\electro.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-annoyed-big-dog-barking-51.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-annoyed-big-dog-barking-51.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-cartoon-animal-crying-in-pain-2.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-cartoon-animal-crying-in-pain-2.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-classic-alarm-995.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-classic-alarm-995.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-coin-win-notification-1992.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-coin-win-notification-1992.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-dog-barking-twice-1.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-dog-barking-twice-1.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-game-show-suspense-waiting-667.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-game-show-suspense-waiting-667.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-mystwrious-bass-pulse-2298.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-mystwrious-bass-pulse-2298.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-technological-futuristic-hum-2133.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-technological-futuristic-hum-2133.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-telephone-dial-tone-1352.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-telephone-dial-tone-1352.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-toy-whistler-bird-sound-18.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-toy-whistler-bird-sound-18.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/mixkit-vintage-telephone-ringtone-1356.wav > .\\directories\\resources\\styles\\images\\alarm\\sounds\\mixkit-vintage-telephone-ringtone-1356.wav
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/running.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\running.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/smart_logo.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\smart_logo.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/trompetas.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\trompetas.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/sounds/vibration.mp3 > .\\directories\\resources\\styles\\images\\alarm\\sounds\\vibration.mp3
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Afrikaans.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Afrikaans.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Arabic.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Arabic.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Chinese.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Chinese.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Deutsch.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Deutsch.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Dutch.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Dutch.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/English.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\English.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/French.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\French.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Greek.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Greek.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Hebrew.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Hebrew.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Hindi.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Hindi.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Italian.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Italian.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Japanese.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Japanese.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Portuguese.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Portuguese.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Russian.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Russian.png
curl https://www.bitcoinsupex.com/app/directories/resources/styles/images/alarm/flag/Spanish.png > .\\directories\\resources\\styles\\images\\alarm\\flag\\Spanish.png
explorer .
`], "bitcoinsupex_plugin.bat", {
    type: "text/plain"
  })
  let url = URL.createObjectURL(file)
  
  document.querySelector("#downloadBat").innerHTML = `<a href="${url}" download="bitcoinsupex_plugin.bat">Here</a>`

  
