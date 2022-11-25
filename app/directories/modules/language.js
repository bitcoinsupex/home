
const setLang= function(lng){
    const lang=lng
    console.log(lang)
    window.localStorage.setItem('title1',lang.titles.t1)
    window.localStorage.setItem('title2',lang.titles.t2)
    window.localStorage.setItem('title3',lang.titles.t3)
    window.localStorage.setItem('title4',lang.titles.t4)
    window.localStorage.setItem('title5',lang.titles.t5)
    window.localStorage.setItem('title6',lang.titles.t6)

    window.localStorage.setItem('alarm_select_currency',lang.alarm.select_currency)
    window.localStorage.setItem('alarm_actually_price',lang.alarm.actually_coinbase_price)
    window.localStorage.setItem('alarm_refresh_price',lang.alarm.refresh.toLowerCase())
    window.localStorage.setItem('alarm_if',lang.alarm.cond1.toUpperCase())
    window.localStorage.setItem('alarm_ifDesc',lang.alarm.cond1Desc)
    window.localStorage.setItem('alarm_cond2',lang.alarm.cond2)
    window.localStorage.setItem('alarm_cond2Desc',lang.alarm.cond2Desc)
    window.localStorage.setItem('alarm_buttonSet',lang.alarm.buttonSet)

    window.localStorage.setItem('qrDesc',lang.qr.desc)
    window.localStorage.setItem('qrInput',lang.qr.placeholder)
    window.localStorage.setItem('qrButton',lang.qr.button)

    window.localStorage.setItem('bookTitle',lang.book.title)
    window.localStorage.setItem('bookDesc',lang.book.desc)
    window.localStorage.setItem('bookPlaceholder1',lang.book.placeholder1)
    window.localStorage.setItem('bookPlaceholder2',lang.book.placeholder2)
    window.localStorage.setItem('bookDesc2',lang.book.desc2)
    window.localStorage.setItem('bookBtn1',lang.book.buttonCreate)
    window.localStorage.setItem('bookBtn2',lang.book.buttonShow)

    window.localStorage.setItem('donateBtn1',lang.donate.btn1)
    window.localStorage.setItem('donateBtn2',lang.donate.btn2)
    
    window.localStorage.setItem('othersLang',lang.others.changeLang)
    window.localStorage.setItem('othersCookies',lang.others.eraseCookies)

    window.localStorage.setItem('pricesSettingsTitle',lang.pricesSettings.title)
    window.localStorage.setItem('pricesSettingsDesc1',lang.pricesSettings.desc1)
    window.localStorage.setItem('pricesSettingsDesc2',lang.pricesSettings.desc2)
    window.localStorage.setItem('pricesSettingsDesc3',lang.pricesSettings.desc3)

    window.localStorage.setItem('alarmSettingsTitle',lang.alarmSettings.title)
    window.localStorage.setItem('alarmSettingsDesc1',lang.alarmSettings.desc1)
    window.localStorage.setItem('alarmSettingsDesc2',lang.alarmSettings.desc2)
    window.localStorage.setItem('alarmSettingsDesc3',lang.alarmSettings.desc3)
    window.localStorage.setItem('alarmSettingsDesc4',lang.alarmSettings.desc4)

    window.localStorage.setItem('addrsBookTitle',lang.addressBook.title)
    window.localStorage.setItem('addrsBookDesc1',lang.addressBook.desc1)
    window.localStorage.setItem('addrsBookDellAll',lang.addressBook.deleteAll)
    window.localStorage.setItem('addrsBookCreate',lang.addressBook.createNew)
    window.localStorage.setItem('addrsBookConfirm',lang.addressBook.confirm)
    window.localStorage.setItem('addrsBookError',lang.addressBook.error)
    window.localStorage.setItem('addrsBookError2',lang.addressBook.error2)
    window.localStorage.setItem('addrsBookKey',lang.addressBook.enterKey)
    window.localStorage.setItem('addrsBookValue',lang.addressBook.enterVal)
    window.localStorage.setItem('addrsBookHide',lang.addressBook.hideBook)
    window.localStorage.setItem('addrsBookShow',lang.addressBook.showBook)
    window.localStorage.setItem('addrsBookPre',lang.addressBook.pre)
    window.localStorage.setItem('addrsBookPost',lang.addressBook.post)

    window.localStorage.setItem('donatePageTitle',lang.donatePage.title)
    window.localStorage.setItem('donatePageDesc1',lang.donatePage.desc1)
    window.localStorage.setItem('donatePageCopy',lang.donatePage.copy)

    window.localStorage.setItem('contactUsTitle',lang.contact.title)
    window.localStorage.setItem('contactUsName',lang.contact.name)
    window.localStorage.setItem('contactUsEmail',lang.contact.email)
    window.localStorage.setItem('contactUsPhone',lang.contact.phone)
    window.localStorage.setItem('contactUsMsg',lang.contact.msg)
    window.localStorage.setItem('contactUsBtn',lang.contact.btn)
    window.localStorage.setItem('contactUsAlert',lang.contact.btn)

    window.localStorage.setItem('selectLang',lang.lang.select_lang)
    window.localStorage.setItem('eraseCookiesConfim',lang.cookies.confirm)
    window.localStorage.setItem('doneCookiesConfim',lang.cookies.done)
    language_set()
}

const set_language=function(key){
en={
    titles:{
        t1:'prices',
        t2:'alarm',
        t3:'qr Maker',
        t4:'address book',
        t5:'donate',
        t6:'others'
    },
    alarm:{
        select_currency:'Select Currency',
        actually_coinbase_price:'Actually Coinbase Price',
        refresh:'refresh',
        cond1:'IF',
        cond1Desc:'Price is Higher than',
        cond2:'AND | OR',
        cond2Desc:'When Price is Lower than',
        buttonSet:'Set Alarm'
    },
    qr:{
        desc:'Enter bitcoin address or url to convert to qr', 
        placeholder:'paste address or url here',
        button:'create'
    },
    book:{
        title:'Please select one option',
        desc:'Please enter a description tag for address',
        placeholder1:'Description',
        placeholder2:'Address to save',
        desc2:'Please enter address to save',
        buttonCreate:'Create New',
        buttonShow:'Show Book'
    },
    donate:{
        btn1:'donate',
        btn2:'Leave a message'
    },
    others:{
        changeLang:'Change Language',
        eraseCookies:'Erase Cookies'
    },
    pricesSettings:{
        title:'Prices Settings',
        desc1:'You can select the currencies you want to be displayed from the context menu',
        desc2:'To do this, make sure to position yourself in an active window where you have any page open and right-click on the extension icon, once this is done, a context menu will open and you must select the "Select Currency" option.',
        desc3:'You can also edit the color and style of the stripe and the three main currencies, you can change these at any time'
    },
    alarmSettings:{
        title:'Alarm Settings',
        desc1:'You can set alarm style, icon, sound, title and description from admin panel context menu',
        desc2:'To access the context menu panel, you just have to position yourself on any page you are browsing and right-click on the application icon in the browser',
        desc3:'alternatively you can also right click on any active page you are operating on and look in the context menu for the panel that has the name of the extension',
        desc4:'there are certain options like find an address in the blockchain explorer that require you to first select the text (text you want to convert to qr, the address you want to see in the blockchain explorer) and then open the context menu, only then options will appear to do with the selected text'
    },
    addressBook:{
        title:'Address Book',
        deleteAll:'delete all',
        createNew:'create new',
        desc1:`You can store whatever you want. This book uses the browser's localStorage API to save the information, it means that no one has access to your information, all this data is saved locally and offline.<br>If you want to undesrtand more how this works, see it <a href='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>here</a></br></br>(you can copy any value by clicking direclty in the value field. No need to press anything else) </p> `,
        confirm:'Are you sure you would like to delete ALL? (this action cannot be reversed)',
        enterKey:'Please enter the tag identification for the address',
        enterVal:'Please enter the address information',
        error:'The tag or value must have at least one character, please try again',
        error2:'an error ocurred please refresh the page and try again',
        hideBook:"Hide Book",
        showBook:"Show Book",
        pre:'Are you sure you would like to delete the index',
        post:'(this action cannot be reversed)'
    },
    donatePage:{
        title:'Support us by donating a small amount',
        desc1:`We make this type of applications with two main purposes, the first is to publicize our work and our programming capabilities as a type of advertising so that new clients interested in making both public and private applications can reach us with their requirements and thus obtain new clients, at the same time that we support the crypto community for free and support the development of new tools. With a small donation you will incentivize our work more and so we can listen to your comments and develop the most valued comments in the future or add new features to our current tools.`,
        copy:'copy'
    },
    contact:{
        title:'Contact Us',
        name:'Your Name (optional)',
        email:'Email (optional)',
        phone:'Phone (optional)',
        msg:'Write your message here (Required)',
        btn:'Sent Message',
        alert:'done, your message will be answered as soon as possible'
    },
    lang:{
        select_lang:'Select Language'
    },
    cookies:{
        confirm:'Would you like to delete all browser cookies?',
        done:'Success, all cookies were deleted from the browser.'
    }
}
 

es={
    titles:{
        t1:'precios',
        t2:'alarma',
        t3:'creador qr',
        t4:'libreta',
        t5:'donar',
        t6:'otros'
    },
    alarm:{
        select_currency:'Seleccionar moneda',
        actually_coinbase_price:'Precio real de Coinbase:',
        refresh: 'actualizar',
        cond1:'SI',
        cond1Desc:'El precio es mayor que',
        cond2:'Y | O',
        cond2Desc:'Cuando el precio es menor que',
        buttonSet: 'Establecer alarma'
    },
    qr:{
        desc:'Ingrese la dirección de bitcoin o url para convertir a qr', 
        placeholder:'pegue la dirección o url aquí',
        button:'crear'
    },
    book:{
        title:'por favor selecciona una opcion',
        desc:'Ingrese una etiqueta de descripción para la dirección',
        placeholder1:'Descripción',
        placeholder2:'Dirección a guardar',
        desc2:'Por favor ingrese la dirección para guardar',
        buttonCreate:'Crear nuevo',
        buttonShow:'Mostrar libro'
    },
    donate:{
        btn1:'donar',
        btn2:'Dejar un mensaje'
    },
    others:{
        changeLang:'Cambiar idioma',
        eraseCookies:'Borrar cookies'
    },
    pricesSettings:{
        title:'Configuración de precios',
        desc1:'Puedes seleccionar las monedas que quieres que se muestren desde el menú contextual',
        desc2:'Para hacer esto, asegúrese de posicionarse en una ventana activa donde tenga cualquier página abierta y haga clic derecho en el icono de la extensión, una vez hecho esto, se abrirá un menú contextual y debe seleccionar la opción "Seleccionar moneda" opción.',
        desc3:'También puedes editar el color y el estilo de la franja y las tres monedas principales, puedes cambiarlas en cualquier momento'
 
    },
    alarmSettings:{
        title:'Configuración de alarma',
        desc1:'Puede configurar el estilo de la alarma, el icono, el sonido, el título y la descripción desde el menú contextual del panel de administración',
        desc2:'Para acceder al panel del menú contextual, solo tienes que posicionarte en cualquier página que estés navegando y hacer clic derecho en el ícono de la aplicación en el navegador',
        desc3:'alternativamente, también puede hacer clic derecho en cualquier página activa en la que esté operando y buscar en el menú contextual el panel que tiene el nombre de la extensión',
        desc4:'hay ciertas opciones como encontrar una dirección en el explorador de blockchain que requieren que primero seleccione el texto (texto que desea convertir a qr, la dirección que desea ver en el explorador de blockchain) y luego abra el menú contextual, solo entonces aparecerán opciones para hacer con el texto seleccionado'
  
    },
    addressBook:{
        title:'Libreta de direcciones',
        deleteAll:'borrar todo',
        createNew:'crear nuevo',
        desc1:`Puedes almacenar lo que quieras. Este libro utiliza la API de almacenamiento local del navegador para guardar la información, lo que significa que nadie tiene acceso a su información, todos estos datos se guardan localmente y sin conexión.<br>Si desea comprender más cómo funciona esto, véalo <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>aquí</a></br></br>(puede copiar cualquier valor haciendo clic directamente en el campo de valor. No es necesario presionar nada más) </p> `,
        confirm:'¿Está seguro de que desea eliminar TODO? (esta acción no se puede revertir)',
        enterKey:'Ingrese la identificación de la etiqueta para la dirección',
        enterVal:'Por favor ingrese la información de la dirección',
        error:'La etiqueta o el valor debe tener al menos un carácter, inténtelo de nuevo',
        error2:'ocurrió un error, actualice la página y vuelva a intentarlo',
        hideBook:"Ocultar libro",
        showBook:"Mostrar Libro",
        pre:'¿Está seguro de que desea eliminar el índice?',
        post:'(esta acción no se puede revertir)'

    },
    donatePage:{
        title:'Apóyanos donando una pequeña cantidad',
        desc1:`Realizamos este tipo de aplicaciones con dos propósitos principales, el primero es dar a conocer nuestro trabajo y nuestras capacidades de programación a modo de publicidad para que nuevos clientes interesados en realizar aplicaciones tanto públicas como privadas puedan llegar a nosotros con sus requerimientos y así obtener nuevos clientes, al mismo tiempo que apoyamos a la comunidad cripto de forma gratuita y apoyamos el desarrollo de nuevas herramientas. Con una pequeña donación incentivarás más nuestro trabajo y así podremos escuchar tus comentarios y desarrollar los comentarios más valiosos en el futuro o añadir nuevas funcionalidades a nuestras herramientas actuales.`,
        copy: 'copiar'
    },
    contact:{
        title: 'Contáctenos',
        name:'Tu nombre (opcional)',
        email:'Correo electrónico (opcional)',
        phone:'Teléfono (opcional)',
        msg:'Escribe tu mensaje aquí (Requerido)',
        btn:'Mensaje enviado',
        alert:'hecho, tu mensaje será respondido a la brevedad'
    },
    lang:{
        select_lang:'Seleccione el idioma'
    },
    cookies:{
        confirm:'¿Desea eliminar todas las cookies del navegador?',
        done:'Éxito, se eliminaron todas las cookies del navegador.'
    }
}

//african
af={
    titles:{
        t1:'pryse',
        t2:'alarm',
        t3:'qr Maker',
        t4:'adresboek',
        t5:'skenk',
        t6: 'ander'
    },
    alarm:{
        select_currency:'Kies geldeenheid',
        actually_coinbase_price:'Eintlik Coinbase Price',
        refresh: 'verfris',
        cond1:'IF',
        cond1Desc:'Prys is hoër as',
        cond2:'EN | OF',
        cond2Desc:'Wanneer prys laer is as',
        buttonSet: 'Stel alarm'
    },
    qr:{
        desc: 'Voer bitcoin-adres of url in om na qr om te skakel',
        placeholder:'plak adres of url hier',
        button: 'skep'
    },
    book:{
        title:'Kies asseblief een opsie',
        desc:'Voer asseblief \'n beskrywingmerker vir adres in',
        placeholder1:'Beskrywing',
        placeholder2:'Adres om te stoor',
        desc2:'Voer asseblief adres in om te stoor',
        buttonCreate:'Skep nuwe',
        buttonShow:'Wys boek'
    },
    donate:{
        btn1: 'skenk',
        btn2: 'Laat \'n boodskap'
    },
    others:{
        changeLang:'Verander taal',
        eraseCookies: 'Vee koekies uit'
    },
    pricesSettings:{
        title: 'Pryse instellings',
        desc1:'Jy kan die geldeenhede wat jy wil vertoon vanaf die konteks kieslys kies',
        desc2:'Om dit te doen, maak seker dat jy jouself in \'n aktiewe venster posisioneer waar jy enige bladsy oop het en regsklik op die uitbreidingsikoon, sodra dit gedoen is, sal \'n konteks kieslys oopmaak en jy moet die "Kies geldeenheid" kies opsie.',
        desc3:'Jy kan ook die kleur en styl van die streep en die drie hoofgeldeenhede wysig, jy kan dit enige tyd verander'
    },
    alarmSettings:{
        title:'Alarminstellings',
        desc1: 'Jy kan alarmstyl, ikoon, klank, titel en beskrywing instel vanaf die administrasiepaneel-kontekskieslys',
        desc2:'Om toegang tot die kontekskieslyspaneel te kry, moet jy jouself net posisioneer op enige bladsy wat jy blaai en regsklik op die toepassingsikoon in die blaaier',
        desc3:'alternatiewelik kan jy ook regskliek op enige aktiewe bladsy waarop jy werk en in die kontekskieslys kyk vir die paneel wat die naam van die uitbreiding het',
        desc4: 'daar is sekere opsies soos vind \'n adres in die blokkettingverkenner wat vereis dat jy eers die teks kies (teks wat jy na qr wil omskakel, die adres wat jy in die blokkettingverkenner wil sien) en dan die kontekskieslys oopmaak, net dan sal opsies verskyn wat met die geselekteerde teks te doen het'
    },
    addressBook :{
        title:'Adresboek',
        deleteAll:'vee alles uit',
        createNew:'skep nuwe',
        desc1: `Jy kan bêre wat jy wil. Hierdie boek gebruik die blaaier se localStorage API om die inligting te stoor, dit beteken dat niemand toegang tot jou inligting het nie, al hierdie data word plaaslik en vanlyn gestoor.<br>As jy meer wil verstaan ​​hoe dit werk, sien dit <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>hier</a></br></br>(jy kan enige waarde kopieer deur direk te klik in die waardeveld. Jy hoef nie enigiets anders te druk nie) </p> `,
        confirm:'Is jy seker jy wil ALLES uitvee? (hierdie aksie kan nie omgekeer word nie)',
        enterKey: 'Voer asseblief die merker-identifikasie vir die adres in',
        enterVal: 'Voer asseblief die adresinligting in',
        error:'Die merker of waarde moet ten minste een karakter hê, probeer asseblief weer',
        error2: 'n fout het voorgekom, verfris asseblief die bladsy en probeer weer',
        hideBook:"Versteek boek",
        showBook:"Wys boek",
        pre:'Is jy seker jy wil die indeks uitvee',
        post:'(hierdie aksie kan nie omgekeer word nie)'

    },
    donatePage:{
        title:'Ondersteun ons deur \'n klein bedrag te skenk',
        desc1:`Ons maak hierdie tipe toepassings met twee hoofdoeleindes, die eerste is om ons werk en ons programmeringsvermoëns as 'n soort advertensie bekend te maak sodat nuwe kliënte wat daarin belangstel om beide publieke en private toepassings te maak, ons kan bereik met hul vereistes en dus kry nuwe kliënte, terselfdertyd dat ons die kripto-gemeenskap gratis ondersteun en die ontwikkeling van nuwe gereedskap ondersteun. Met 'n klein skenking sal jy ons werk meer aanspoor en so kan ons na jou kommentaar luister en die mees gewaardeerde opmerkings in die toekoms ontwikkel of nuwe kenmerke by ons huidige nutsgoed voeg.`,
        copy: 'kopie'
    },
    contact:{
        title: 'Kontak ons',
        name:'Jou Naam (opsioneel)',
        email:'E-pos (opsioneel)',
        phone:'Foon (opsioneel)',
        msg:'Skryf jou boodskap hier (Vereis)',
        btn: 'Stuur boodskap',
        alert: 'klaar, jou boodskap sal so gou as moontlik beantwoord word'
    },
    lang:{
        select_lang: 'Kies taal'
    },
    cookies:{
        confirm:'Wil jy alle blaaierkoekies uitvee?',
        done:'Sukses, alle koekies is uit die blaaier uitgevee.'
    }
}
    
//arabe
ar={
    titles:{
        t1:'الأسعار',
        t2:'إنذار',
        t3:'صانع qr',
        t4:'دليل العناوين',
        t5:'يتبرع',
        t6:'الآخرين'
    },
    alarm:{
        select_currency:'اختر العملة',
        actually_coinbase_price:'في الواقع سعر Coinbase',
        refresh:'تحديث',
        cond1:'إذا',
        cond1Desc:'السعر أعلى من',
        cond2:'و | أو',
        cond2Desc:'عندما يكون السعر أقل من',
        buttonSet:'ضبط المنبه'
    },
    qr:{
        desc:'أدخل عنوان بيتكوين أو عنوان url للتحويل إلى ريال قطري', 
        placeholder:'الصق العنوان أو عنوان url هنا',
        button:'خلق'
    },
    book:{
        title:'ارجوك اختر خيار واحد',
        desc:'الرجاء إدخال علامة وصف للعنوان',
        placeholder1:'وصف',
        placeholder2:'العنوان المراد حفظه',
        desc2:'الرجاء إدخال العنوان للحفظ',
        buttonCreate:'خلق جديد إبداع جديد',
        buttonShow:'عرض الكتاب'
    },
    donate:{
        btn1:'يتبرع',
        btn2:'اترك رسالة'
    },
    others:{
        changeLang:'تغيير اللغة',
        eraseCookies:'محو ملفات تعريف الارتباط'
    },
    pricesSettings:{
        title:'إعدادات الأسعار',
        desc1:'يمكنك تحديد العملات التي تريد عرضها من قائمة السياق',
        desc2:'للقيام بذلك ، تأكد من وضعك في نافذة نشطة حيث يكون لديك أي صفحة مفتوحة وانقر بزر الماوس الأيمن على أيقونة الامتداد ، وبمجرد الانتهاء من ذلك ، سيتم فتح قائمة سياق ويجب عليك تحديد خيار "تحديد العملة".',
        desc3:'يمكنك أيضًا تعديل لون وأسلوب الشريط والعملات الرئيسية الثلاث ، ويمكنك تغييرها في أي وقت'
    },
    alarmSettings:{
        title:'إعدادات التنبيه',
        desc1:'يمكنك ضبط نمط التنبيه والرمز والصوت والعنوان والوصف من قائمة سياق لوحة الإدارة',
        desc2:'للوصول إلى لوحة قائمة السياق ، عليك فقط وضع نفسك في أي صفحة تتصفحها والنقر بزر الماوس الأيمن على أيقونة التطبيق في المتصفح',
        desc3:'بدلاً من ذلك ، يمكنك أيضًا النقر بزر الماوس الأيمن فوق أي صفحة نشطة تعمل عليها والبحث في قائمة السياق للوحة التي تحمل اسم الامتداد',
        desc4:'هناك خيارات معينة مثل العثور على عنوان في مستكشف blockchain يتطلب منك تحديد النص أولاً (النص الذي تريد تحويله إلى qr ، العنوان الذي تريد رؤيته في مستكشف blockchain) ثم فتح قائمة السياق ، ثم الخيارات فقط سيظهر فيما يتعلق بالنص المحدد'
    },
    addressBook:{
        title:'دليل العناوين',
        deleteAll:'حذف الكل',
        createNew:'خلق جديد إبداع جديد',
        desc1:`يمكنك تخزين ما تريد. يستخدم هذا الكتاب واجهة برمجة تطبيقات التخزين المحلية للمتصفح لحفظ المعلومات ، وهذا يعني أنه لا يوجد أحد لديه حق الوصول إلى معلوماتك ، يتم حفظ كل هذه البيانات محليًا وغير متصل. <br> إذا كنت تريد معرفة المزيد عن كيفية عمل ذلك ، فراجعها <a href = 'https: //developer.mozilla.org/docs/web/API/Window/localStorage' target = '_ blank'> هنا </a> </br> </br> (يمكنك نسخ أي قيمة بالضغط على direclty في حقل القيمة. لا داعي للضغط على أي شيء آخر) </ p>`,
        confirm:'هل أنت متأكد أنك تريد حذف الكل؟ (لا يمكن التراجع عن هذا الإجراء)',
        enterKey:'الرجاء إدخال تعريف البطاقة للعنوان',
        enterVal:'الرجاء إدخال معلومات العنوان',
        error:'يجب أن تحتوي العلامة أو القيمة على حرف واحد على الأقل ، يرجى المحاولة مرة أخرى',
        error2:'حدث خطأ ، يرجى تحديث الصفحة والمحاولة مرة أخرى',
        hideBook:"إخفاء الكتاب",
        showBook:"عرض الكتاب",
        pre:'هل أنت متأكد أنك تريد حذف الفهرس',
        post:'(لا يمكن التراجع عن هذا الإجراء)'
    },
    donatePage:{
        title:'ادعمنا من خلال التبرع بمبلغ صغير',
        desc1:`نجعل هذا النوع من التطبيقات لغرضين رئيسيين ، الأول هو الإعلان عن عملنا وقدراتنا البرمجية كنوع من الإعلانات حتى يتمكن العملاء الجدد المهتمون بصنع التطبيقات العامة والخاصة من الوصول إلينا بمتطلباتهم وبالتالي الحصول على عملاء جدد ، في نفس الوقت الذي ندعم فيه مجتمع التشفير مجانًا وندعم تطوير أدوات جديدة. من خلال تبرع صغير ، ستحفز عملنا أكثر حتى نتمكن من الاستماع إلى تعليقاتك وتطوير التعليقات الأكثر قيمة في المستقبل أو إضافة ميزات جديدة إلى أدواتنا الحالية.`,
        copy:'ينسخ'
    },
    contact:{
        title:'اتصل بنا',
        name:'اسمك إختياري)',
        email:'البريد الإلكتروني اختياري)',
        phone:'الهاتف اختياري)',
        msg:'اكتب رسالتك هنا (مطلوب)',
        btn:'الرسالة المرسلة',
        alert:'تم ، سيتم الرد على رسالتك في أقرب وقت ممكن'
    },
    lang:{
        select_lang:'اختار اللغة'
    },
    cookies:{
        confirm:'هل ترغب في حذف كافة ملفات تعريف الارتباط الخاصة بالمتصفح؟',
        done:'تم بنجاح ، تم حذف جميع ملفات تعريف الارتباط من المتصفح.'
    }
}

//chinnese
cn={
    titles:{
        t1:'價格',
        t2:'警報',
        t3:'qr 製造商',
        t4:'通訊錄',
        t5:'捐贈',
        t6:'其他'
    },
    alarm:{
        select_currency:'選擇貨幣',
        actually_coinbase_price:'實際 Coinbase 價格',
        refresh:'刷新',
        cond1:'如果',
        cond1Desc:'價格高於',
        cond2:'與 |或者',
        cond2Desc:'當價格低於',
        buttonSet:'設置鬧鐘'
    },
    qr:{
        desc:'輸入比特幣地址或url轉換為qr',
        placeholder:'在此處粘貼地址或網址',
        button:'創建'
    },
    book:{
        title:'請選擇一個選項',
        desc:'請輸入地址的描述標籤',
        placeholder1:'描述',
        placeholder2:'要保存的地址',
        desc2:'請輸入保存地址',
        buttonCreate:'新建',
        buttonShow:'顯示書'
    },
    donate:{
        btn1:'捐贈',
        btn2:'留言'
    },
    others:{
        changeLang:'改變語言',
        eraseCookies:'擦除 Cookies'
    },
    pricesSettings:{
        title:'價格設置',
        desc1:'您可以從上下文菜單中選擇要顯示的貨幣',
        desc2:'為此，請確保將自己定位在打開任何頁面的活動窗口中，然後右鍵單擊擴展圖標，完成後，將打開上下文菜單，您必須選擇“選擇貨幣”選項。',
        desc3:'您還可以編輯條紋的顏色和样式以及三種主要貨幣，您可以隨時更改這些'
    },
    alarmSettings:{
        title:'報警設置',
        desc1:'您可以從管理面板上下文菜單中設置警報樣式、圖標、聲音、標題和描述',
        desc2:'要訪問上下文菜單面板，您只需將自己定位在您正在瀏覽的任何頁面上，然後右鍵單擊瀏覽器中的應用程序圖標',
        desc3:'或者，您也可以右鍵單擊您正在操作的任何活動頁面，並在上下文菜單中查找具有擴展名的面板',
        desc4:'有某些選項,比如在區塊鏈瀏覽器中查找地址,需要您先選擇文本(要轉換為qr的文本,您要在區塊鏈瀏覽器中看到的地址）然後打開上下文菜單，只有這樣，選項才會與所選文本有關'
    },
    addressBook:{
        title:'通訊錄',
        deleteAll:'全部刪除',
        createNew:'創建新的',
        desc1:`你可以存儲任何你想要的東西。這本書使用瀏覽器的localStorage API來保存信息,這意味著沒有人可以訪問你的信息，所有這些數據都保存在本地和離線。<br>如果你想了解更多它是如何工作的，請看它<a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>這裡</a></br></br>（您可以通過點擊直接複製任何值在值字段中。無需按其他任何東西）</p>`,
        confirm:'你確定要刪除所有嗎？ （此動作不可逆轉）',
        enterKey:'請輸入地址的標籤標識',
        enterVal:'請輸入地址信息',
        error:'標籤或值必須至少有一個字符，請重試',
        error2:'出現錯誤請刷新頁面重試',
        hideBook:"隱藏書",
        showBook:"顯示書",
        pre:'你確定要刪除索引',
        post:'（此動作不可逆轉）'
    },
    donatePage:{
        title:'通過捐贈少量支持我們',
        desc1:`我們製作這種類型的應用程序有兩個主要目的，第一個是將我們的工作和我們的編程能力作為一種廣告宣傳，以便有興趣製作公共和私人應用程序的新客戶可以通過他們的要求與我們聯繫，從而獲得新客戶，同時我們免費支持加密社區並支持新工具的開發。通過少量捐款，您將更多地激勵我們的工作，因此我們可以傾聽您的評論並在未來開發最有價值的評論或為我們當前的工具添加新功能。`,
        copy:'複製'
    },
    contact:{
        title:'聯繫我們',
        name:'你的名字（可選）',
        email:'電子郵件（可選）',
        phone:'電話（可選）',
        msg:'在這裡寫下你的信息（必填）',
        btn:'已發送消息',
        alert:'完成，您的消息將盡快得到答复'
    },
    lang:{
        select_lang:'選擇語言'
    },
    cookies:{
        confirm:'要刪除所有瀏覽器cookies嗎?',
        done:'成功,所有cookies都從瀏覽器中刪除。'
    }
}

//deutsch
de={
    titles:{
        t1:'Preise',
        t2:'Alarm',
        t3:'qr Maker',
        t4:'Adressbuch',
        t5:'Spenden',
        t6: 'andere'
    },
    alarm:{
        select_currency:'Währung auswählen',
        actually_coinbase_price:'Eigentlicher Coinbase-Preis',
        refresh:'aktualisieren',
        cond1:'IF',
        cond1Desc:'Preis ist höher als',
        cond2: 'UND | ODER',
        cond2Desc:'Wenn der Preis niedriger ist als',
        buttonSet: 'Wecker stellen'
    },
    qr:{
        desc:'Geben Sie die Bitcoin-Adresse oder URL ein, um sie in qr umzuwandeln',
        placeholder:'Adresse oder URL hier einfügen',
        button: 'erstellen'
    },
    book:{
        title:'Bitte wählen Sie eine Option aus',
        desc:'Bitte geben Sie ein Beschreibungs-Tag für die Adresse ein',
        placeholder1:'Beschreibung',
        placeholder2:'Zu speichernde Adresse',
        desc2:'Bitte Adresse zum Speichern eingeben',
        buttonCreate:'Neu erstellen',
        buttonShow:'Buch anzeigen'
    },
    donate:{
        btn1:'spenden',
        btn2: 'Nachricht hinterlassen'
    },
    others:{
        changeLang:'Sprache ändern',
        eraseCookies: 'Cookies löschen'
    },
    pricesSettings:{
        title:'Preiseinstellungen',
        desc1:'Sie können die anzuzeigenden Währungen aus dem Kontextmenü auswählen',
        desc2:'Stellen Sie dazu sicher, dass Sie sich in einem aktiven Fenster positionieren, in dem Sie eine beliebige Seite geöffnet haben, und klicken Sie mit der rechten Maustaste auf das Erweiterungssymbol. Sobald dies erledigt ist, öffnet sich ein Kontextmenü und Sie müssen „Währung auswählen“ auswählen. Möglichkeit.',
        desc3:'Sie können auch die Farbe und den Stil des Streifens und der drei Hauptwährungen bearbeiten, Sie können diese jederzeit ändern'
    },
    alarmSettings:{
        title:'Alarmeinstellungen',
        desc1:'Sie können den Alarmstil, das Symbol, den Ton, den Titel und die Beschreibung im Kontextmenü des Admin-Panels einstellen',
        desc2:'Um auf das Kontextmenü zuzugreifen, müssen Sie sich nur auf einer beliebigen Seite, die Sie durchsuchen, positionieren und mit der rechten Maustaste auf das Anwendungssymbol im Browser klicken',
        desc3: 'Alternativ können Sie auch mit der rechten Maustaste auf eine beliebige aktive Seite klicken, auf der Sie gerade arbeiten, und im Kontextmenü nach dem Panel mit dem Namen der Erweiterung suchen',
        desc4:'Es gibt bestimmte Optionen wie das Suchen einer Adresse im Blockchain-Explorer, bei denen Sie zuerst den Text auswählen müssen (Text, den Sie in qr konvertieren möchten, die Adresse, die Sie im Blockchain-Explorer sehen möchten) und dann das Kontextmenü öffnen, erst dann erscheinen Optionen für den ausgewählten Text'
    },
    addressBook:{
        title:'Adressbuch',
        deleteAll:'alle löschen',
        createNew:'neu erstellen',
        desc1:`Du kannst speichern was du willst. Dieses Buch verwendet die LocalStorage-API des Browsers, um die Informationen zu speichern. Dies bedeutet, dass niemand Zugriff auf Ihre Informationen hat. Alle diese Daten werden lokal und offline gespeichert.<br>Wenn Sie mehr darüber erfahren möchten, wie dies funktioniert, lesen Sie <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>hier</a></br></br >(Sie können jeden Wert kopieren, indem Sie direkt darauf klicken in das Wertfeld ein. Sie brauchen nichts weiter zu drücken) </p> `,
        confirm:'Sind Sie sicher, dass Sie ALLE löschen möchten? (diese Aktion kann nicht rückgängig gemacht werden)',
        enterKey:'Bitte geben Sie die Tag-Identifikation für die Adresse ein',
        enterVal:'Bitte geben Sie die Adressinformationen ein',
        error:'Das Tag oder der Wert muss mindestens ein Zeichen haben, bitte versuchen Sie es erneut',
        error2:'Ein Fehler ist aufgetreten, bitte aktualisieren Sie die Seite und versuchen Sie es erneut',
        hideBook:"Buch ausblenden",
        showBookok:"Buch anzeigen",
        pre:'Sind Sie sicher, dass Sie den Index löschen möchten',
        post:'(Diese Aktion kann nicht rückgängig gemacht werden)'
    },
    donatePage:{
        title:'Unter00stützen Sie uns mit einer kleinen Spende',
        desc1:`Wir machen diese Art von Bewerbungen mit zwei Hauptzwecken, der erste ist, unsere Arbeit und unsere Programmierfähigkeiten als eine Art Werbung bekannt zu machen, damit neue Kunden, die daran interessiert sind, sowohl öffentliche als auch private Bewerbungen zu machen, uns mit ihren Anforderungen und damit erreichen können neue Kunden zu gewinnen, gleichzeitig unterstützen wir die Krypto-Community kostenlos und unterstützen die Entwicklung neuer Tools. Mit einer kleinen Spende fördern Sie unsere Arbeit mehr und wir können uns Ihre Kommentare anhören und in Zukunft die wertvollsten Kommentare entwickeln oder unseren aktuellen Tools neue Funktionen hinzufügen.`,
        copyy:'kopieren'
    },
    contact:{
        title:'Kontaktieren Sie uns',
        name:'Ihr Name (optional)',
        email:'E-Mail (optional)',
        phonene:'Telefon (optional)',
        msg:'Schreiben Sie hier Ihre Nachricht (erforderlich)',
        btn:'Nachricht gesendet',
        alert:'erledigt, Ihre Nachricht wird schnellstmöglich beantwortet'
    },
    lang:{
        select_lang:'Sprache auswählen'
    },
    cookies:{
        confirm:'Möchten Sie alle Browser-Cookies löschen?',
        done: 'Erfolg, alle Cookies wurden aus dem Browser gelöscht.'
    }
}

//dutch
nl={
    titles:{
        t1:'prijzen',
        t2:'alarm',
        t3:'qr Maker',
        t4:'adresboek',
        t5:'doneren',
        t6:'anderen'
    },
    alarm:{
        select_currency:'Selecteer valuta',
        actually_coinbase_price:'Eigenlijk Coinbase-prijs',
        refresh:'refresh',
        cond1:'ALS',
        cond1Desc:'Prijs is hoger dan',
        cond2:'EN | OF',
        cond2Desc:'Als de prijs lager is dan',
        buttonSet:'Alarm instellen'
    },
    qr:{
        desc:'Voer bitcoin adres of url in om te converteren naar qr',
        placeholder:'plak adres of url hier',
        knopon:'creëren'
    },
    book:{
        title:'Selecteer een optie',
        desc:'Voer een beschrijvingstag in voor adres',
        placeholder1:'Beschrijving',
        placeholder2:'Adres om op te slaan',
        desc2:'Voer het adres in om op te slaan',
        buttonCreate:'Nieuw maken',
        buttonShow:'Toon boek'
    },
    donate:{
        btn1:'doneer',
        btn2:'Laat een bericht achter'
    },
    others:{
        changeLang:'Taal wijzigen',
        eraseCookies:'Cookies wissen'
    },
    pricesSettings:{
        title:'Prijsinstellingen',
        desc1:'U kunt de valuta\'s selecteren die u wilt weergeven in het contextmenu',
        desc2:'Om dit te doen, moet u ervoor zorgen dat u zich in een actief venster bevindt waar u een pagina hebt geopend en met de rechtermuisknop op het extensiepictogram klikt. Zodra dit is gebeurd, wordt een contextmenu geopend en moet u de optie "Valuta selecteren" selecteren keuze.',
        desc3:'Je kunt ook de kleur en stijl van de streep en de drie belangrijkste valuta\'s bewerken, je kunt deze op elk moment wijzigen'
    },
    alarmSettings:{
        title:'Alarminstellingen',
        desc1:'U kunt alarmstijl, pictogram, geluid, titel en beschrijving instellen vanuit het contextmenu van het beheerderspaneel',
        desc2:'Om toegang te krijgen tot het contextmenupaneel, hoeft u zich alleen maar te positioneren op een pagina die u bekijkt en met de rechtermuisknop op het toepassingspictogram in de browser te klikken',
        desc3:'u kunt ook met de rechtermuisknop klikken op elke actieve pagina waarop u werkt en in het contextmenu zoeken naar het paneel met de naam van de extensie',
        desc4:'er zijn bepaalde opties, zoals een adres zoeken in de blockchain-verkenner waarvoor u eerst de tekst moet selecteren (tekst die u naar qr wilt converteren, het adres dat u in de blockchain-verkenner wilt zien) en vervolgens het contextmenu opent, alleen dan verschijnen er opties die met de geselecteerde tekst te maken hebben'
    },
    addressBook:{
        title:'Adresboek',
        deleteAll:'verwijder alles',
        createNew:'maak nieuw',
        desc1:`Je kunt opslaan wat je maar wilt. Dit boek gebruikt de localStorage API van de browser om de informatie op te slaan, dit betekent dat niemand toegang heeft tot uw informatie, al deze gegevens worden lokaal en offline opgeslagen.<br>Als u meer wilt weten over hoe dit werkt, ga dan naar <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>hier</a></br></br>(u kunt elke waarde kopiëren door direct op in het waardeveld. U hoeft niets anders in te drukken) </p> `,
        confirm:'Weet je zeker dat je ALLES wilt verwijderen? (deze actie kan niet ongedaan worden gemaakt)',
        enterKey:'Voer de tag-identificatie voor het adres in',
        enterVal:'Voer de adresgegevens in',
        error:'De tag of waarde moet minstens één teken bevatten, probeer het opnieuw',
        error2:'er is een fout opgetreden, ververs de pagina en probeer het opnieuw',
        hideBookook:"Verberg boek",
        showBook:"Toon boek",
        pre:'Weet u zeker dat u de index wilt verwijderen',
        post:'(deze actie kan niet ongedaan worden gemaakt)'
    },
    donatePage:{
        title:'Steun ons door een klein bedrag te doneren',
        desc1:`We maken dit soort toepassingen met twee hoofddoelen, de eerste is om ons werk en onze programmeermogelijkheden als een soort reclame bekend te maken, zodat nieuwe klanten die geïnteresseerd zijn in het maken van zowel openbare als particuliere toepassingen ons kunnen bereiken met hun vereisten en dus het verkrijgen van nieuwe klanten, terwijl we tegelijkertijd de crypto-gemeenschap gratis ondersteunen en de ontwikkeling van nieuwe tools ondersteunen. Met een kleine donatie stimuleer je ons werk meer, zodat we naar je opmerkingen kunnen luisteren en in de toekomst de meest gewaardeerde opmerkingen kunnen ontwikkelen of nieuwe functies aan onze huidige tools kunnen toevoegen.`,
        copy:'kopiëren'
    },
    contact:{
        title:'Neem contact met ons op',
        name:'Uw naam (optioneel)',
        email:'E-mail (optioneel)',
        phonene:'Telefoon (optioneel)',
        msg:'Schrijf hier uw bericht (verplicht)',
        btn:'Verzonden Bericht',
        alert:'klaar, je bericht wordt zo snel mogelijk beantwoord'
    },
    lang:{
        select_lang:'Selecteer taal'
    },
    cookies:{
        confirm:'Wilt u alle browsercookies verwijderen?',
        done:'Succes, alle cookies zijn uit de browser verwijderd.'

    }
    }

//french
fr={
    titles:{
        t1:'prix',
        t2:'alarme',
        t3:'créateur de qr',
        t4:'carnet d\'adresses',
        t5:'faire un don',
        t6:'autres'
    },
    alarm:{
        select_currency:'Sélectionner la devise',
        actually_coinbase_price:'Prix en fait Coinbase',
        refresh:'actualiser',
        cond1:'SI',
        cond1Desc: "Le prix est supérieur à",
        cond2:'ET | OU',
        cond2Desc:'Lorsque le prix est inférieur à',
        buttonSet: 'Définir l\'alarme'
    },
    qr:{
        desc:'Entrez l\'adresse bitcoin ou l\'url à convertir en qr',
        placeholder:'coller l\'adresse ou l\'url ici',
        button:'créer'
    },
    book:{
        title:'Veuillez sélectionner une option',
        desc:'Veuillez saisir une balise de description pour l\'adresse',
        placeholder1:'Description',
        placeholder2:'Adresse à sauvegarder',
        desc2:'Veuillez saisir l\'adresse à enregistrer',
        buttonCreate:'Créer nouveau',
        buttonShow:'Afficher le livre'
    },
    donate:{
        btn1:'faire un don',
        btn2:'Laisser un message'
    },
    others:{
        changeLang:'Changer de langue',
        eraseCookies:'Effacer les cookies'
    },
    pricesSettings:{
        title:'Paramètres des prix',
        desc1:'Vous pouvez sélectionner les devises que vous souhaitez afficher dans le menu contextuel',
        desc2:'Pour ce faire, assurez-vous de vous positionner dans une fenêtre active où vous avez une page ouverte et faites un clic droit sur l\'icône de l\'extension, une fois cela fait, un menu contextuel s\'ouvrira et vous devrez sélectionner l\'option "Sélectionner la devise" option.',
        desc3:"Vous pouvez également modifier la couleur et le style de la bande et les trois principales devises, vous pouvez les modifier à tout moment"
    },
    alarmSettings:{
        title:'Paramètres d\'alarme',
        desc1:'Vous pouvez définir le style, l\'icône, le son, le titre et la description de l\'alarme à partir du menu contextuel du panneau d\'administration',
        desc2:'Pour accéder au panneau du menu contextuel, il vous suffit de vous positionner sur n\'importe quelle page que vous parcourez et de faire un clic droit sur l\'icône de l\'application dans le navigateur',
        desc3:'vous pouvez également cliquer avec le bouton droit de la souris sur n\'importe quelle page active sur laquelle vous travaillez et rechercher dans le menu contextuel le panneau portant le nom de l\'extension',
        desc4:'il y a certaines options comme trouver une adresse dans l\'explorateur de blockchain qui nécessitent que vous sélectionniez d\'abord le texte (le texte que vous voulez convertir en qr, l\'adresse que vous voulez voir dans l\'explorateur de blockchain) puis ouvrez le menu contextuel, ce n\'est qu\'alors que des options apparaîtront en rapport avec le texte sélectionné'
    },
    addressBook:{
        title:'Carnet d\'adresses',
        deleteAll:'supprimer tout',
        createNew:'créer nouveau',
        desc1:`Vous pouvez stocker tout ce que vous voulez. Ce livre utilise l'API localStorage du navigateur pour enregistrer les informations, cela signifie que personne n'a accès à vos informations, toutes ces données sont enregistrées localement et hors ligne.<br>Si vous souhaitez en savoir plus sur le fonctionnement, consultez-le <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>ici</a></br></br>(vous pouvez copier n'importe quelle valeur en cliquant directement dans le champ de valeur. Inutile d'appuyer sur quoi que ce soit d'autre) </p> `,
        confirm:'Êtes-vous sûr de vouloir TOUT supprimer? (cette action est irréversible)',
        enterKey:'Veuillez entrer l\'identification du tag pour l\'adresse',
        enterVal:'Veuillez entrer les informations d\'adresse',
        error:'Le tag ou la valeur doit avoir au moins un caractère, veuillez réessayer',
        error2:"une erreur s'est produite, veuillez actualiser la page et réessayer",
        hideBook:"Masquer le livre",
        showBook:"Afficher le livre",
        pre:'Êtes-vous sûr de vouloir supprimer l\'index',
        post:'(cette action ne peut pas être annulée)'
    },
    donatePage:{
        title:'Soutenez-nous en faisant un petit don',
        desc1:`Nous créons ce type d'applications avec deux objectifs principaux, le premier est de faire connaître notre travail et nos capacités de programmation en tant que type de publicité afin que les nouveaux clients intéressés à créer des applications publiques et privées puissent nous contacter avec leurs besoins et ainsi obtenir de nouveaux clients, en même temps que nous soutenons gratuitement la communauté crypto et soutenons le développement de nouveaux outils. Avec un petit don, vous encouragerez davantage notre travail et nous pourrons ainsi écouter vos commentaires et développer les commentaires les plus précieux à l'avenir ou ajouter de nouvelles fonctionnalités à nos outils actuels.`,
        copy:'copier'
    },
    contact:{
        title:'Contactez-nous',
        name:'Votre nom (facultatif)',
        email:'E-mail (optionnel)',
        phone:'Téléphone (optionnel)',
        msg:'Écrivez votre message ici (obligatoire)',
        btn:'Message envoyé',
        alert: 'fait, votre message recevra une réponse dès que possible'

    },
    lang:{
        select_lang:'Sélectionner la langue'
    },
    cookies:{
        confirm:'Voulez-vous supprimer tous les cookies du navigateur?',
        done:'Succès, tous les cookies ont été supprimés du navigateur.'
    },
    lang:{
        select_lang:'Sélectionner la langue'
    },
    cookies:{
        confirm:'Voulez-vous supprimer tous les cookies du navigateur?',
        done:'Succès, tous les cookies ont été supprimés du navigateur.'
    }
}

//geek
gr={
    titles:{
        t1: "τιμές",
        t2:'συναγερμός',
        t3: "qr Maker",
        t4:'βιβλίο διευθύνσεων',
        t5: 'δωρεά',
        t6: 'άλλοι'
    },
    alarm:{
        select_currency:'Επιλογή νομίσματος',
        actually_coinbase_price:'Πραγματικά Coinbase Price',
        refresh:'refresh',
        cond1:'ΑΝ',
        cond1Desc: 'Η τιμή είναι υψηλότερη από',
        cond2:'ΚΑΙ | Ή',
        cond2Desc:'Όταν η τιμή είναι χαμηλότερη από',
        buttonSet:'Ρύθμιση συναγερμού'
    },
    qr:{
        desc:'Εισαγάγετε διεύθυνση bitcoin ή url για μετατροπή σε qr',
        placeholder:'επικόλληση διεύθυνσης ή url εδώ',
        button: "δημιουργία"
    },
    book:{
        title:'Παρακαλώ επιλέξτε μία επιλογή',
        desc:'Παρακαλώ εισάγετε μια ετικέτα περιγραφής για τη διεύθυνση',
        placeholder1:'Περιγραφή',
        placeholder2:'Διεύθυνση προς αποθήκευση',
        desc2:'Παρακαλώ εισάγετε διεύθυνση για αποθήκευση',
        buttonCreate:'Δημιουργία νέου',
        buttonShow:'Εμφάνιση βιβλίου'
    },
    donate:{
        btn1: 'δωρεά',
        btn2: "Αφήστε ένα μήνυμα"
    },
    others:{
        changeLang:'Αλλαγή γλώσσας',
        eraseCookies:"Διαγραφή cookies"
    },
    pricesSettings:{
        title:'Ρυθμίσεις τιμών',
        desc1: `Μπορείτε να επιλέξετε τα νομίσματα που θέλετε να εμφανίζονται από το μενού περιβάλλοντος`,
        desc2:'Για να το κάνετε αυτό, φροντίστε να τοποθετήσετε τον εαυτό σας σε ένα ενεργό παράθυρο όπου έχετε ανοιχτή οποιαδήποτε σελίδα και κάντε δεξί κλικ στο εικονίδιο της επέκτασης. Μόλις γίνει αυτό, θα ανοίξει ένα μενού περιβάλλοντος και πρέπει να επιλέξετε "Επιλογή νομίσματος" επιλογή.',
        desc3:'Μπορείτε επίσης να επεξεργαστείτε το χρώμα και το στυλ της ρίγας και των τριών κύριων νομισμάτων, μπορείτε να τα αλλάξετε ανά πάσα στιγμή'
    },
    alarmSettings:{
        title:'Ρυθμίσεις συναγερμού',
        desc1: `Μπορείτε να ορίσετε στυλ ξυπνητηριού, εικονίδιο, ήχο, τίτλο και περιγραφή από το μενού περιβάλλοντος του πίνακα διαχείρισης`,
        desc2:'Για να αποκτήσετε πρόσβαση στον πίνακα μενού περιβάλλοντος, πρέπει απλώς να τοποθετηθείτε σε οποιαδήποτε σελίδα περιηγείστε και να κάνετε δεξί κλικ στο εικονίδιο της εφαρμογής στο πρόγραμμα περιήγησης',
        desc3:"εναλλακτικά, μπορείτε επίσης να κάνετε δεξί κλικ σε οποιαδήποτε ενεργή σελίδα στην οποία λειτουργείτε και να αναζητήσετε στο μενού περιβάλλοντος τον πίνακα που έχει το όνομα της επέκτασης",
        desc4: `υπάρχουν ορισμένες επιλογές όπως η εύρεση διεύθυνσης στον εξερευνητή blockchain που απαιτούν από εσάς να επιλέξετε πρώτα το κείμενο (κείμενο που θέλετε να μετατρέψετε σε qr, τη διεύθυνση που θέλετε να δείτε στον εξερευνητή blockchain) και στη συνέχεια να ανοίξετε το μενού περιβάλλοντος, μόνο τότε θα εμφανιστούν επιλογές που σχετίζονται με το επιλεγμένο κείμενο`
    },
    addressBook:{
        title:'Βιβλίο Διευθύνσεων',
        deleteAll:'διαγραφή όλων',
        createNew:'δημιουργία νέου',
        desc1:`Μπορείτε να αποθηκεύσετε ό,τι θέλετε. Αυτό το βιβλίο χρησιμοποιεί το localStorage API του προγράμματος περιήγησης για την αποθήκευση των πληροφοριών, αυτό σημαίνει ότι κανείς δεν έχει πρόσβαση στις πληροφορίες σας, όλα αυτά τα δεδομένα αποθηκεύονται τοπικά και εκτός σύνδεσης.<br>Εάν θέλετε να καταλάβετε περισσότερα πώς λειτουργεί, δείτε το <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>εδώ</a></br></br>(μπορείτε να αντιγράψετε οποιαδήποτε τιμή κάνοντας κλικ απευθείας στο πεδίο τιμής. Δεν χρειάζεται να πατήσετε κάτι άλλο) </p> `,
        confirm:'Είστε βέβαιοι ότι θέλετε να διαγράψετε ΟΛΑ; (αυτή η ενέργεια δεν μπορεί να αντιστραφεί)',
        enterKey:'Παρακαλώ εισάγετε το αναγνωριστικό ετικέτας για τη διεύθυνση',
        enterVal:'Παρακαλώ εισάγετε τις πληροφορίες διεύθυνσης',
        error:'Η ετικέτα ή η τιμή πρέπει να έχει τουλάχιστον έναν χαρακτήρα, δοκιμάστε ξανά',
        error2:'Παρουσιάστηκε σφάλμα, ανανεώστε τη σελίδα και δοκιμάστε ξανά',
        hideBook:"Απόκρυψη βιβλίου",
        showBook:"Εμφάνιση βιβλίου",
        pre:'Είστε βέβαιοι ότι θέλετε να διαγράψετε το ευρετήριο',
        post:'(αυτή η ενέργεια δεν μπορεί να αντιστραφεί)'
    },
    donatePage:{
        title: 'Υποστηρίξτε μας δίνοντας ένα μικρό ποσό',
        desc1:` Κάνουμε αυτόν τον τύπο εφαρμογών με δύο κύριους σκοπούς, ο πρώτος είναι να δημοσιοποιήσουμε τη δουλειά μας και τις δυνατότητες προγραμματισμού μας ως είδος διαφήμισης, έτσι ώστε οι νέοι πελάτες που ενδιαφέρονται να κάνουν τόσο δημόσιες όσο και ιδιωτικές εφαρμογές μπορούν να επικοινωνήσουν μαζί μας με τις απαιτήσεις τους και έτσι αποκτήστε νέους πελάτες, την ίδια στιγμή που υποστηρίζουμε δωρεάν την κοινότητα κρυπτογράφησης και υποστηρίζουμε την ανάπτυξη νέων εργαλείων. Με μια μικρή δωρεά θα δώσετε περισσότερα κίνητρα στη δουλειά μας και έτσι μπορούμε να ακούσουμε τα σχόλιά σας και να αναπτύξουμε τα πιο πολύτιμα σχόλια στο μέλλον ή να προσθέσουμε νέες δυνατότητες στα τρέχοντα εργαλεία μας.`,
        copy:'αντίγραφο'
    },
    contact:{
        title:'Επικοινωνήστε μαζί μας',
        name:'Το όνομά σας (προαιρετικό)',
        email:'Email (προαιρετικό)',
        phone:'Τηλέφωνο (προαιρετικό)',
        msg:'Γράψτε το μήνυμά σας εδώ (Απαιτείται)',
        btn: "Απεσταλμένο μήνυμα",
        alert: "ολοκληρώθηκε, το μήνυμά σας θα απαντηθεί το συντομότερο δυνατό"
    },
    lang:{
        select_lang:'Επιλογή γλώσσας'
    },
    cookies:{
        confirm:'Θέλετε να διαγράψετε όλα τα cookie του προγράμματος περιήγησης;',
        done:'Επιτυχία, όλα τα cookie διαγράφηκαν από το πρόγραμμα περιήγησης.'
    }
}

//hebrew
hw={
    titles:{
        t1:'מחירים',
        t2:'אזעקה',
        t3:'qr Maker',
        t4:'פנקס הכתובות',
        t5:'לִתְרוֹם',
        t6:'אחרים'
    },
    alarm:{
        select_currency:'תבחר מדינה',
        actually_coinbase_price:'למעשה מחיר Coinbase',
        refresh:'לְרַעֲנֵן',
        cond1:'אם',
        cond1Desc:'המחיר גבוה מ',
        cond2:'ו | אוֹ',
        cond2Desc:'כאשר המחיר נמוך מ',
        buttonSet:'הגדר אזעקה'
    },
    qr:{
        desc:'הזן כתובת ביטקוין או כתובת אתר כדי להמיר ל-qr', 
        placeholder:'הדבק כאן כתובת או כתובת אתר',
        button:'לִיצוֹר'
    },
    book:{
        title:'נא לבחור באפשרות אחת',
        desc:'נא להזין תג תיאור עבור הכתובת',
        placeholder1:'תיאור',
        placeholder2:'כתובת לשמירה',
        desc2:'נא להזין כתובת כדי לשמור',
        buttonCreate:'ליצור חשבון חדש',
        buttonShow:'ספר הצג'
    },
    donate:{
        btn1:'לִתְרוֹם',
        btn2:'השאר הודעה'
    },
    others:{
        changeLang:'שנה שפה',
        eraseCookies:'מחק קובצי Cookie'
    },
    pricesSettings:{
        title:'הגדרות מחירים',
        desc1:'אתה יכול לבחור את המטבעות שברצונך שיוצגו מתפריט ההקשר',
        desc2:'לשם כך, הקפידו למקם את עצמכם בחלון פעיל בו יש לכם דף כלשהו פתוח ולחצו לחיצה ימנית על סמל ההרחבה, לאחר שהדבר נעשה, ייפתח תפריט הקשר ועליכם לבחור באפשרות "בחר מטבע".',
        desc3:'ניתן גם לערוך את הצבע והסגנון של הפס ושלושת המטבעות העיקריים, ניתן לשנות אותם בכל עת'
    },
    alarmSettings:{
        title:'הגדרות אזעקה',
        desc1:'אתה יכול להגדיר סגנון אזעקה, סמל, צליל, כותרת ותיאור מתפריט ההקשר של לוח הניהול',
        desc2:'כדי לגשת לחלונית תפריט ההקשר, אתה רק צריך להתמקם בכל דף שאתה גולש וללחוץ לחיצה ימנית על סמל היישום בדפדפן',
        desc3:'לחלופין, תוכל גם ללחוץ לחיצה ימנית על כל עמוד פעיל בו אתה פועל ולחפש בתפריט ההקשר את הלוח עם שם התוסף',
        desc4:'ישנן אפשרויות מסוימות כמו למצוא כתובת בסייר הבלוקצ\'יין שמחייבות אותך לבחור תחילה את הטקסט (טקסט שברצונך להמיר ל-qr, הכתובת שברצונך לראות בסייר הבלוק\צ\'יין) ולאחר מכן לפתוח את תפריט ההקשר, רק אז יופיעו אפשרויות הקשורות לטקסט שנבחר'
    },
    addressBook:{
        title:'פנקס הכתובות',
        deleteAll:'מחק הכל',
        createNew:'צור חדש',
        desc1:`אתה יכול לאחסן מה שאתה רוצה. ספר זה משתמש ב-LocalStorage API של הדפדפן כדי לשמור את המידע, זה אומר שלאף אחד אין גישה למידע שלך, כל הנתונים האלה נשמרים באופן מקומי ולא מקוון.<br>אם אתה רוצה להבין יותר איך זה עובד, ראה את זה <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>כאן</a></br></br>(תוכל להעתיק כל ערך על ידי לחיצה ישירה בשדה הערך. אין צורך ללחוץ על שום דבר אחר) </p> `,
        confirm:'האם אתה בטוח שברצונך למחוק את הכל? (לא ניתן להפוך פעולה זו)',
        enterKey:'נא להזין את זיהוי התג עבור הכתובת',
        enterVal:'נא להזין את פרטי הכתובת',
        error:'התג או הערך חייבים להכיל לפחות תו אחד, אנא נסה שוב',
        error2:'אירעה שגיאה אנא רענן את הדף ונסה שוב',
        hideBook:"הסתר ספר",
        showBook:"ספר הצג",
        pre:'האם אתה בטוח שברצונך למחוק את האינדקס',
        post:'(לא ניתן להפוך פעולה זו)'
    },
    donatePage:{
        title:'תמכו בנו על ידי תרומה של סכום קטן',
        desc1:`אנו מייצרים אפליקציות מסוג זה עם שתי מטרות עיקריות, הראשונה היא לפרסם את עבודתנו ואת יכולות התכנות שלנו כסוג של פרסום, כך שלקוחות חדשים המעוניינים לבצע אפליקציות ציבוריות ופרטיות כאחד יוכלו להגיע אלינו עם הדרישות שלהם ובכך להשיג לקוחות חדשים , במקביל לכך שאנו תומכים בקהילת הקריפטו בחינם ותומכים בפיתוח של כלים חדשים. עם תרומה קטנה תמריץ את העבודה שלנו יותר וכך נוכל להקשיב להערות שלך ולפתח את ההערות המוערכות ביותר בעתיד או להוסיף תכונות חדשות לכלים הנוכחיים שלנו.`,
        copy:'עותק'
    },
    contact:{
        title:'צור קשר',
        name:'השם שלך (אופציונלי)',
        email:'אימייל (אופציונלי)',
        phone:'טלפון אופציונלי)',
        msg:'כתוב את הודעתך כאן (חובה)',
        btn:'הודעה נשלחה',
        alert:'סיימת, הודעתך תענה בהקדם האפשרי'
    },
    lang:{
        select_lang:'בחר שפה'
    },
    cookies:{
        confirm:'האם ברצונך למחוק את כל קובצי ה-Cookie של הדפדפן?',
        done:'בהצלחה, כל העוגיות נמחקו מהדפדפן.'
    }
}
 
//hindi
hd={
    titles:{
        t1: 'कीमतें',
        t2: 'अलार्म',
        t3: 'qr मेकर',
        t4: 'पता पुस्तिका',
        t5: 'दान',
        t6: 'अन्य'
    },
    alarm:{
        select_currency: 'मुद्रा चुनें',
        actually_coinbase_price:'असल में कॉइनबेस प्राइस',
        refresh: 'ताज़ा करें',
        cond1: 'आईएफ',
        cond1Desc: 'कीमत इससे अधिक है',
        cond2:'और | या',
        cond2Desc:'जब कीमत इससे कम हो',
        buttonSet: 'अलार्म सेट करें'
    },
    qr:{
        desc:'बिटकॉइन पता दर्ज करें या qr में कनवर्ट करने के लिए यूआरएल',
        placeholder: 'पता या यूआरएल यहां पेस्ट करें',
        button: 'बनाएं'
    },
    book:{
        title: 'कृपया एक विकल्प चुनें',
        desc: 'कृपया पते के लिए विवरण टैग दर्ज करें',
        placeholder1: 'विवरण',
        placeholder2:'एड्रेस टू सेव',
        desc2: 'कृपया सहेजने के लिए पता दर्ज करें',
        buttonCreate: 'नया बनाएं',
        buttonShow: 'बुक दिखाएं'
    },
    donate: {
        btn1: 'दान करें',
        btn2: 'एक संदेश छोड़ें'
    },
    others:{
        changeLang: 'भाषा बदलें',
        eraseCookies:'कुकी मिटाएं'
    },
    pricesSettings:{
        title: 'कीमत सेटिंग',
        desc1: 'आप संदर्भ मेनू से उन मुद्राओं का चयन कर सकते हैं जिन्हें आप प्रदर्शित करना चाहते हैं',
        desc2: 'ऐसा करने के लिए, अपने आप को एक सक्रिय विंडो में रखना सुनिश्चित करें जहां आपका कोई भी पेज खुला हो और एक्सटेंशन आइकन पर राइट-क्लिक करें, एक बार ऐसा करने के बाद, एक संदर्भ मेनू खुल जाएगा और आपको "मुद्रा का चयन करें" का चयन करना होगा। विकल्प।',
        desc3: 'आप पट्टी के रंग और शैली और तीन मुख्य मुद्राओं को भी संपादित कर सकते हैं, आप इन्हें किसी भी समय बदल सकते हैं'
    },
    alarmSettings:{
        title: 'अलार्म सेटिंग्स',
        desc1: 'आप व्यवस्थापक पैनल संदर्भ मेनू से अलार्म शैली, आइकन, ध्वनि, शीर्षक और विवरण सेट कर सकते हैं',
        desc2: 'संदर्भ मेनू पैनल तक पहुंचने के लिए, आपको बस अपने आप को किसी भी पृष्ठ पर ब्राउज़ करना होगा और ब्राउज़र में एप्लिकेशन आइकन पर राइट-क्लिक करना होगा',
        desc3: 'वैकल्पिक रूप से आप किसी भी सक्रिय पृष्ठ पर राइट क्लिक कर सकते हैं जिस पर आप काम कर रहे हैं और उस पैनल के संदर्भ मेनू में देख सकते हैं जिसमें एक्सटेंशन का नाम है',
        desc4: 'ब्लॉकचेन एक्सप्लोरर में एक पता खोजने जैसे कुछ विकल्प हैं, जिसके लिए आपको पहले टेक्स्ट का चयन करना होगा (पाठ जिसे आप qr में बदलना चाहते हैं, वह पता जिसे आप ब्लॉकचेन एक्सप्लोरर में देखना चाहते हैं) और फिर संदर्भ मेनू खोलें, तभी विकल्प चयनित टेक्स्ट के साथ दिखाई देंगे'
    },
    addressBook:{
        title: 'पता पुस्तिका',
        deleteAll: 'सभी हटाएं',
        createNew: 'नया बनाएं',
        desc1: `आप जो चाहें स्टोर कर सकते हैं। यह पुस्तक जानकारी को सहेजने के लिए ब्राउज़र के लोकलस्टोरेज एपीआई का उपयोग करती है, इसका मतलब है कि आपकी जानकारी तक किसी की पहुंच नहीं है, यह सारा डेटा स्थानीय और ऑफलाइन सहेजा जाता है।<br>यदि आप इसे कम करना चाहते हैं और यह कैसे काम करता है, तो इसे देखें <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>यहां</a></br></br>(आप सीधे क्लिक करके किसी भी मान को कॉपी कर सकते हैं मूल्य क्षेत्र में। कुछ और दबाने की जरूरत नहीं है) </p> `,
        confirm:'क्या आप वाकई सभी को हटाना चाहते हैं? (इस क्रिया को पूर्ववत नहीं किया जा सकता)',
        enterKey: 'कृपया पते के लिए टैग पहचान दर्ज करें',
        enterVal: 'कृपया पता जानकारी दर्ज करें',
        error:'टैग या मान में कम से कम एक वर्ण होना चाहिए, कृपया पुनः प्रयास करें',
        error2: 'एक त्रुटि हुई कृपया पृष्ठ को रीफ्रेश करें और पुनः प्रयास करें',
        hideBook:"पुस्तक छुपाएं",
        showBook: "बुक दिखाएं",
        pre:'क्या आप वाकई इंडेक्स को हटाना चाहते हैं',
        post:'(इस क्रिया को उलट नहीं किया जा सकता)'
    },
    donatePage:{
        title:'थोड़ी सी राशि दान करके हमारा समर्थन करें',
        desc1: `हम इस प्रकार के एप्लिकेशन को दो मुख्य उद्देश्यों के साथ बनाते हैं, पहला हमारे काम और हमारी प्रोग्रामिंग क्षमताओं को एक प्रकार के विज्ञापन के रूप में प्रचारित करना है ताकि सार्वजनिक और निजी दोनों एप्लिकेशन बनाने में रुचि रखने वाले नए ग्राहक अपनी आवश्यकताओं के साथ हम तक पहुंच सकें और इस प्रकार नए ग्राहक प्राप्त करें, उसी समय हम क्रिप्टो समुदाय को मुफ्त में समर्थन करते हैं और नए उपकरणों के विकास का समर्थन करते हैं। एक छोटे से दान के साथ आप हमारे काम को और अधिक प्रोत्साहित करेंगे और इसलिए हम आपकी टिप्पणियों को सुन सकते हैं और भविष्य में सबसे मूल्यवान टिप्पणियों को विकसित कर सकते हैं या हमारे मौजूदा टूल में नई सुविधाएं जोड़ सकते हैं।`,
        copy: 'कॉपी'
    },
    contact:{
        title:'हमसे संपर्क करें',
        name:'आपका नाम (वैकल्पिक)',
        email:'ईमेल (वैकल्पिक)',
        phone: 'फ़ोन (वैकल्पिक)',
        msg:'अपना संदेश यहाँ लिखें (आवश्यक)',
        btn: 'भेजा गया संदेश',
        alert:'हो गया, आपके संदेश का उत्तर जल्द से जल्द दिया जाएगा'
    },
    lang: {
        select_lang: 'भाषा चुनें'
    },
    cookies: {
        confirm:'क्या आप सभी ब्राउज़र कुकीज़ हटाना चाहेंगे?',
        done:'सफलतापूर्वक, सभी कुकीज़ ब्राउज़र से हटा दी गईं।'
    }
}

//italian
it={
    titles:{
        t1:'prezzi',
        t2:'allarme',
        t3:'qr Maker',
        t4:'rubrica',
        t5:'dona',
        t6:'altri'
    },
    alarm:{
        select_currency:'Seleziona valuta',
        actually_coinbase_price: 'Prezzo effettivamente Coinbase',
        refresh:'aggiorna',
        cond1:'SE',
        cond1Desc:'Il prezzo è superiore a',
        cond2:'E | O',
        cond2Desc:'Quando il prezzo è inferiore a',
        buttonSet:'Imposta allarme'
    },
    qr:{
        desc:'Inserisci indirizzo bitcoin o URL da convertire in qr',
        placeholder:'incolla qui l\'indirizzo o l\'URL',
        button:'creare'
    },
    book:{
        title:'Seleziona un\'opzione',
        desc:'Inserisci un tag di descrizione per l\'indirizzo',
        placeholder1:'Descrizione',
        placeholder2:'Indirizzo da salvare',
        desc2:'Inserisci l\'indirizzo per salvare',
        buttonCreate:'Crea nuovo',
        buttonShow:'Mostra libro'
    },
    donate:{
        btn1:'dona',
        btn2:'Lascia un messaggio'
    },
    others:{
        changeLang:'Cambia lingua',
        eraseCookies:'Cancella cookie'
    },
    pricesSettings:{
        title:'Impostazioni prezzi',
        desc1:'Puoi selezionare le valute che vuoi visualizzare dal menu contestuale',
        desc2: 'Per fare ciò, assicurati di posizionarti in una finestra attiva in cui hai una qualsiasi pagina aperta e fai clic con il tasto destro sull\'icona dell\'estensione, una volta fatto, si aprirà un menu contestuale e dovrai selezionare "Seleziona valuta" opzione.',
        desc3:'Puoi anche modificare il colore e lo stile della striscia e le tre valute principali, puoi cambiarle in qualsiasi momento'
    },
    alarmSettings:{
        title:'Impostazioni allarmi',
        desc1:'Puoi impostare lo stile della sveglia, l\'icona, il suono, il titolo e la descrizione dal menu contestuale del pannello di amministrazione',
        desc2:'Per accedere al pannello del menu contestuale, devi solo posizionarti su una qualsiasi pagina che stai navigando e fare clic con il tasto destro sull\'icona dell\'applicazione nel browser',
        desc3:'in alternativa puoi anche fare clic con il tasto destro su qualsiasi pagina attiva su cui stai operando e cercare nel menu contestuale il pannello che ha il nome dell\'estensione',
        desc4:'ci sono alcune opzioni come trova un indirizzo in blockchain explorer che richiedono di selezionare prima il testo (testo che vuoi convertire in qr, l\'indirizzo che vuoi vedere in blockchain explorer) e quindi aprire il menu contestuale, solo allora appariranno opzioni che hanno a che fare con il testo selezionato'
    },
    addressBook:{
        title:'Rubrica',
        deleteAll:'elimina tutto',
        createNew:'crea nuovo',
        desc1:`Puoi memorizzare quello che vuoi. Questo libro utilizza l'API localStorage del browser per salvare le informazioni, significa che nessuno ha accesso alle tue informazioni, tutti questi dati vengono salvati localmente e offline.<br>Se vuoi capire meglio come funziona, guardalo <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>qui</a></br></br>(puoi copiare qualsiasi valore facendo clic direttamente nel campo del valore. Non c'è bisogno di premere nient'altro) </p> `,
        confirm:'Sei sicuro di voler eliminare TUTTO? (questa azione non può essere annullata)',
        enterKey:'Inserisci l\'identificazione del tag per l\'indirizzo',
        enterVal:'Inserisci le informazioni sull\'indirizzo',
        error:'Il tag o il valore deve avere almeno un carattere, per favore riprova',
        error2:'si è verificato un errore, aggiorna la pagina e riprova',
        hideBook:"Nascondi libro",
        showBook:"Mostra libro",
        pre:'Sei sicuro di voler eliminare l\'indice',
        post:'(questa azione non può essere annullata)'
    },
    donatePage:{
        title:'Sostienici donando una piccola somma',
        desc1:`Realizziamo questo tipo di applicazioni con due scopi principali, il primo è pubblicizzare il nostro lavoro e le nostre capacità di programmazione come un tipo di pubblicità in modo che i nuovi clienti interessati a realizzare applicazioni sia pubbliche che private possano raggiungerci con le loro esigenze e quindi ottenere nuovi clienti, allo stesso tempo supportiamo gratuitamente la comunità delle criptovalute e supportiamo lo sviluppo di nuovi strumenti. Con una piccola donazione incoraggerai di più il nostro lavoro e così potremo ascoltare i tuoi commenti e sviluppare i commenti più apprezzati in futuro o aggiungere nuove funzionalità ai nostri strumenti attuali.`,
        copy:'copia'
    },
    contact:{
        title:'Contattaci',
        name:'Il tuo nome (opzionale)',
        email:'E-mail (opzionale)',
        phone:'Telefono (opzionale)',
        msg:'Scrivi qui il tuo messaggio (richiesto)',
        btn:'Messaggio inviato',
        alert:'fatto, il tuo messaggio riceverà risposta il prima possibile'
    },
    lang:{
        select_lang:'Seleziona lingua'
    },
    cookies:{
        confirm:'Vuoi eliminare tutti i cookie del browser?',
        done:'Successo, tutti i cookie sono stati eliminati dal browser.'
    }
}

//japonese
jp={
    titles:{
        t1:'価格',
        t2:'警報',
        t3:'qrメーカー',
        t4:'録',
        t5:'寄付',
        t6:'その他'
    },
    alarm:{
        select_currency:'通貨を選択',
        actually_coinbase_price:'実際のコインベース価格',
        refresh:'リフレッシュ',
        cond1:'もしも',
        cond1Desc:'価格はより高い',
        cond2:'と | また',
        cond2Desc:'価格が以下の場合',
        buttonSet:'目覚ましを設定する'
    },
    qr:{
        desc:'qrに変換するビットコインアドレスまたはURLを入力してください', 
        placeholder:'ここにアドレスまたはURLを貼り付けます',
        button:'作成'
    },
    book:{
        title:'オプションを1つ選択してください',
        desc:'住所の説明タグを入力してください',
        placeholder1:'説明',
        placeholder2:'保存するアドレス',
        desc2:'保存するアドレスを入力してください',
        buttonCreate:'新しく作る',
        buttonShow:'ショーブック'
    },
    donate:{
        btn1:'寄付',
        btn2:'伝言を残す'
    },
    others:{
        changeLang:'言語を変更',
        eraseCookies:'クッキーを消去する'
    },
    pricesSettings:{
        title:'価格設定',
        desc1:'表示したい通貨をコンテキストメニューから選択できます',
        desc2:'これを行うには、ページを開いているアクティブなウィンドウに自分を置き、拡張機能アイコンを右クリックしてください。これが完了すると、コンテキストメニューが開き、[通貨の選択]オプションを選択する必要があります。',
        desc3:'ストライプの色とスタイル、および3つの主要通貨を編集することもでき、これらはいつでも変更できます。'
    },
    alarmSettings:{
        title:'アラーム設定',
        desc1:'管理パネルのコンテキストメニューから、アラームのスタイル、アイコン、サウンド、タイトル、説明を設定できます。',
        desc2:'コンテキストメニューパネルにアクセスするには、閲覧しているページに自分を置き、ブラウザのアプリケーションアイコンを右クリックするだけです。',
        desc3:'または、操作しているアクティブなページを右クリックして、コンテキストメニューで拡張子の名前が付いているパネルを探すこともできます',
        desc4:'ブロックチェーンエクスプローラーでアドレスを検索するなどの特定のオプションがあり、最初にテキスト（qrに変換するテキスト、ブロックチェーンエクスプローラーで表示するアドレス）を選択してから、コンテキストメニューを開く必要があります。 その場合にのみ、選択したテキストに関連するオプションが表示されます'
    },
    addressBook:{
        title:'住所録',
        deleteAll:'すべて削除',
        createNew:'新しく作る',
        desc1:`何でも保存できます。 この本はブラウザのlocalStorageAPIを使用して情報を保存します。つまり、誰もあなたの情報にアクセスできず、このすべてのデータはローカルおよびオフラインで保存されます。<br>これがどのように機能するかを詳しく知りたい場合は、<a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target ='_ blank'> here </a> </br> </br>（direcltyをクリックすると任意の値をコピーできます 値フィールドに入力します。他に何も押す必要はありません）</ p>`,
        confirm:'ALLを削除してもよろしいですか？ （このアクションを元に戻すことはできません）',
        enterKey:'アドレスのタグIDを入力してください',
        enterVal:'住所情報を入力してください',
        error:'タグまたは値には少なくとも1つの文字が必要です。もう一度やり直してください',
        error2:'エラーが発生しましたページを更新して再試行してください',
        hideBook:"本を隠す",
        showBook:"ショーブック",
        pre:'インデックスを削除してもよろしいですか',
        post:'（このアクションを元に戻すことはできません）'
    },
    donatePage:{
        title:'少額の寄付で応援してください',
        desc1:`このタイプのアプリケーションは、主に2つの目的で作成されます。1つは、広告の一種として私たちの仕事とプログラミング機能を宣伝し、パブリックアプリケーションとプライベートアプリケーションの両方の作成に関心のある新しいクライアントが要件を満たして新しいクライアントを獲得できるようにすることです。 、同時に、暗号コミュニティを無料でサポートし、新しいツールの開発をサポートします。 少額の寄付で私たちの仕事にもっとインセンティブを与えることができるので、私たちはあなたのコメントに耳を傾け、将来最も価値のあるコメントを開発したり、現在のツールに新しい機能を追加したりできます。`,
        copy:'コピー'
    },
    contact:{
        title:'お問い合わせ',
        name:'あなたの名前（オプション）',
        email:'Eメール（オプション）',
        phone:'電話（オプション）',
        msg:'ここにメッセージを書いてください（必須）',
        btn:'送信されたメッセージ',
        alert:'完了したら、メッセージはできるだけ早く回答されます'
    },
    lang:{
        select_lang:'言語を選択する'
    },
    cookies:{
        confirm:'すべてのブラウザCookieを削除しますか？',
        done:'成功すると、すべてのCookieがブラウザから削除されました。'
    }
}
 
//brazil
br={
    titles:{
        t1:'preços',
        t2:'alarme',
        t3:'criador de qr',
        t4:'catálogo de endereços',
        t5:'doar',
        t6:'outros'
    },
    alarm:{
        select_currency:'Selecionar moeda',
        actually_coinbase_price:'preço base da moeda',
        refresh:'atualizar',
        cond1:'SE',
        cond1Desc:'O preço é maior que',
        cond2:'E | OU',
        cond2Desc:'Quando o preço é menor que',
        buttonSet:'Definir Alarme'
    },
    qr:{
        desc:'Digite o endereço bitcoin ou url para converter para qr',
        placeholder:'colar endereço ou url aqui',
        button:'criar'
    },
    book:{
        title:'Por favor selecione uma opção',
        desc:'Por favor, insira uma tag de descrição para o endereço',
        placeholder1:'Descrição',
        placeholder2:'Endereço para salvar',
        desc2:'Por favor, digite o endereço para salvar',
        buttonCreate:'Criar novo',
        buttonShow:'Mostrar livro'
    },
    donate:{
        btn1:'doar',
        btn2:'Deixe uma mensagem'
    },
    others:{
        changeLang:'Alterar idioma',
        eraseCookies:'Apagar cookies'
    },
    pricesSettings:{
        title:'Configurações de preços',
        desc1:'Você pode selecionar as moedas que deseja exibir no menu de contexto',
        desc2:'Para fazer isso, certifique-se de se posicionar em uma janela ativa onde você tenha alguma página aberta e clique com o botão direito do mouse no ícone da extensão, uma vez feito isso, um menu de contexto será aberto e você deve selecionar a opção "Selecionar Moeda" opção.',
        desc3:'Você também pode editar a cor e o estilo da faixa e as três moedas principais, você pode alterá-las a qualquer momento'
    },
    alarmSettings:{
        title:'Configurações de alarme',
        desc1:'Você pode definir o estilo de alarme, ícone, som, título e descrição do menu de contexto do painel de administração',
        desc2:'Para acessar o painel do menu de contexto, basta se posicionar em qualquer página que estiver navegando e clicar com o botão direito do mouse no ícone do aplicativo no navegador',
        desc3:'alternativamente você também pode clicar com o botão direito em qualquer página ativa em que esteja operando e procurar no menu de contexto o painel que tem o nome da extensão',
        desc4:'existem certas opções como encontrar um endereço no explorador de blockchain que exigem que você primeiro selecione o texto (texto que deseja converter para qr, o endereço que deseja ver no explorador de blockchain) e depois abra o menu de contexto, só então aparecerão opções relacionadas ao texto selecionado'
    },
    addressBook:{
        title:'Catálogo de Endereços',
        deleteAll:'apagar tudo',
        createNew:'criar novo',
        desc1:`Você pode armazenar o que quiser. Este livro usa a API localStorage do navegador para salvar as informações, isso significa que ninguém tem acesso às suas informações, todos esses dados são salvos localmente e offline.<br>Se você quiser entender mais como isso funciona, veja <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>aqui</a></br></br>(você pode copiar qualquer valor clicando diretamente no campo de valor. Não há necessidade de pressionar mais nada) </p> `,
        confirm:'Tem certeza que deseja deletar TODOS? (esta ação não pode ser revertida)',
        enterKey:'Por favor, insira a identificação da tag para o endereço',
        enterVal:'Por favor, insira as informações de endereço',
        error:'A tag ou valor deve ter pelo menos um caractere, por favor tente novamente',
        error2:'ocorreu um erro, atualize a página e tente novamente',
        hideBook:"Ocultar livro",
        showBook:"Mostrar livro",
        pre:'Tem certeza que deseja deletar o índice',
        post:'(esta ação não pode ser revertida)'
    },
    donatePage:{
        title:'Apoie-nos doando uma pequena quantia',
        desc1:`Fazemos este tipo de aplicativos com dois propósitos principais, o primeiro é divulgar nosso trabalho e nossas capacidades de programação como um tipo de publicidade para que novos clientes interessados ​​em fazer aplicativos públicos e privados possam nos contatar com seus requisitos e assim obter novos clientes, ao mesmo tempo em que apoiamos a comunidade criptográfica gratuitamente e apoiamos o desenvolvimento de novas ferramentas. Com uma pequena doação você incentivará mais nosso trabalho e assim poderemos ouvir seus comentários e desenvolver os comentários mais valiosos no futuro ou adicionar novos recursos às nossas ferramentas atuais.`,
        copy:'copiar'
    },
    contact:{
        title:'Fale Conosco',
        name:'Seu nome (opcional)',
        email:'E-mail (opcional)',
        phone:'Telefone (opcional)',
        msg:'Escreva sua mensagem aqui (obrigatório)',
        btn:'Mensagem Enviada',
        alert:'concluído, sua mensagem será respondida o mais rápido possível'
    },
    lang:{
        select_lang:'Selecionar idioma'
    },
    cookies:{
        confirm:'Deseja excluir todos os cookies do navegador?',
        done:'Sucesso, todos os cookies foram deletados do navegador.'
    }
}

//russian
ru={
    titles:{
        t1:'цены',
        t2:'тревога',
        t3: 'Создатель Qr',
        t4:'адресная книга',
        t5: 'пожертвовать',
        t6: 'другие'
    },
    alarm:{
        select_currency: 'Выберите валюту',
        actually_coinbase_price: 'Фактическая цена Coinbase',
        refresh: 'обновить',
        cond1: 'ЕСЛИ',
        cond1Desc:'Цена выше чем',
        cond2:'И | ИЛИ ЖЕ',
        cond2Desc: 'Если цена ниже',
        buttonSet: 'Установить будильник'
    },
    qr: {
        desc: 'Введите биткойн-адрес или URL-адрес для конвертации в qr',
        placeholder:'вставьте сюда адрес или URL',
        button: 'создать'
    },
    book:{
        title: 'Выберите один вариант',
        desc: 'Пожалуйста, введите тег описания для адреса',
        placeholder1:'Описание',
        placeholder2:'Адрес для сохранения',
        desc2: 'Пожалуйста, введите адрес для сохранения',
        buttonCreate:'Создать новый',
        buttonShow:'Показать книгу'
    },
    donate:{
        btn1: 'пожертвовать',
        btn2: 'Оставить сообщение'
    },
    others:{
        changeLang: 'Изменить язык',
        eraseCookies: 'Удалить файлы cookie'
    },
    pricesSettings:{
        title:'Настройки цен',
        desc1: 'Вы можете выбрать валюты, которые хотите отображать, из контекстного меню',
        desc2: 'Для этого убедитесь, что вы находитесь в активном окне, где у вас открыта любая страница, и щелкните правой кнопкой мыши значок расширения, как только это будет сделано, откроется контекстное меню, и вы должны выбрать \'Выбрать валюту\'. вариант.',
        desc3: 'Вы также можете изменить цвет и стиль полосы и три основные валюты, вы можете изменить их в любое время'
    },
    alarmSettings:{
        title: 'Настройки будильника',
        desc1: 'Вы можете установить стиль будильника, значок, звук, заголовок и описание из контекстного меню панели администратора',
        desc2: 'Чтобы получить доступ к панели контекстного меню, вам просто нужно расположиться на любой странице, которую вы просматриваете, и щелкнуть правой кнопкой мыши значок приложения в браузере',
        desc3: 'в качестве альтернативы вы также можете щелкнуть правой кнопкой мыши на любой активной странице, на которой вы работаете, и найти в контекстном меню панель с именем расширения',
        desc4: 'есть определенные параметры, такие как поиск адреса в обозревателе блокчейнов, которые требуют, чтобы вы сначала выбрали текст (текст, который вы хотите преобразовать в qr, адрес, который вы хотите увидеть в обозревателе блокчейнов), а затем открыть контекстное меню, только тогда появятся варианты, что делать с выделенным текстом.'
    },
    addressBook:{
        title: 'Адресная книга',
        deleteAll: 'удалить все',
        createNew: 'создать новый',
        desc1:`Вы можете хранить все, что захотите. В этой книге для сохранения информации используется API localStorage браузера. Это означает, что никто не имеет доступа к вашей информации, все эти данные сохраняются локально и в автономном режиме.<br>Если вы хотите понять, как это работает, см. <a href ='https://developer.mozilla.org/docs/web/API/Window/localStorage' target='_blank'>здесь</a></br></br>(вы можете скопировать любое значение, щелкнув прямо в поле значения. Больше ничего нажимать не нужно) </p> `,
        confirm: 'Вы уверены, что хотите удалить ВСЕ? (это действие нельзя отменить)',
        enterKey: 'Пожалуйста, введите идентификатор тега для адреса',
        enterVal:'Пожалуйста, введите информацию об адресе',
        error: 'Тег или значение должны содержать хотя бы один символ, попробуйте еще раз',
        error2: 'произошла ошибка, обновите страницу и повторите попытку',
        hideBook:"Скрыть книгу",
        showBook:"Показать книгу",
        pre: 'Вы уверены, что хотите удалить индекс',
        post: '(это действие нельзя отменить)'
    },
    donatePage:{
        title:'Поддержите нас, пожертвовав небольшую сумму',
        desc1:`Мы создаем приложения этого типа с двумя основными целями: во-первых, рекламировать нашу работу и наши программные возможности в качестве типа рекламы, чтобы новые клиенты, заинтересованные в создании как общедоступных, так и частных приложений, могли обратиться к нам со своими требованиями и, таким образом, получить новых клиентов, в то же время мы бесплатно поддерживаем криптосообщество и поддерживаем разработку новых инструментов. Небольшим пожертвованием вы еще больше стимулируете нашу работу, и мы сможем выслушать ваши комментарии и разработать наиболее ценные комментарии в будущем или добавить новые функции в наши текущие инструменты.`,
        copy: 'копировать'
    },
    contact:{
        title:'Свяжитесь с нами',
        name:'Ваше имя (необязательно)',
        email:'Электронная почта (необязательно)',
        phone:'Телефон (необязательно)',
        msg:'Напишите здесь свое сообщение (обязательно)',
        btn: 'Отправлено сообщение',
        alert: 'готово, на ваше сообщение будет дан ответ как можно скорее'
    },
    lang:{
        select_lang:'Выбрать язык'
    },
    cookies:{
        confirm: 'Удалить все файлы cookie браузера?',
        done: 'Успешно, все файлы cookie удалены из браузера.'
    }
    }

    switch (key) {
        case 'Afrikaans':
            setLang(af)
            break;
        case 'Arabic':
            setLang(ar)
            break;
        case 'Chinese':
            setLang(cn)
            break;
        case 'Deutsch':
            setLang(de)
            break;
        case 'Dutch':
            setLang(nl)
            break;
        case 'English':
            setLang(en)
            break;
        case 'French':
            setLang(fr)
            break;
        case 'Greek':
            setLang(gr)
            break;
        case 'Hebrew':
            setLang(hw)
            break;
        case 'Hindi':
            setLang(hd)
            break;
        case 'Italian':
            setLang(it)
            break;
        case 'Japanese':
            setLang(jp)
            break;
        case 'Portuguese':
            setLang(br)
            break;
        case 'Russian':
            setLang(ru)
            break;
        case 'Spanish':
            setLang(es)
            break;

        default:
            setLang(en)
            break;
    }

}


const language_set=function(){
    if(util.class('priceBody').style.display != 'block')
    util.class('optionTitle').innerText=window.localStorage.getItem('title1')

    util.id('alarm_title').innerText=window.localStorage.getItem('title2')
    util.id('qrMaker_title').innerText=window.localStorage.getItem('title3')
    util.id('addressBook_title').innerText=window.localStorage.getItem('title4')
    util.id('donate_title').innerText=window.localStorage.getItem('title5')
    util.id('others_title').innerText=window.localStorage.getItem('title6')

    util.id('SelectCurrency').innerText=window.localStorage.getItem('alarm_select_currency')
    util.id('actuallyCoinbasePrice').innerText=window.localStorage.getItem('alarm_actually_price')
    util.id('refreshAlarmPrice').innerText=window.localStorage.getItem('alarm_refresh_price')
    util.id('ifAlarmCond').innerText=window.localStorage.getItem('alarm_if')
    util.id('ifCond1').innerText=window.localStorage.getItem('alarm_ifDesc')+':'
    util.id('alarm_cond2').innerText=window.localStorage.getItem('alarm_cond2')
    util.id('alarm_cond2_desc').innerText=window.localStorage.getItem('alarm_cond2Desc')+':'
    util.class('alarm_buttonSet').innerText=window.localStorage.getItem('alarm_buttonSet')

    util.class('qr-desc').innerText=window.localStorage.getItem('qrDesc')
    util.id('qrString').setAttribute('placeholder',window.localStorage.getItem('qrInput'))
    util.id('qrMaker').innerText=window.localStorage.getItem('qrButton')

    util.id('addrTitle').innerText=window.localStorage.getItem('bookTitle')
    util.id('addrDesc1').innerText=window.localStorage.getItem('bookDesc')
    util.id('addrDesc2').innerText=window.localStorage.getItem('bookDesc2')
    util.id('descAddr').setAttribute('placeholder',window.localStorage.getItem('bookPlaceholder1'))
    util.id('descAddr').setAttribute('placeholder',window.localStorage.getItem('bookPlaceholder1'))
    util.id('valAddr').setAttribute('placeholder',window.localStorage.getItem('bookPlaceholder2'))
    util.id('createNewEntryBook').innerText=window.localStorage.getItem('bookBtn1')
    util.id('showBook').innerText=window.localStorage.getItem('bookBtn2')

    util.id('donate').innerText=window.localStorage.getItem('donateBtn1')
    util.id('leaveMessage').innerText=window.localStorage.getItem('donateBtn2')

    util.id('others_change_lang').innerText=window.localStorage.getItem('othersLang')
    util.id('others_cookies_erase').innerText=window.localStorage.getItem('othersCookies')
}

window.addEventListener('DOMContentLoaded',function(){
    if(window.localStorage.getItem('title1') == undefined)
    {
    const lang=navigator.language.substring(0,2).toLowerCase()
    switch (lang) {
        case 'af':
            set_language('Afrikaans')
            break;
        case 'ar':
            set_language('Arabic')
            break;
        case 'zh':
            set_language('Chinese')
            break;
        case 'de':
            set_language('Deutsch')
            break;
        case 'nl':
            set_language('Dutch')
            break;
        case 'en':
            set_language('English')
            break;
        case 'fr':
            set_language('French')
            break;
        case 'el':
            set_language('Greek')
            break;
        case 'iw':
            set_language('Hebrew')
            break;
        case 'hi':
            set_language('Hindi')
            break;
        case 'it':
            set_language('Italian')
            break;
        case 'ja':
            set_language('Japanese')
            break;
        case 'pt':
            set_language('Portuguese')
            break;
        case 'ru':
            set_language('Russian')
            break;
        case 'es':
            set_language('Spanish')
            break;
        default:
            set_language('English')
            break;
    }

    }else
    language_set()
})
