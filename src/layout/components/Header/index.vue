<template>
  <n-flex justify="space-between" :class="[prefixCls, 'h-full']">
    <!-- 左侧内容 -->
    <div :class="`${prefixCls}-content-left`">
      <div class="collapse cursor-pointer" @click="toggleCollapsed">
        <SvgIcon :name="settingStore.collapsed ? 'menu-fold' : 'menu-unfold'" />
      </div>
    </div>
    <!-- 右侧内容 -->
    <div :class="`${prefixCls}-content-right`">
      <div class="functional-list-content">
        <n-flex justify="end">
          <div class="icon-item item">
            <n-dropdown trigger="hover" :value="settingStore.lang" :options="translateOptions" @select="toggleLocales">
              <SvgIcon name="translate" />
            </n-dropdown>
          </div>
          <div class="icon-item item">
            <SvgIcon name="github" @click="toGithub" />
          </div>
          <div class="icon-item item" @click="showSettingDrawer">
            <SvgIcon name="setting" />
          </div>
        </n-flex>
      </div>
    </div>
  </n-flex>

  <SettingDrawer ref="settingDrawer" />
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import SettingDrawer from './SettingDrawer.vue';
  import { useProjectSettingStore } from '@/store/modules/projectSetting';
  import { useDesign } from '@/hooks/useDesign';
  import { LANG_ENUM } from '@/enums/lang.ts';
  import { i18n } from '@/locales/setupLocales.ts';

  const { prefixCls } = useDesign('layout-header');
  const settingStore = useProjectSettingStore();
  const settingDrawer = ref<InstanceType<typeof SettingDrawer>>();

  const fillColor = ref('#333');
  /**
   * 监听主题颜色变化
   */
  watch(
    () => settingStore.themeColor,
    (nv) => {
      fillColor.value = nv;
      document.documentElement.style.setProperty('--theme-color', nv);
    },
    {
      immediate: true,
    },
  );

  const translateOptions = [
    {
      label: '中文',
      key: LANG_ENUM.Zh,
    },
    {
      label: 'English',
      key: LANG_ENUM.En,
    },
  ];

  // Toggle collapsed
  const toggleCollapsed = () => {
    settingStore.setCollapsed(!settingStore.collapsed);
  };

  /**
   * 切换语言
   * @param event
   */
  function toggleLocales(event: LANG_ENUM) {
    // @ts-ignore
    i18n.global.locale.value = event;
    settingStore.setLang(event);
  }

  // Show setting drawer
  const showSettingDrawer = () => {
    settingDrawer.value?.showDrawer(true);
  };

  // gei gei gei
  const toGithub = () => {
    window.open('https://gitee.com/deng_xian/vas-vue3-admin');
  };
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout-header';

  .@{prefix-cls} {
    padding: 0 25px 0 15px;
    align-items: center;

    &-content-right {
      cursor: pointer;

      .functional-list-content {
        .item {
          display: flex;
          align-items: center;
          justify-content: center;

          .name {
            margin-left: 10px;
            font-size: 16px;
          }
        }

        .icon-item {
          box-sizing: border-box;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.3s linear;
        }

        .icon-item:hover {
          color: var(--theme-color);
        }
      }
    }
  }
</style>
