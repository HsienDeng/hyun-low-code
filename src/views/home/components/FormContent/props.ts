export const contentComponentProps = {
  draggedComponent: {
    type: Object,
  },
  getDraggedComponent: {
    type: Object,
    default: () => {},
  },
  setDraggedComponent: {
    type: Function,
    default: Function,
  },
  draggedComponentList: {
    type: Array,
    default: () => [],
  },
  setDraggedIndex: {
    type: Function,
    default: Function,
  },
  draggedIndex: {
    type: Number,
    default: 0,
  },
};
