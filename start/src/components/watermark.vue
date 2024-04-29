<template>
  <div id="watermark">
    <k-watermark width="100%" height="100%" :options="options" :content="waterMarkText">
      <div class="content" style="height: 100%; display: flex; align-items: center">
        <div style="background-color: #fff; width: 300px; margin: auto; padding: 20px">
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
  <div id="watermark1" style="margin-top: 200px">
    <k-watermark
      width="50vw"
      height="30vh"
      :options="options1"
      name="mmm"
      :content="['kits-ui', 'k-watermark']"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const options = {
  stroke: '',
  textColor: 'black',
  opacity: 1,
  textWidth: 200,
  textHeight: 100,
  size: '20px',
};
const waterMarkText = ref('');
const options1 = {
  stroke: 'red',
  textColor: 'red',
  textWidth: 170,
  textHeight: 80,
  opacity: 0.1,
  rotate: '-20deg',
};

onMounted(() => {
  setInterval(() => {
    //获取时间对象
    let dd = new Date();
    //获取年月日，时分秒
    let m = dd.getMonth() + 1;
    let d = dd.getDate();
    let h = dd.getHours();
    let i = dd.getMinutes();
    let s = dd.getSeconds();
    waterMarkText.value = m + '月' + d + '日' + ' ' + h + ':' + i + ':' + s;
  }, 1000);
});
</script>

<style scoped lang="scss">
#watermark {
  // position: relative;
  width: 50vw;
  height: 80vh;
}

#watermark1 {
  // position: relative;
  width: 50vw;
  height: 80vh;
}

// .content {
//   width: 100%;
//   height: 100%;
//   color: red;
//   font-weight: 600;
// }
</style>
