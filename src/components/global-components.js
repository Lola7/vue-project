import loading from './loading';
import { Radio } from 'element-ui';

export default (Vue) => {
    Vue.component('loading', loading);
    // Vue.component(Button.name, Button);
    // Vue.component(Select.name, Select);
    Vue.component(Radio.name, Radio);
};
