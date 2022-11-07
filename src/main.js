window.id= function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'i9asdm..$#po((^@KbXrww!~cz';
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.rotate(.05);
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    ctx.shadowBlur=10;
    ctx.shadowColor="blue";
    ctx.fillRect(-20,10,234,5);
    var strng=canvas.toDataURL();

    var hash=0;
    if (strng.length==0) return;
    for (i = 0; i < strng.length; i++) {
        char = strng.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}

document.querySelector("#emailSaver").addEventListener('click',function(e){
    e.preventDefault()
    const email=document.querySelector("#email_suscription").value

    const finger=window.id()
    app.database().ref("email").child(finger).update({email:email,device:navigator.userAgent});
    app.database().ref("email").child('all').update({[finger]:email});
    alert("Done!")
})

document.querySelector("#landingSubheader").innerHTML=window.lang.promo
document.querySelector("#landingSubheader").innerHTML=window.lang.promo
document.querySelector(".getAdBlockButtonLarge").innerHTML=window.lang.button_promo
document.querySelector("#desc_title_1").innerHTML=window.lang.desc_title_1
document.querySelector("#desc_desc_1").innerHTML=window.lang.desc_desc_1
document.querySelector("#desc_title_2").innerHTML=window.lang.desc_title_2
document.querySelector("#desc_desc_2").innerHTML=window.lang.desc_desc_2

document.querySelector("#desc_title_3").innerHTML=window.lang.desc_title_3
document.querySelector("#desc_desc_3").innerHTML=window.lang.desc_desc_3


document.querySelector("#desc_title_4").innerHTML=window.lang.desc_title_4
document.querySelector("#desc_desc_4").innerHTML=window.lang.desc_desc_4

document.querySelector("#patners").textContent=window.lang.patner

document.querySelector("#opn1").textContent=window.lang.opinion_1
document.querySelector("#opn2").textContent=window.lang.opinion_2
document.querySelector("#opn3").textContent=window.lang.opinion_3

document.querySelector("#about").textContent=window.lang.about
document.querySelector("#about_desc").textContent=window.lang.about_desc



document.querySelector("#users").textContent=window.lang.users
document.querySelector("#lang").textContent=window.lang.lang
document.querySelector("#emp").textContent=window.lang.emp
document.querySelector("#down").textContent=window.lang.down

document.querySelector("#copyR").textContent=window.lang.copy

document.querySelector("#inst1").textContent=window.lang.install
document.querySelector("#inst2").textContent=window.lang.install
document.querySelector("#inst3").textContent=window.lang.install
document.querySelector("#inst4").textContent=window.lang.install
document.querySelector("#inst5").textContent=window.lang.install
document.querySelector("#inst6").textContent=window.lang.install

document.querySelector("#btn_dwn_ch").textContent=window.lang.btn

 
titleTabText=window.lang.tab_title


const titleTab=document.querySelector("title")
var titleTabI=0
var titleTabE=0
setInterval(function(){
    if(titleTabI==0&&titleTabE==0)
    titleTab.innerHTML=""
    
    titleTab.innerHTML+=titleTabText[titleTabI][titleTabE]
    titleTabE++
    if(titleTabE==titleTabText[titleTabI].length+1)
    {
        if(titleTabI==titleTabText.length-1){
            titleTabI=0
        }else
        titleTabI++
        titleTab.innerHTML="* ";titleTabE=0
}
},300)


const tvText=window.lang.tv_text
function tvOn_(){
    setTimeout(() => {
        document.querySelector("#monitorscreen").style["background-image"]="url(resources/start.gif)"

setTimeout(function(){
    document.querySelector("#monitorscreen").style["background-image"]="url(resources/tv.gif)"
    setTimeout(function(){
        document.querySelector("#ad").innerHTML=tvText[0]
        document.querySelector("#ad").style["margin-top"]="60px"

        setTimeout(function(){
            document.querySelector("#ad").innerHTML=tvText[1]
            setTimeout(function(){
                document.querySelector("#ad").innerHTML=tvText[2]
                setTimeout(function(){
                    document.querySelector("#ad").innerHTML=tvText[3]
                    document.querySelector("#ad").style["margin-top"]="15px"
                    
                    document.querySelector("#preview1").src="resources/screenshots/preview.png"
                    document.querySelector("#preview2").src="resources/screenshots/preview0.png"
                    document.querySelector("#preview3").src="resources/screenshots/preview3.png"
                    document.querySelector("#preview1").style.display="block"
                    document.querySelector("#preview2").style.display="block"
                    document.querySelector("#preview3").style.display="block"

                        setTimeout(function(){
                            document.querySelector("#preview2").style.display="none"
                            document.querySelector("#preview3").style.display="none"
        
                            document.querySelector("#preview1").style.width="250px"
                            document.querySelector("#preview1").src="resources/exchangers.png"
                            document.querySelector("#ad").innerHTML=tvText[4]
                            
                            setTimeout(function(){
                                document.querySelector("#ad").textContent=tvText[5]
                                document.querySelector("#preview1").style.width="150px"
                                document.querySelector("#preview1").src="resources/screenshots/btcPrice.png"

                                setTimeout(function(){
                                    document.querySelector("#ad").textContent=tvText[6]
                                    document.querySelector("#preview1").style.width="250px"
                                    document.querySelector("#preview1").src="resources/screenshots/alarm.png"
    
                                    setTimeout(function(){
                                        document.querySelector("#ad").textContent=tvText[7]
                                        document.querySelector("#preview1").style.width="150px"
                                        document.querySelector("#preview1").src="resources/screenshots/addr.png"
        
                                        setTimeout(function(){
                                            document.querySelector("#ad").textContent=tvText[8]
                                            document.querySelector("#preview1").style.width="90px"
                                             document.querySelector("#preview1").src="resources/screenshots/qr.png"
            
                                             setTimeout(function(){
                                                document.querySelector("#ad").textContent=tvText[9]
                                                document.querySelector("#preview1").style.width="90px"
                                                 document.querySelector("#preview1").src="resources/screenshots/2.png"
                                            
                                                 setTimeout(function(){
                                                    document.querySelector("#ad").innerHTML=tvText[10]
                                                    document.querySelector("#preview1").style.display="none"
                                               
                                                    setTimeout(function(){
                                                        document.querySelector("#ad").innerHTML=tvText[11]
                                                        document.querySelector("#preview1").style.display="none"
                                                   
                                                        setTimeout(function(){
                                                            document.querySelector("#ad").innerHTML=tvText[12]
                                                            document.querySelector("#preview1").style.display="block"
                                                            document.querySelector("#preview1").src="resources/screenshots/cws.png"
                                                                setTimeout(function(){
                                                                    document.querySelector("#preview1").style.display="none"
                                                                    document.querySelector("#ad").innerHTML=""

                                                                   tvOn_()
                                                                },5000)
                                                        },5000)
                                                    },5000)

                                                },5000)
                                                
                                            },5000)
        

                                        },5000)
    

                                    },5000)

                                },6000)
                            },5000)

                        },5000)

                },2000)
            },2000)
        },2000)
    },2000)
},1000)

}, 1000);
}
tvOn_()

if(window.innerWidth<1180 && window.innerWidth > 500){
    document.querySelector(".dwspRContainer").style.display="none"
    document.querySelector(".lang2").style.display="none"
}else{
    try{
        document.querySelector(".idiomaSelector").style.display="block"

    }catch(e){}
    document.querySelector(".lang1").style.display="block"

}
function format(item){
    item_post=""
    item=item.substring(0,item.indexOf('.'))||item
    item=`${item.substring(0,item.length-3)},${item.substring(item.length-3,item.length)}${item_post}`;return item}

    
function pricesExchangers(){
fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot')
.then((response)=> response.json())
.then((data)=>{
    document.querySelector("#coinbasePrice").innerText=format(data.data.amount)
    
})

fetch('https://www.bitstamp.net/api/v2/ticker/btcusd')
.then((response)=> response.json())
.then((data)=>{
  document.querySelector("#bitstampPrice").innerText=format(data.last)
})

fetch('https://api.kraken.com/0/public/Ticker?pair=btcusd')
.then((response)=> response.json())
.then((data)=>{
    document.querySelector('#krakenPrice').innerText=format(data.result['XXBTZUSD']['a'][0])
})


fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response)=> response.json())
.then((data)=>{
    document.querySelector('#coindeskPrice').innerText=format(data.bpi["USD"].rate.replace(",",""))
})


fetch('https://blockchain.info/ticker')
.then((response)=> response.json())
.then((data)=>{
    document.querySelector('#blockchainPrice').innerText=format(parseInt(data.USD.last)+".00")

})

fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
.then((response)=> response.json())
.then((data)=>{
    document.querySelector('#binancePrice').innerText=format(data.price)
     
})

}
pricesExchangers()
setInterval(function(){pricesExchangers()},5000)


function eraseT(){
    const input=document.querySelector(".titlesrun")
    const erase=setInterval(function(){
        input.textContent=input.textContent.substring(0,input.textContent.length-1)
        if(input.textContent.length==0){
            clearInterval(erase);
            nextl()
        }
    },50)
}


const textRunner=window.lang.text_runner
var word_=0
var l=0
function nextl(){
    if(word_==0){
        document.querySelector(".titlesrun").style="font-family:orbi;color:purple;"
    }else{
        document.querySelector(".titlesrun").style="font-family:humanoide;color:green;"
    }

    const input=document.querySelector(".titlesrun")
    input.textContent+=textRunner[word_][l++]
 

    if(l==textRunner[word_].length)
    {word_++; l=0;setTimeout(function(){eraseT()},2000) }
    else{
        setTimeout(function(){nextl()},150)

    }
    if(word_==textRunner.length)
    word_=0;

    
}
nextl()

/*
setInterval(function(){
    window.document.tvScroll=window.document.tvScroll||1
   if(!window.document.isOnTv){
    document.querySelector('#monitorscreen').scrollTo(0,window.document.tvScroll)
    window.document.tvScroll++}

   
    if(window.document.tvScroll==459)
    window.document.tvScroll=1
},50)

*/

document.querySelector("#monitorscreen").addEventListener("mouseenter",function(){
    window.document.isOnTv=true
})

document.querySelector("#monitorscreen").addEventListener("mouseleave",function(){
    window.document.isOnTv=false
})
 
const right=window.innerWidth-300
const container=document.querySelector(".widgetCarrier")
container.style["margin-left"]=right+"px"
const containers=document.querySelectorAll(".container")
var sense=true
var starting=true

setInterval(function(){
const left=container
var plus
if(right> 1000)
plus="-"+(right-800)+"px"
else if(right<1000 && right > 500)
plus="-"+(right+290)+"px"
else if(right<1000 && right <= 500)
plus="-"+(right+800)+"px"



if(sense)
left.style["margin-left"]=(parseInt(left.style["margin-left"].replace("px",""))-1)+"px"
else
left.style["margin-left"]=(parseInt(left.style["margin-left"].replace("px",""))+1)+"px"
if(left.style["margin-left"]=="-880px" || left.style["margin-left"]==starting){
    if(sense){
        sense=false
        starting="-400px"
    }
    else 
    sense=true
   // container.style["margin-left"]=right+"px"
}

},10)
 

//

const right_=window.innerWidth
var plus
if(right_>1300)
plus=900
else
plus=1500
const container_=document.querySelector(".widgetCarrier2")
container_.style["margin-left"]="-"+(right_+plus)+"px"

setInterval(function(){
const left=container_

left.style["margin-left"]=(parseInt(left.style["margin-left"].replace("px",""))+1)+"px"

if(left.style["margin-left"]==right_+"px"){

    container_.style["margin-left"]="-"+(right_+plus)+"px"
}

},10)
 




var direction=true
setInterval(()=>{
    const thing=document.querySelector("#bird")
    let up=parseInt(thing.style["margin-top"].replace("px",""))
    if(up=="-25")
    direction=false
    else if(up =="-65")
    direction=true

    if(direction){
        thing.style["margin-top"]=(up+1)+"px"
        
        const point=document.querySelector("#pointer")
        if(point.style["margin-top"]=="-65px"){
        const downFast=setInterval(function(){
            const down=parseInt(point.style["margin-top"].replace("px",""))
            point.style["margin-top"]=(down+1)+"px"
            if(point.style["margin-top"]=="-25px"){
                clearInterval(downFast)
                document.querySelector("#logo").classList.add("button")
                document.querySelector("#logo_").classList.add("button")

                setTimeout(function(){
                    document.querySelector("#logo").classList.remove("button")
                    document.querySelector("#logo_").classList.remove("button")

                },2000)
            }
        },10)}
    }
    else{
        const point=document.querySelector("#pointer")
        point.style["margin-top"]=(up-1)+"px"
        thing.style["margin-top"]=(up-1)+"px"

    }

 
    if(thing.classList.contains("button"))
    thing.classList.remove('button')
    else
    thing.classList.add("button")
    },200)

window.addEventListener("resize",function(){
    if(window.innerWidth<1180){
        document.querySelector(".dwspRContainer").style.display="none"
    }else
    document.querySelector(".dwspRContainer").style.display="block"

})

setInterval(()=>{
    if(document.querySelector(".dwspRContainer").style.display!="none"){
const button=document.querySelector(".dwspR")
if(button.classList.contains("button"))
button.classList.remove('button')
else
button.classList.add("button")
    }
},1500)


var text_=window.lang.tv
    
    
var text_M=window.lang.text_M

var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
const isMobileDevice = window.navigator.userAgent.toLowerCase().includes("mobi");

!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);


if(isMobile.any==true){
    document.querySelector("#vpn-image").remove()
    document.querySelector(".dwspRContainer").remove()
    document.querySelector("#tvcontainer").style.width="180%"
    document.querySelector("#tvcontainer").style["margin-top"]="40%"
    document.querySelector("#tvcontainer").style["margin-left"]="-40%"
    const newPosition=document.querySelector("#vpn-title").cloneNode(true)
    document.querySelector("#vpn-title").remove()
    document.querySelector("#tvcontainer").after(newPosition)
    text_=text_M
}
const imgVisor=setInterval(()=>{
    if(isMobile.any==false){

    const visor=document.querySelector("#vpn-laptop")
    let img=parseInt(visor.alt)
    visor.alt=img+1
    visor.src=`resources/screenshots/${img}.png`
    if(img==4)
    visor.alt=0
    }else{
        clearInterval(imgVisor)
    }
    },2000)


setInterval(()=>{
    const button=document.querySelector(".suspR")
try{
    if(button.classList.contains("button"))
    button.classList.remove('button')
    else
    button.classList.add("button")
}catch(e){}
},1500)


        
const pretitle=document.querySelector("#vpn-title")



var text_i=0
var i=0
var e=0
function type(tx,velocity){
    text=text_[text_i]
    e++
    const count=[...tx.matchAll(" ")].length;
    if(document.querySelector("#writter")!=null)
    document.querySelector("#writter").remove()

    var r = () =>{
        
        var options=["goldenrod","green","gray","red","#0055b7"]

        const ran=Math.floor(Math.random() * options.length) + 0
        return options[ran]
    }
    var color = r();

    if(tx[i]==" "){
   
    pretitle.innerHTML=`${pretitle.innerHTML} <span style="color:transparent;font-family:Arial">-</span>  ${text[i+1]} <span id='writter' style='color:green;font-size:24px;font-family:Arial'>I</span>`;
    i++
    }else
    pretitle.innerHTML+=`<span style='color:${color};font-family:orbi;font-size:18px'>${text[i]}</span><span id='writter' style='color:green;font-size:24px;font-family:Arial'>I</span>`;

    i++
 
    if(e!=tx.length-count){
    setTimeout(function(){type(tx,velocity)},velocity)
        
    }else{
        document.querySelector("#writter").style.color="gold";
        setTimeout(()=>{erase()},3000)
        

    }

    

}

    function erase(){
        const value=pretitle.innerText.length
        const inner=pretitle.innerText
        if(value!=1){
            pretitle.innerHTML="<span style='font-family:orbi;font-size:18px;color:gray'>"+inner.substring(0,inner.length-2).replaceAll("-","<span style='color:transparent'>-</span>")+"</span>"+"<span id='writter' style='color:red;font-size:24px;font-family:Arial'>I</span>";
            setTimeout(function(){erase()},25)
        }else{
            setTimeout(()=>{document.querySelector("#writter").style.color="gold";
            i=0
            e=0
            if(text_i>=text_.length-1)
            text_i=0;
            else
            text_i++
            type(text_[text_i],150)
        },1000)
        }

    }

type(text_[text_i],150)
