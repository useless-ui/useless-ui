<template>
  <div ref="kWatermark" class="k-watermark">
    <slot></slot>
    <div ref="watermarkText" class="watermarkText"></div>
  </div>
</template>

<script setup lang="ts">
import { /*computed,*/ onMounted, ref, watch } from 'vue';
import type { watemarkParams } from '../types/index.types';
import { setStyle } from '../utils/index';

const props = defineProps({
  name: {
    type: String,
    default: 'k-watermark',
  },
  width: {
    type: String,
    default: '100vw',
  },
  height: {
    type: String,
    default: 'auto',
  },
  options: {
    type: Object,
    default: () => {
      return {};
    },
  },
  content: {
    type: String || Array,
    default: () => {
      return 'ktis-ui' || ['ktis-ui', 'ktis-ui'];
    },
  },
});

const kWatermark = ref<any>();
const watermarkText = ref<any>();
const parentDom = ref<any>();
const params = ref<any>();
const currContent = ref<any>('');

onMounted(() => {
  // 将内容字符串化
  currContent.value = Array.isArray(props.content) ? props.content : props.content.split(',');
  // 默认属性与props合并以props为主
  params.value = Object.assign(
    {
      stroke: 'black',
      textColor: 'black',
      textWidth: '150',
      textHeight: '100',
      opacity: 0.5,
      rotate: '-30deg',
      fontSize: '18px',
    },
    props.options,
  );

  // 获取当前水印的父元素
  parentDom.value = kWatermark.value.parentNode;
  init(params.value);
  // 观察器配置选项
  const options = {
    attributes: true,
    childList: true,
    subtree: true,
  };
  // 创建观察器
  const observer: any = new MutationObserver(async (mutationsList) => {
    for (let mutation of mutationsList) {
      // childlist的监测
      if (mutation.type === 'childList') {
        console.log('有子元素被删除了.');
        observer.disconnect();
        parentDom.value.appendChild(kWatermark.value);
        kWatermark.value.appendChild(watermarkText.value);
        observer.observe(parentDom.value, options);
      } else if (mutation.type === 'attributes') {
        // 停止观察
        observer.disconnect();
        init(params.value);
        // 重新对父元素进行观察
        observer.observe(parentDom.value, options);
        console.log('水印样式已重置....');
      }
    }
  });
  // 开始观察节点
  observer.observe(parentDom.value, options);
});

const init = (params: watemarkParams) => {
  const { width: pWidth, height: pHeight } = parentDom.value.getBoundingClientRect();
  // 设置水印本体样式
  setStyle(watermarkText.value, {
    background: `url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" version="1.1" width="${
      params.textWidth
    }" height="${params.textHeight}" stroke="${params.stroke}" fill="${
      params.textColor
    }"><text x="20" y="20" font-size="${params.fontSize}"><tspan x="0" dy="15">${
      currContent.value[0]
    }</tspan><tspan x="0" dy="15">${currContent.value[1] || ''}</tspan></text> </svg>')`,
    rotate: params.rotate,
    opacity: params.opacity,
    width: `${Math.sqrt(Math.pow(pWidth, 2) + Math.pow(pHeight, 2)) * 2}px`, // 获取父元素宽高,将宽高设置为父元素对角线长度的2倍
    height: `${Math.sqrt(Math.pow(pWidth, 2) + Math.pow(pHeight, 2)) * 2}px`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    'pointer-events': 'none',
  });
  // 水印外层样式
  setStyle(kWatermark.value, {
    width: props.width,
    height: props.height,
    position: 'relative',
    'z-index': 100000,
    inset: 0,
    margin: 'auto',
    overflow: 'hidden',
    'pointer-events': 'none',
  });
};

watch(
  () => props.content,
  (newVal) => {
    console.log(newVal);
    currContent.value = Array.isArray(newVal) ? newVal : newVal.split(',');
    init(params.value);
  },
);
</script>
