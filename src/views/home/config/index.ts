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
        component: 'NAvatar',
        disabled: false,
        icon: 'click-tap',
        componentProps: {},
      },
    ],
  },
]);
