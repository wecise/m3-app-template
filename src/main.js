import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui'

Vue.config.productionTip = false;

// ElementUI Setup
ElementUI.Tooltip.props.openDelay.default = 1000;

/* 
 * 测试环境
*/
const m3 = require("@wecise/m3js");
Vue.prototype.m3 = m3;
window.m3 = m3;

let init = function(){
    window.global = m3.global;

    Vue.prototype.$ELEMENT = { 
      size: 'mini'
    };

    new Vue({
      render: h => h(App),
    }).$mount('#app')
};


if(process.env.NODE_ENV === "development"){

  /* env1 */
  let env1 = function(){
    m3.connect("http","47.92.151.165",8080,"wecise","admin","admin1234)(*&").then(()=>{
      init();
    }).catch((err)=>{
      console.log(err);
    });
  };
  
  env1();
  
} else {
  m3.init();
  init();
}
