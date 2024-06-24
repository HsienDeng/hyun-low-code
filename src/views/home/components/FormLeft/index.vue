<template>
  <div class="generate-form-left">
    <div v-for="config in ConfigList" :key="config.title">
      <div class="left-component-title">
        <span>{{ config.title }}（{{ config.componentList.length }}）</span>
      </div>
      <Draggable
        class="dragArea list-group"
        :list="config.componentList"
        :group="{ name: 'people', pull: 'clone', put: false }"
        item-key="label"
        :sort="false"
      >
        <template #item="{ element }">
          <div class="elements-item">
            <div class="components-body">
              <SvgIcon v-if="element.icon" :name="element.icon" />
              <span class="components-body-text">{{ element.tempLabel || element.label }}</span>
            </div>
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Draggable from 'vuedraggable';

  import { ConfigList } from '../../config/index.ts';
</script>

<style scoped lang="less">
  .generate-form-left {
    position: sticky !important;
    top: 0 !important;
    z-index: 20 !important;

    .left-component-title {
      padding: 5px;
    }

    .n-icon {
      vertical-align: -10%;
      margin-right: 5px;
    }
  }

  .elements-item {
    cursor: grab;
    display: inline-block;
    width: 48%;
    margin: 1%;
    -webkit-transition: -webkit-transform 0ms !important;
    transition: -webkit-transform 0ms !important;
  }

  .components-body {
    padding: 8px 10px;
    border: 1px solid hsla(0, 0%, 43.9%, 0.2196078431372549);
    border-radius: 3px;
    font-size: 14px;

    display: flex;
    gap: 5px;
  }

  .components-body:hover {
    border: 1px dashed #1890ff;
    color: #1890ff;
  }
</style>
