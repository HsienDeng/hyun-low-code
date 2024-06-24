<template>
  <NCard class="content-container h-100">
    <Draggable
      ref="DraggableRef"
      v-bind="draggedProps"
      :list="draggedComponentList"
      @change="(e) => handleDraggedChange(e)"
    >
      <template #item="{ element }">
        <div
          ref="DraggableItemRef"
          :class="[element.field === getProps.draggedComponent?.field && 'active-form-item', 'form-item']"
        >
          <div class="dragged-item-content">
            <NButton v-if="element.component === 'NButton'" :options="element.options">
              {{ element.defaultValue }}
            </NButton>
            <component v-else v-model:value="element.defaultValue" :is="element.component">
              <template v-if="element.prefixIcon" #prefix>
                <NIcon>{{ element.prefixIcon && element.prefixIcon.render() }}</NIcon>
              </template>
              <template v-if="element.suffixIcon" #suffix>
                <NIcon>{{ element.suffixIcon && element.suffixIcon.render() }}</NIcon>
              </template>
            </component>
          </div>
        </div>
      </template>
    </Draggable>
    {{ draggedComponentList }}
  </NCard>
</template>

<script setup lang="ts">
  import Draggable from 'vuedraggable';

  import { ref, unref, computed, defineProps } from 'vue';
  import { draggedProps } from '../../config/index.ts';
  import { contentComponentProps } from './props.ts';

  const $props = defineProps(contentComponentProps);

  const getProps = computed(() => {
    return { ...unref($props) };
  });

  const draggedComponentList = ref([]);

  const handleDraggedChange = (e) => {
    if ('added' in e) {
      const {
        added: { element, newIndex },
      } = e;
      draggedComponentList.value[newIndex] = element;
      // 通知父组件
      // $emits('update:draggedComponent', cloneElement, newIndex);
    }
  };
</script>

<style scoped lang="less">
  .content-container {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    .dragged-title .title,
    .dragged-title .remark {
      width: 85%;
      margin: auto;
    }
  }
</style>
