/*!
 * @license Firebase v4.12.0
 * Build: rev-ef14d4f
 * Terms: https://firebase.google.com/terms/
 */
try{webpackJsonpFirebase([3],{120:function(e,t,r){r(121)},121:function(e,t,r){"use strict";function o(e){var t=new Uint8Array(e);return window.btoa(String.fromCharCode.apply(null,t))}function n(e){if(e.objectStoreNames.contains(v)){var t=e.transaction(v),r=t.objectStore(v),o=new m,n=r.openCursor();n.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},n.onsuccess=function(){var t=n.result;if(t){var r=t.value;o.deleteToken(r.fcmSenderId,r.fcmToken,r.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(y)}}}function i(){var e=indexedDB.open(y);e.onerror=function(e){},e.onsuccess=function(t){n(e.result)}}function s(){}function a(e){var t=function(e){return self&&"ServiceWorkerGlobalScope"in self?new Y(e):new j(e)},r={Messaging:j};e.INTERNAL.registerService("messaging",t,r)}Object.defineProperty(t,"__esModule",{value:!0});var c,u=r(2),_=r(0),d={AVAILABLE_IN_WINDOW:"only-available-in-window",AVAILABLE_IN_SW:"only-available-in-sw",SHOULD_BE_INHERITED:"should-be-overriden",BAD_SENDER_ID:"bad-sender-id",INCORRECT_GCM_SENDER_ID:"incorrect-gcm-sender-id",PERMISSION_DEFAULT:"permission-default",PERMISSION_BLOCKED:"permission-blocked",UNSUPPORTED_BROWSER:"unsupported-browser",NOTIFICATIONS_BLOCKED:"notifications-blocked",FAILED_DEFAULT_REGISTRATION:"failed-serviceworker-registration",SW_REGISTRATION_EXPECTED:"sw-registration-expected",GET_SUBSCRIPTION_FAILED:"get-subscription-failed",INVALID_SAVED_TOKEN:"invalid-saved-token",SW_REG_REDUNDANT:"sw-reg-redundant",TOKEN_SUBSCRIBE_FAILED:"token-subscribe-failed",TOKEN_SUBSCRIBE_NO_TOKEN:"token-subscribe-no-token",TOKEN_SUBSCRIBE_NO_PUSH_SET:"token-subscribe-no-push-set",TOKEN_UNSUBSCRIBE_FAILED:"token-unsubscribe-failed",TOKEN_UPDATE_FAILED:"token-update-failed",TOKEN_UPDATE_NO_TOKEN:"token-update-no-token",USE_SW_BEFORE_GET_TOKEN:"use-sw-before-get-token",INVALID_DELETE_TOKEN:"invalid-delete-token",DELETE_TOKEN_NOT_FOUND:"delete-token-not-found",DELETE_SCOPE_NOT_FOUND:"delete-scope-not-found",BG_HANDLER_FUNCTION_EXPECTED:"bg-handler-function-expected",NO_WINDOW_CLIENT_TO_MSG:"no-window-client-to-msg",UNABLE_TO_RESUBSCRIBE:"unable-to-resubscribe",NO_FCM_TOKEN_FOR_RESUBSCRIBE:"no-fcm-token-for-resubscribe",FAILED_TO_DELETE_TOKEN:"failed-to-delete-token",NO_SW_IN_REG:"no-sw-in-reg",BAD_SCOPE:"bad-scope",BAD_VAPID_KEY:"bad-vapid-key",BAD_SUBSCRIPTION:"bad-subscription",BAD_TOKEN:"bad-token",BAD_PUSH_SET:"bad-push-set",FAILED_DELETE_VAPID_KEY:"failed-delete-vapid-key",INVALID_PUBLIC_VAPID_KEY:"invalid-public-vapid-key",USE_PUBLIC_KEY_BEFORE_GET_TOKEN:"use-public-key-before-get-token",PUBLIC_KEY_DECRYPTION_FAILED:"public-vapid-key-decryption-failed"},p=(c={},c[d.AVAILABLE_IN_WINDOW]="This method is available in a Window context.",c[d.AVAILABLE_IN_SW]="This method is available in a service worker context.",c["should-be-overriden"]="This method should be overriden by extended classes.",c["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",c["permission-default"]="The required permissions were not granted and dismissed instead.",c["permission-blocked"]="The required permissions were not granted and blocked instead.",c["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",c["notifications-blocked"]="Notifications have been blocked.",c[d.FAILED_DEFAULT_REGISTRATION]="We are unable to register the default service worker. {$browserErrorMessage}",c["sw-registration-expected"]="A service worker registration was the expected input.",c["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",c["invalid-saved-token"]="Unable to access details of the saved token.",c["sw-reg-redundant"]="The service worker being used for push was made redundant.",c["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",c["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",c["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",c["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$message}",c["token-update-failed"]="A problem occured while updating the user from FCM: {$message}",c["token-update-no-token"]="FCM returned no token when updating the user to push.",c["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",c["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",c["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",c["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",c["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",c["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",c["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",c["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",c["failed-to-delete-token"]="Unable to delete the currently saved token.",c["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",c["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",c["bad-scope"]="The service worker scope must be a string with at least one character.",c["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",c["bad-subscription"]="The subscription must be a valid PushSubscription.",c["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",c["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",c["failed-delete-vapid-key"]="The VAPID key could not be deleted.",c["invalid-public-vapid-key"]="The public VAPID key must be a string.",c[d.PUBLIC_KEY_DECRYPTION_FAILED]="The public VAPID key did not equal 65 bytes when decrypted.",c),f={codes:d,map:p},h=function(){function e(e,t){this.e=new _.ErrorFactory("messaging","Messaging",f.map),this.t=e,this.r=t,this.o=null,this.TRANSACTION_READ_WRITE="readwrite"}return e.prototype.openDatabase=function(){var e=this;return this.o?this.o:(this.o=new Promise(function(t,r){var o=indexedDB.open(e.t,e.r);o.onerror=function(e){r(e.target.error)},o.onsuccess=function(e){t(e.target.result)},o.onupgradeneeded=function(t){try{var o=t.target.result;e.onDBUpgrade(o,t)}catch(e){o.close(),r(e)}}}),this.o)},e.prototype.closeDatabase=function(){var e=this;return Promise.resolve().then(function(){if(e.o)return e.o.then(function(t){t.close(),e.o=null})})},e.prototype.onDBUpgrade=function(e,t){throw this.e.create(f.codes.SHOULD_BE_INHERITED)},e}(),l=h,g=function(e){return o(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},E=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),S={userVisibleOnly:!0,applicationServerKey:E},T={DEFAULT_PUBLIC_VAPID_KEY:E,SUBSCRIPTION_DETAILS:S,ENDPOINT:"https://fcm.googleapis.com"},b=function(){function e(){this.e=new _.ErrorFactory("messaging","Messaging",f.map)}return e.prototype.getToken=function(e,t,r){var o=this,n=g(t.getKey("p256dh")),i=g(t.getKey("auth")),s="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+n+"&encryption_auth="+i;r!==T.DEFAULT_PUBLIC_VAPID_KEY&&(s+="&application_pub_key="+g(r));var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var c={method:"POST",headers:a,body:s};return fetch(T.ENDPOINT+"/fcm/connect/subscribe",c).then(function(e){return e.json()}).catch(function(){throw o.e.create(f.codes.TOKEN_SUBSCRIBE_FAILED)}).then(function(e){var t=e;if(t.error){var r=t.error.message;throw o.e.create(f.codes.TOKEN_SUBSCRIBE_FAILED,{message:r})}if(!t.token)throw o.e.create(f.codes.TOKEN_SUBSCRIBE_NO_TOKEN);if(!t.pushSet)throw o.e.create(f.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);return{token:t.token,pushSet:t.pushSet}})},e.prototype.updateToken=function(e,t,r,o,n){var i=this,s=g(o.getKey("p256dh")),a=g(o.getKey("auth")),c="push_set="+r+"&token="+t+"&authorized_entity="+e+"&endpoint="+o.endpoint+"&encryption_key="+s+"&encryption_auth="+a;n!==T.DEFAULT_PUBLIC_VAPID_KEY&&(c+="&application_pub_key="+g(n));var u=new Headers;u.append("Content-Type","application/x-www-form-urlencoded");var _,d={method:"POST",headers:u,body:c};return fetch(T.ENDPOINT+"/fcm/connect/subscribe",d).then(function(e){return _=e,e.json()}).catch(function(){throw i.e.create(f.codes.TOKEN_UPDATE_FAILED)}).then(function(e){if(!_.ok){var t=e.error.message;throw i.e.create(f.codes.TOKEN_UPDATE_FAILED,{message:t})}if(!e.token)throw i.e.create(f.codes.TOKEN_UPDATE_NO_TOKEN);return e.token})},e.prototype.deleteToken=function(e,t,r){var o=this,n="authorized_entity="+e+"&token="+t+"&pushSet="+r,i=new Headers;i.append("Content-Type","application/x-www-form-urlencoded");var s={method:"POST",headers:i,body:n};return fetch(T.ENDPOINT+"/fcm/connect/unsubscribe",s).then(function(e){if(!e.ok)return e.json().then(function(e){if(e.error){var t=e.error.message;throw o.e.create(f.codes.TOKEN_UNSUBSCRIBE_FAILED,{message:t})}},function(e){throw o.e.create(f.codes.TOKEN_UNSUBSCRIBE_FAILED)})})},e}(),m=b,y="undefined",v="fcm_token_object_Store",D="fcm_token_details_db",I=2;s.prototype.fcmToken,s.prototype.swScope,s.prototype.vapidKey,s.prototype.subscription,s.prototype.fcmSenderId,s.prototype.fcmPushSet;var k=function(e){function t(){return e.call(this,D,I)||this}return u.__extends(t,e),t.prototype.onDBUpgrade=function(e,t){if(t.oldVersion<1){var r=e.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});r.createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})}t.oldVersion<2&&i()},t.prototype.n=function(e){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(t){return!e.fcmToken||"string"==typeof e.fcmToken&&0!==e.fcmToken.length?!e.swScope||"string"==typeof e.swScope&&0!==e.swScope.length?!e.vapidKey||e.vapidKey instanceof Uint8Array&&65===e.vapidKey.length?!e.subscription||e.subscription instanceof PushSubscription?!e.fcmSenderId||"string"==typeof e.fcmSenderId&&0!==e.fcmSenderId.length?!e.fcmPushSet||"string"==typeof e.fcmPushSet&&0!==e.fcmPushSet.length?[2]:[2,Promise.reject(this.e.create(f.codes.BAD_PUSH_SET))]:[2,Promise.reject(this.e.create(f.codes.BAD_SENDER_ID))]:[2,Promise.reject(this.e.create(f.codes.BAD_SUBSCRIPTION))]:[2,Promise.reject(this.e.create(f.codes.BAD_VAPID_KEY))]:[2,Promise.reject(this.e.create(f.codes.BAD_SCOPE))]:[2,Promise.reject(this.e.create(f.codes.BAD_TOKEN))]})})},t.prototype.getTokenDetailsFromToken=function(e){var t=this;return e?this.n({fcmToken:e}).then(function(){return t.openDatabase()}).then(function(t){return new Promise(function(r,o){var n=t.transaction(["fcm_token_object_Store"]),i=n.objectStore("fcm_token_object_Store"),s=i.index("fcmToken"),a=s.get(e);a.onerror=function(e){o(e.target.error)},a.onsuccess=function(e){var t=e.target.result?e.target.result:null;r(t)}})}):Promise.reject(this.e.create(f.codes.BAD_TOKEN))},t.prototype.getTokenDetailsFromSWScope=function(e){var t=this;return e?this.n({swScope:e}).then(function(){return t.openDatabase()}).then(function(t){return new Promise(function(r,o){var n=t.transaction(["fcm_token_object_Store"]),i=n.objectStore("fcm_token_object_Store"),s=i.get(e);s.onerror=function(e){o(e.target.error)},s.onsuccess=function(e){var t=e.target.result?e.target.result:null;r(t)}})}):Promise.reject(this.e.create(f.codes.BAD_SCOPE))},t.prototype.saveTokenDetails=function(e){var t=this,r=e.swScope,o=e.vapidKey,n=e.subscription,i=e.fcmSenderId,s=e.fcmToken,a=e.fcmPushSet;return r?o?n?i?s?a?this.n({swScope:r,vapidKey:o,subscription:n,fcmSenderId:i,fcmToken:s,fcmPushSet:a}).then(function(){return t.openDatabase()}).then(function(e){var c={swScope:r,vapidKey:g(o),endpoint:n.endpoint,auth:g(n.getKey("auth")),p256dh:g(n.getKey("p256dh")),fcmSenderId:i,fcmToken:s,fcmPushSet:a,createTime:Date.now()};return new Promise(function(r,o){var n=e.transaction(["fcm_token_object_Store"],t.TRANSACTION_READ_WRITE),i=n.objectStore("fcm_token_object_Store"),s=i.put(c);s.onerror=function(e){o(e.target.error)},s.onsuccess=function(e){r()}})}):Promise.reject(this.e.create(f.codes.BAD_PUSH_SET)):Promise.reject(this.e.create(f.codes.BAD_TOKEN)):Promise.reject(this.e.create(f.codes.BAD_SENDER_ID)):Promise.reject(this.e.create(f.codes.BAD_SUBSCRIPTION)):Promise.reject(this.e.create(f.codes.BAD_VAPID_KEY)):Promise.reject(this.e.create(f.codes.BAD_SCOPE))},t.prototype.deleteToken=function(e){var t=this;return"string"!=typeof e||0===e.length?Promise.reject(this.e.create(f.codes.INVALID_DELETE_TOKEN)):this.getTokenDetailsFromToken(e).then(function(e){if(!e)throw t.e.create(f.codes.DELETE_TOKEN_NOT_FOUND);return t.openDatabase().then(function(r){return new Promise(function(o,n){var i=r.transaction(["fcm_token_object_Store"],t.TRANSACTION_READ_WRITE),s=i.objectStore("fcm_token_object_Store"),a=s.delete(e.swScope);a.onerror=function(e){n(e.target.error)},a.onsuccess=function(r){if(0===r.target.result)return void n(t.e.create(f.codes.FAILED_TO_DELETE_TOKEN));o(e)}})})})},t}(l),w=k,N="fcm_vapid_details_db",P=1,A=function(e){function t(){return e.call(this,N,P)||this}return u.__extends(t,e),t.prototype.onDBUpgrade=function(e){e.createObjectStore("fcm_vapid_object_Store",{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return"string"!=typeof e||0===e.length?Promise.reject(this.e.create(f.codes.BAD_SCOPE)):this.openDatabase().then(function(t){return new Promise(function(r,o){var n=t.transaction(["fcm_vapid_object_Store"]),i=n.objectStore("fcm_vapid_object_Store"),s=i.get(e);s.onerror=function(){o(s.error)},s.onsuccess=function(){var e=s.result,t=null;e&&(t=e.vapidKey),r(t)}})})},t.prototype.saveVapidDetails=function(e,t){var r=this;if("string"!=typeof e||0===e.length)return Promise.reject(this.e.create(f.codes.BAD_SCOPE));if(null===t||65!==t.length)return Promise.reject(this.e.create(f.codes.BAD_VAPID_KEY));var o={swScope:e,vapidKey:t};return this.openDatabase().then(function(e){return new Promise(function(t,n){var i=e.transaction(["fcm_vapid_object_Store"],r.TRANSACTION_READ_WRITE),s=i.objectStore("fcm_vapid_object_Store"),a=s.put(o);a.onerror=function(){n(a.error)},a.onsuccess=function(){t()}})})},t.prototype.deleteVapidDetails=function(e){var t=this;return this.getVapidFromSWScope(e).then(function(r){if(!r)throw t.e.create(f.codes.DELETE_SCOPE_NOT_FOUND);return t.openDatabase().then(function(o){return new Promise(function(n,i){var s=o.transaction(["fcm_vapid_object_Store"],t.TRANSACTION_READ_WRITE),a=s.objectStore("fcm_vapid_object_Store"),c=a.delete(e);c.onerror=function(){i(c.error)},c.onsuccess=function(){if(0===c.result)return void i(t.e.create(f.codes.FAILED_DELETE_VAPID_KEY));n(r)}})})})},t}(l),O=A,F="messagingSenderId",C=function(){function e(e){var t=this;if(this.e=new _.ErrorFactory("messaging","Messaging",f.map),!e.options[F]||"string"!=typeof e.options[F])throw this.e.create(f.codes.BAD_SENDER_ID);this.i=e.options[F],this.s=new w,this.a=new O,this.c=new m,this.app=e,this.INTERNAL={},this.INTERNAL.delete=function(){return t.delete()}}return e.prototype.getToken=function(){var e=this,t=this.u();if("granted"!==t)return"denied"===t?Promise.reject(this.e.create(f.codes.NOTIFICATIONS_BLOCKED)):Promise.resolve(null);var r;return this._().then(function(t){return r=t,e.s.getTokenDetailsFromSWScope(r.scope)}).then(function(t){return t?e.manageExistingToken(t,r):e.getNewToken(r)})},e.prototype.manageExistingToken=function(e,t){var r=this;return this.isTokenStillValid(e).then(function(o){return o?Date.now()<e.createTime+6048e5?e.fcmToken:r.updateToken(e,t):r.deleteToken(e.fcmToken).then(function(){return r.getNewToken(t)})})},e.prototype.isTokenStillValid=function(e){return this.d().then(function(t){return g(t)===e.vapidKey})},e.prototype.updateToken=function(e,t){var r,o,n,i=this;return this.d().then(function(e){return r=e,i.p(t,r)}).then(function(t){return n=t,i.c.updateToken(i.i,e.fcmToken,e.fcmPushSet,n,r)}).catch(function(t){return i.deleteToken(e.fcmToken).then(function(){throw t})}).then(function(s){o=s;var a={swScope:t.scope,vapidKey:r,subscription:n,fcmSenderId:i.i,fcmToken:o,fcmPushSet:e.fcmPushSet};return i.s.saveTokenDetails(a)}).then(function(){return i.a.saveVapidDetails(t.scope,r)}).then(function(){return o})},e.prototype.getNewToken=function(e){var t,r,o,n=this;return this.d().then(function(r){return t=r,n.p(e,t)}).then(function(e){return r=e,n.c.getToken(n.i,r,t)}).then(function(i){o=i;var s={swScope:e.scope,vapidKey:t,subscription:r,fcmSenderId:n.i,fcmToken:o.token,fcmPushSet:o.pushSet};return n.s.saveTokenDetails(s)}).then(function(){return n.a.saveVapidDetails(e.scope,t)}).then(function(){return o.token})},e.prototype.deleteToken=function(e){var t=this;return this.s.deleteToken(e).then(function(e){return t.c.deleteToken(e.fcmSenderId,e.fcmToken,e.fcmPushSet)}).then(function(){return t._().then(function(e){if(e)return e.pushManager.getSubscription()}).then(function(e){if(e)return e.unsubscribe()})})},e.prototype._=function(){throw this.e.create(f.codes.SHOULD_BE_INHERITED)},e.prototype.d=function(){throw this.e.create(f.codes.SHOULD_BE_INHERITED)},e.prototype.requestPermission=function(){throw this.e.create(f.codes.AVAILABLE_IN_WINDOW)},e.prototype.p=function(e,t){throw this.e.create(f.codes.AVAILABLE_IN_WINDOW)},e.prototype.useServiceWorker=function(e){throw this.e.create(f.codes.AVAILABLE_IN_WINDOW)},e.prototype.usePublicVapidKey=function(e){throw this.e.create(f.codes.AVAILABLE_IN_WINDOW)},e.prototype.onMessage=function(e,t,r){throw this.e.create(f.codes.AVAILABLE_IN_WINDOW)},e.prototype.onTokenRefresh=function(e,t,r){throw this.e.create(f.codes.AVAILABLE_IN_WINDOW)},e.prototype.setBackgroundMessageHandler=function(e){throw this.e.create(f.codes.AVAILABLE_IN_SW)},e.prototype.delete=function(){return Promise.all([this.s.closeDatabase(),this.a.closeDatabase()])},e.prototype.u=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.s},e.prototype.getVapidDetailsModel=function(){return this.a},e.prototype.getIIDModel=function(){return this.c},e}(),R=C,L={TYPE_OF_MSG:"firebase-messaging-msg-type",DATA:"firebase-messaging-msg-data"},U={PUSH_MSG_RECEIVED:"push-msg-received",NOTIFICATION_CLICKED:"notification-clicked"},B=function(e,t){return r={},r[L.TYPE_OF_MSG]=e,r[L.DATA]=t,r;var r},M={PARAMS:L,TYPES_OF_MSG:U,createNewMsg:B},K={path:"/firebase-messaging-sw.js",scope:"/firebase-cloud-messaging-push-scope"},W=function(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=window.atob(r),n=new Uint8Array(o.length),i=0;i<o.length;++i)n[i]=o.charCodeAt(i);return n},V=function(e){function t(t){var r=e.call(this,t)||this;return r.f=null,r.h=Object(_.createSubscribe)(function(e){r.f=e}),r.l=null,r.g=Object(_.createSubscribe)(function(e){r.l=e}),r.S,r.T,r.f=null,r.h=Object(_.createSubscribe)(function(e){r.f=e}),r.l=null,r.g=Object(_.createSubscribe)(function(e){r.l=e}),r.b(),r}return u.__extends(t,e),t.prototype.getToken=function(){var t=this;return this.m()?this.y().then(function(){return e.prototype.getToken.call(t)}):Promise.reject(this.e.create(f.codes.UNSUPPORTED_BROWSER))},t.prototype.y=function(){var e=this;if(this.T)return this.T;var t=document.querySelector('link[rel="manifest"]');return this.T=t?fetch(t.href).then(function(e){return e.json()}).catch(function(){}).then(function(t){if(t&&t.gcm_sender_id&&"103953800507"!==t.gcm_sender_id)throw e.e.create(f.codes.INCORRECT_GCM_SENDER_ID)}):Promise.resolve(),this.T},t.prototype.requestPermission=function(){return u.__awaiter(this,void 0,void 0,function(){var e=this;return u.__generator(this,function(t){return"granted"===Notification.permission?[2]:[2,new Promise(function(t,r){var o=function(o){return"granted"===o?t():r("denied"===o?e.e.create(f.codes.PERMISSION_BLOCKED):e.e.create(f.codes.PERMISSION_DEFAULT))},n=Notification.requestPermission(o);n&&n.then(o)})]})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw this.e.create(f.codes.SW_REGISTRATION_EXPECTED);if(void 0!==this.S)throw this.e.create(f.codes.USE_SW_BEFORE_GET_TOKEN);this.S=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw this.e.create(f.codes.INVALID_PUBLIC_VAPID_KEY);if(void 0!==this.v)throw this.e.create(f.codes.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);var t=W(e);if(65!==t.length)throw this.e.create(f.codes.PUBLIC_KEY_DECRYPTION_FAILED);this.v=t},t.prototype.onMessage=function(e,t,r){return this.h(e,t,r)},t.prototype.onTokenRefresh=function(e,t,r){return this.g(e,t,r)},t.prototype.D=function(e){var t=this,r=e.installing||e.waiting||e.active;return new Promise(function(o,n){if(!r)return void n(t.e.create(f.codes.NO_SW_IN_REG));if("activated"===r.state)return void o(e);if("redundant"===r.state)return void n(t.e.create(f.codes.SW_REG_REDUNDANT));var i=function(){if("activated"===r.state)o(e);else{if("redundant"!==r.state)return;n(t.e.create(f.codes.SW_REG_REDUNDANT))}r.removeEventListener("statechange",i)};r.addEventListener("statechange",i)})},t.prototype._=function(){var e=this;return this.S?this.D(this.S):(this.S=null,navigator.serviceWorker.register(K.path,{scope:K.scope}).catch(function(t){throw e.e.create(f.codes.FAILED_DEFAULT_REGISTRATION,{browserErrorMessage:t.message})}).then(function(t){return e.D(t).then(function(){return e.S=t,t.update(),t})}))},t.prototype.d=function(){return this.v?Promise.resolve(this.v):Promise.resolve(T.DEFAULT_PUBLIC_VAPID_KEY)},t.prototype.p=function(e,t){return e.pushManager.getSubscription().then(function(r){return r||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})})},t.prototype.b=function(){var e=this;"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[M.PARAMS.TYPE_OF_MSG]){var r=t.data;switch(r[M.PARAMS.TYPE_OF_MSG]){case M.TYPES_OF_MSG.PUSH_MSG_RECEIVED:case M.TYPES_OF_MSG.NOTIFICATION_CLICKED:var o=r[M.PARAMS.DATA];e.f&&e.f.next(o)}}},!1)},t.prototype.m=function(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")},t}(R),j=V,G=function(e){function t(t){var r=e.call(this,t)||this;return self.addEventListener("push",function(e){return r.I(e)},!1),self.addEventListener("pushsubscriptionchange",function(e){return r.k(e)},!1),self.addEventListener("notificationclick",function(e){return r.w(e)},!1),r.N=null,r}return u.__extends(t,e),t.prototype.I=function(e){var t,r=this;try{t=e.data.json()}catch(e){return}var o=this.P().then(function(e){if(e){if(t.notification||r.N)return r.A(t)}else{var o=r.O(t);if(o){var n=o.title||"";return r._().then(function(e){return e.showNotification(n,o)})}if(r.N)return r.N(t)}});e.waitUntil(o)},t.prototype.k=function(e){var t=this,r=this._().then(function(e){return e.pushManager.getSubscription().then(function(e){}).catch(function(r){return t.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope).then(function(e){if(!e)throw r;return t.deleteToken(e.fcmToken).then(function(){throw r})})})}).catch(function(e){throw t.e.create(f.codes.UNABLE_TO_RESUBSCRIBE,{message:e})});e.waitUntil(r)},t.prototype.w=function(e){var t=this;if(e.notification&&e.notification.data&&e.notification.data.FCM_MSG){e.stopImmediatePropagation(),e.notification.close();var r=e.notification.data.FCM_MSG;if(r.notification){var o=r.notification.click_action;if(o){var n=this.F(o).then(function(e){return e?e.focus():self.clients.openWindow(o)}).then(function(e){if(e){r.notification,delete r.notification;var o=M.createNewMsg(M.TYPES_OF_MSG.NOTIFICATION_CLICKED,r);return t.C(e,o)}});e.waitUntil(n)}}}},t.prototype.O=function(e){if(e&&"object"==typeof e.notification){var t=Object.assign({},e.notification);return t.data=(r={},r.FCM_MSG=e,r),t;var r}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw this.e.create(f.codes.BG_HANDLER_FUNCTION_EXPECTED);this.N=e},t.prototype.F=function(e){var t=new URL(e,self.location).href;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){for(var r=null,o=0;o<e.length;o++)if(new URL(e[o].url,self.location).href===t){r=e[o];break}return r||null})},t.prototype.C=function(e,t){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(r){return e?(e.postMessage(t),[2]):[2,Promise.reject(this.e.create(f.codes.NO_WINDOW_CLIENT_TO_MSG))]})})},t.prototype.P=function(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){return e.some(function(e){return"visible"===e.visibilityState})})},t.prototype.A=function(e){var t=this;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(r){var o=M.createNewMsg(M.TYPES_OF_MSG.PUSH_MSG_RECEIVED,e);return Promise.all(r.map(function(e){return t.C(e,o)}))})},t.prototype._=function(){return Promise.resolve(self.registration)},t.prototype.d=function(){var e=this;return this._().then(function(t){return e.getVapidDetailsModel().getVapidFromSWScope(t.scope)}).then(function(e){return null===e?T.DEFAULT_PUBLIC_VAPID_KEY:e})},t}(R),Y=G,H=r(7);t.registerMessaging=a,a(H.firebase)}},[120])}catch(e){throw Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}
//# sourceMappingURL=firebase-messaging.js.map
