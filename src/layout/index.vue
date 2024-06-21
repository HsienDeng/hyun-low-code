<script setup lang="ts">
  import LayoutSide from './components/Side/index.vue';
  import LayoutHeader from './components/Header/index.vue';
  import { layoutHeaderStyle } from '@/settings/designSetting';
  import { useProjectSettingStore } from '@/store/modules/projectSetting';
  import { useDesign } from '@/hooks/useDesign';
  import { computed } from 'vue';

  const { prefixCls } = useDesign('layout');
  const designSetting = useProjectSettingStore();
  const getDarkTheme = computed(() => designSetting.darkTheme);

  // 内容区域样式
  const layoutContentClass = computed(() => {
    const finalClass = `${prefixCls}-content`;
    return [finalClass, !getDarkTheme.value && `${finalClass}-default`];
  });
</script>

<template>
  <n-layout has-sider position="absolute" :class="[prefixCls, 'h-full']">
    <n-layout-sider
      :class="`${prefixCls}-sider`"
      :collapsed="designSetting.collapsed"
      :native-scrollbar="false"
      bordered
      :collapsed-width="64"
      show-trigger
      collapse-mode="width"
      @update:collapsed="(event: boolean) => (designSetting.collapsed = event)"
    >
      <LayoutSide :collapsed="designSetting.collapsed" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered :style="layoutHeaderStyle">
        <LayoutHeader />
      </n-layout-header>
      <n-layout-content embedded :native-scrollbar="false" bordered :class="layoutContentClass">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout';

  .@{prefix-cls} {
    &-content {
      padding: 16px;
      height: calc(100% - 56px);
      box-sizing: border-box;

      &-default {
        background-color: #f5f6fa;
      }
    }
  }
</style>
