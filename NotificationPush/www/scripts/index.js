// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar códigos no carregamento de página em dispositivos/emuladores Android ou que simulam o Cordova: inicie o aplicativo, defina os pontos de interrupção 
// e execute "window.location.reload()" no Console do JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Manipular eventos de pausa e retomada do Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: o Cordova foi carregado. Execute qualquer inicialização que exija o Cordova aqui.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('BuildInfo.packageName    =' + BuildInfo.packageName);
	    console.log('BuildInfo.basePackageName=' + BuildInfo.basePackageName);
	    console.log('BuildInfo.displayName    =' + BuildInfo.displayName);
	    console.log('BuildInfo.name           =' + BuildInfo.name);
	    console.log('BuildInfo.version        =' + BuildInfo.version);
	    console.log('BuildInfo.versionCode    =' + BuildInfo.versionCode);
	    console.log('BuildInfo.debug          =' + BuildInfo.debug);
	    console.log('BuildInfo.buildType      =' + BuildInfo.buildType);
	    console.log('BuildInfo.flavor         =' + BuildInfo.flavor);
	    console.log('BuildInfo.buildDate      =' + BuildInfo.buildDate);
	    console.log('BuildInfo.installDate    =' + BuildInfo.installDate);

        //pushRegistration = PushNotification.init({
        //    android: { senderID: 'notificationpush-47e65' }
        //});
    };

    function onPause() {
        // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
    };

    function onResume() {
        // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
    };
} )();