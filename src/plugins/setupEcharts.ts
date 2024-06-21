import { App } from 'vue';
import * as echarts from 'echarts';

export default function setupEcharts(app: App) {
  app.config.globalProperties.$echarts = echarts;
}
