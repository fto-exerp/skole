import Vue from 'nativescript-vue'
import Home from './components/Home'
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';

Vue.use(BottomNavigation);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
