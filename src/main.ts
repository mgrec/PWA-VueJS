import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import * as firebase from 'firebase';

Vue.use(VueMaterial);
Vue.use(VueAxios, axios);

const config = {
  apiKey: 'AIzaSyBkU01bHdKVuce6v5yvzwmq7qLIFOV2lP8',
  authDomain: 'iim-pwa-vuejs.firebaseapp.com',
  databaseURL: 'https://iim-pwa-vuejs.firebaseio.com',
  projectId: 'iim-pwa-vuejs',
  storageBucket: 'iim-pwa-vuejs.appspot.com',
  messagingSenderId: '557721316279',
  appId: '1:557721316279:web:ec139ce57ee22f64c19632',
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey('BKabknfE_3-S0TjQiPjq3mV6gwqoVubcqkHKonluHdf0e1mc4cot3JDJlwvFmKC8M-_LS7c4sC7mjWYoXsu6pDs'); // 1. Generate a new key pair


// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token);
  });
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
