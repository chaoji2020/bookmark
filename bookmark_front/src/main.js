import Vue from "vue";
import { Button, FormModel, Input, Icon, message, Checkbox, Dropdown, Menu, Tree ,Tooltip,Spin} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.component(Button.name, Button);
Vue.use(FormModel);
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);
Vue.use(Checkbox);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Tree);
Vue.use(Tooltip);
Vue.use(Spin);

Vue.prototype.$message = message;
Vue.config.productionTip = false;

window.vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");