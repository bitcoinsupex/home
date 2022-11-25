const sendMessage=function(id,msg){ chrome.tabs.sendMessage(id, {value: msg}, function(response) {})}

const tools={
    create:{
        contextMenu:function(id,title,contexts){
            if(contexts == undefined)
            contexts="all"
            chrome.contextMenus.create({
            id: id,
            title: title,
            contexts: [contexts]
            });
        },
        subContextMenu:function(title,parentId,id,contexts){
            if(contexts == undefined)
            contexts="all"
            chrome.contextMenus.create({
                title: title,
                parentId: parentId,
                id: id,
                contexts: [contexts]
            });
        }

    },
    alert:function(title, message, icon, type, buttons, priority, listener){
        if (title == undefined || message == undefined || icon == undefined || type == undefined) {
            title = "Title"
            message = "Message"
            icon = "images/alarm.jpg"
            type = "basic"
            buttons = [{
                title: 'OK | Stop'
            }]
            priority = 2
            listener = function() {
                chrome.storage.local.remove("alarm", function() {})
            }
        }
        chrome.notifications.create('', {
            title: title,
            message: message,
            iconUrl: icon,
            type: type,
            buttons: buttons,
            priority: priority
    
        });
        chrome.notifications.onButtonClicked.addListener(listener)
    }
}


function paste(info,tab){

  
}
const actions={
    price:{
        currency:function(){
                chrome.storage.local.set({currency:{currency1:'USD',currency2:'EUR',currency3:'GBP'}},function(){actions.price.recall()})
        },
        update:function (url, response,currencys) {
 


            const higher = response.higher | 0
            const currencyH = response.currencyH
        
            const lower = response.lower | 0
            const currencyL = response.currencyH
        
            var request = new Request(url, {method: 'GET',headers: new Headers({'Accept': 'application/json','custom-security': 'XXXX','Purchase-Code': 'XXXXXXX','Content-Type': 'application/json','Cache-Control': 'max-age=640000'})})

            fetch(request)
                .then((response) => response.json())
                .then((responseJson) => {

                    const price = responseJson.data.amount
                    const currency = responseJson.data.currency

                    
                        chrome.action.setBadgeText({
                            text: `$${price[0]}${price[1]}K`
                        })
                        //  chrome.action.setBadgeText({ text: `${(price >= higher)}` })

                        if (currencyH == currencys && higher != 0) {
                            if (price >= higher)
                                alert()
                        }
                        if (currencyL == currencys) {
                            if (price <= lower)
                                alert()
                        }
        
                    
        
                })
                .catch((error) => {
                    console.error(error);
                })
        
        
        },
        recall:function recall() {
            chrome.storage.local.get('currency',function(data){
                
            const currencys=data.currency
            const currency1=currencys.currency1
            const currency2=currencys.currency2
            const currency3=currencys.currency3

            chrome.storage.local.get("alarm", function(response) {
                if (response.alarm != undefined) {
                    actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, response.alarm,currency1)
                    setTimeout(function() {
                        actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, response.alarm,currency2)
                        setTimeout(function() {
                            actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, response.alarm,currency3)
                        }, 10000)
                    }, 10000)
                } else {
                    actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, 0,currency1)
                    setTimeout(function() {
                        actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency2}/spot`, 0,currency2)
                        setTimeout(function() {
                            actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency3}/spot`, 0,currency3)
                        }, 10000)
                    }, 10000)
                }
            })

        })
        
        }
    },
    listener:{
        subMenuListeners:function(info,tab){

            const key=info.parentMenuItemId

            switch (key) {
                case "btc_address_to_copy":
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {value: info}, function(response) {
                       console.log(response);
                     });
                   });                    break;
                case "btc_address_to_paste":
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {value: info}, function(response) {
                       console.log(response);
                     });
                   });                    break;
                default:
                    break;
            }
        
        }
    }
}

const onInstall={
    create:{
        contextMenu:function(){

            tools.create.contextMenu('btc_address','Bitcoin Address Book')

            tools.create.contextMenu('btc_address_selected','Add Selected text to address book','selection')
            tools.create.subContextMenu('BTC address to COPY to clipboard','btc_address','btc_address_to_copy')
            tools.create.subContextMenu('BTC address to PASTE to clipboard','btc_address','btc_address_to_paste')
            tools.create.subContextMenu('Add new btc address to book','btc_address','btc_address_entry')
            tools.create.subContextMenu('Show address book','btc_address','btc_address_show')
            tools.create.subContextMenu('Find address in blockchain','btc_address','btc_address_find')

            tools.create.contextMenu('main_qr','QR code')
            tools.create.subContextMenu('Create QR for current domain (url)','main_qr','qr_url')
            tools.create.subContextMenu('Create QR for new entry','main_qr','qr_entry')
            tools.create.contextMenu('qr_selected','Create QR for selected text','selection')


            tools.create.contextMenu('alarm','Alarm')
            tools.create.subContextMenu('Show current Alarm','alarm','alarm_show')
            tools.create.subContextMenu('Set new Alarm','alarm','alarm_new')
            tools.create.subContextMenu('Alarm Settings','alarm','alarm_settings')


            tools.create.contextMenu('exchanges','Exchangers')
            tools.create.subContextMenu('Compare Price in Real Time','exchanges','exchanges_show')
            tools.create.subContextMenu('See price in specific exchanger','exchanges','exchanges_specific')
            tools.create.subContextMenu('Coinbase','exchanges_specific','exchanges_coinbase')
            tools.create.subContextMenu('CoinDesk','exchanges_specific','exchanges_coindesk')
            tools.create.subContextMenu('Bitstamp','exchanges_specific','exchanges_bitstamp')
            tools.create.subContextMenu('Kraken','exchanges_specific','exchanges_kraken')
            tools.create.subContextMenu('Coinbase Pro','exchanges_specific','exchanges_coinbasepro')

           /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
            });*/

            chrome.action.setBadgeBackgroundColor({color: "gold"});
            actions.price.currency()

            const id='qqwertyuioplkjhgfdsazxcvbnmPOIUYTREWQASDFGHJKLMNBVCXZ'
            const n='1234567890'

            const ran=function(seed){ return Math.floor(Math.random() * (seed.length - 0 + 0) + 0)}
            const chain=function(){return id[ran(id)]+n[ran(n)]+id[ran(id)]+n[ran(n)] }
            const chain1=function(){return n[ran(n)]+n[ran(n)]+n[ran(n)]+n[ran(n)] }

            const hash=`${chain()}-${chain()}${chain()}-${chain()}-${chain1()}`

            chrome.storage.local.set({hashID: hash}, callback)
        
        }
    }
}

const listeners=function(block, sender, sendResponse){

    const type=block.msg.type
    const value=block.msg
    sendResponse({ done: "checked"})

    switch (type) {

        case "delete_context_item":
            const item=block.msg.item
            chrome.contextMenus.remove(item)
            chrome.contextMenus.remove(item+'_')
            break;
        case "contextMenu":
            tools.create.subContextMenu(block.msg.key,"btc_address_to_copy",block.msg.value)
            tools.create.subContextMenu(block.msg.key,"btc_address_to_paste",block.msg.value+'_')
            break;
        case "setAlarm":
            localSet({key:'alarm',val:value})
            break;
        case "delete_all_addressBook":
            chrome.contextMenus.remove('book')
        break;
        default:
            break;
    }
     

}
const localSet=function({data},callback){ chrome.storage.local.set({[data.key]: data.val}, callback)}
const localGet=function(data,callback){ chrome.storage.local.get(data, callback)}

     

chrome.runtime.onMessage.addListener(listeners)
chrome.runtime.onInstalled.addListener(onInstall.create.contextMenu);
chrome.contextMenus.onClicked.addListener(actions.listener.subMenuListeners)








// call from onInstall method = recall()

chrome.alarms.create({periodInMinutes: 0.40})
chrome.alarms.onAlarm.addListener(() => {actions.price.recall()})



 