import { ref } from 'vue';
import { ConfigArray } from '../types/index.ts';

/**
 * 组件配置
 */
export const ConfigList = ref<ConfigArray[]>([
  {
    title: '通用组件',
    componentList: [
      {
        label: '头像',
        component: 'NAvatar',
        disabled: false,
        icon: 'avatar',
        componentProps: {},
      },
      {
        label: '按钮',
        component: 'NButton',
        disabled: false,
        icon: 'click-tap',
        defaultValue: '这是一个按钮',
        componentProps: {},
      },
    ],
  },
]);

/**
 * 参考文档 https://www.itxst.com/sortablejs/neuinffi.html
 */
export const draggedProps = {
  animation: 200,
  group: 'people',
  handle: '.move',
  disabled: false,
  ghostClass: 'ghost',
  class: 'w-100 h-100',
  'item-key': 'label',
};
