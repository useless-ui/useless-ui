# Watermark 水印组件

## 基础用法

基础的水印用法

:::demo

```vue
<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark width="100%" height="100%"></k-watermark>
  </div>
</template>
```

:::

## 配置项

使用配置的水印
使用 options 配置项,来更改水印的角度(rotate) 间隔(textWidth, textHeight) 颜色(textColor) 透明度(opacity),
文字内容使用 content 来更改
:::demo

```vue
<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark width="100%" height="100%" :options="options" :content="'kits-ui'" />
  </div>
</template>

<script setup lang="ts">
const options = {
  stroke: 'rgb(43, 192, 172)',
  textColor: 'rgb(43, 192, 172)',
  textWidth: 170,
  textHeight: 80,
  opacity: 0.5,
  rotate: '-20deg',
};
</script>
```

:::

## 多行水印(最多支持两行)

:::demo

```vue
<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark
      width="100%"
      height="100%"
      :options="options"
      :content="['kits-ui', 'k-watermark']"
    />
  </div>
</template>

<script setup lang="ts">
const options = {
  stroke: 'rgb(43, 192, 172)',
  textColor: 'rgb(43, 192, 172)',
  textWidth: 170,
  textHeight: 80,
  opacity: 0.5,
  rotate: '-20deg',
};
</script>
```

:::

## 应用案例

:::demo

```vue
<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark
      width="100%"
      height="100%"
      :options="options"
      :content="['kits-ui', 'k-watermark']"
    >
      <div class="content" style="height: 100%; display: flex; align-items: center">
        <div style="background-color: #ccc1aa; width: 300px; margin: auto; padding: 20px">
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
        </div>
      </div>
    </k-watermark>
  </div>
</template>

<script setup lang="ts">
const options = {
  stroke: 'rgb(43, 192, 172)',
  textColor: 'rgb(43, 192, 172)',
  textWidth: 170,
  textHeight: 80,
  opacity: 0.5,
  rotate: '-20deg',
};
</script>
```

## :::

# Watermark API

## Watermark 属性

| 属性名  | 说明       | 类型     | 可选值      | 默认值 |
| ------- | ---------- | -------- | ----------- | ------ |
| width   | 水印的宽度 | `string` | ----------- | 100vw  |
| height  | 水印的高度 | `string` | ----------- | 100vh  |
| options | 水印配置项 | `Object` | ---------   | -      |

## options 属性

| 属性名     | 说明                                   | 类型             | 默认值  |
| ---------- | -------------------------------------- | ---------------- | ------- |
| content    | 水印的内容                             | `string / array` | kits-ui |
| stroke     | 水印的颜色(可以使用颜色名称、RGB 值)   | `string`         | black   |
| textColor  | 水印的颜色(可以使用颜色名称、RGB 值)   | `string`         | black   |
| textWidth  | 水印内容的宽度(设置内容显示长度与间隔) | `string`         | 150     |
| textHeight | 水印内容的高度(设置内容显示高度与间隔) | `string`         | 100     |
| opacity    | 水印内容的透明度(0 - 1)                | `number`         | 0.5     |
| rotate     | 水印内容的旋转角度                     | `string`         | -30deg  |
