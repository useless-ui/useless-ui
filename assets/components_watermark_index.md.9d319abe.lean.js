import{V as E,_ as F,r as A,o as m,c as D,a as u,w as l,b as s,d as t,e as k}from"./app.50c2da1b.js";const{defineComponent:_}=E,x=_({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:n,openBlock:a,createElementBlock:c}=E,r={class:"block",style:{width:"100%",height:"400px"}};function p(y,o){const d=e("k-watermark");return a(),c("div",r,[n(d,{width:"100%",height:"100%"})])}return{render:p,...{}}}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:n,openBlock:a,createElementBlock:c}=E,r={class:"block",style:{width:"100%",height:"400px"}};function p(o,d){const h=e("k-watermark");return a(),c("div",r,[n(h,{width:"100%",height:"100%",options:o.options},null,8,["options"])])}const{defineComponent:i}=E;return{render:p,...i({setup(o,{expose:d}){d();const C={options:{waterMarkText:"6666666666",textColor:"red",textWidth:170,textHeight:80,opacity:.1,rotate:"-20deg"}};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}})}}()}}),M=JSON.parse('{"title":"Watermark 水印组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[]},{"level":2,"title":"Watermark 属性","slug":"watermark-属性","link":"#watermark-属性","children":[]},{"level":2,"title":"options 属性","slug":"options-属性","link":"#options-属性","children":[]}],"relativePath":"components/watermark/index.md"}'),g=s("h1",{id:"watermark-水印组件",tabindex:"-1"},[t("Watermark 水印组件 "),s("a",{class:"header-anchor",href:"#watermark-水印组件","aria-hidden":"true"},"#")],-1),w=s("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),f=s("p",null,"基础的水印用法",-1),v=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"class"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"block"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"width: 100%; height: 400px;"'),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-watermark"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"width"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"100%"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"height"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"100%"'),s("span",{style:{color:"#6E6A86"}},"></"),s("span",{style:{color:"#9CCFD8"}},"k-watermark"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"class"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"block"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"width: 100%; height: 400px;"'),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-watermark"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"width"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"100%"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"height"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"100%"'),s("span",{style:{color:"#9893A5"}},"></"),s("span",{style:{color:"#56949F"}},"k-watermark"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"})])])],-1),B=s("h2",{id:"配置项",tabindex:"-1"},[t("配置项 "),s("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#")],-1),b=s("p",null,"使用配置的水印",-1),W=s("div",null,"使用 options 配置项,来更改水印的角度(rotate) 间隔(textWidth, textHeight) 颜色(textColor) 透明度(opacity) 以及 文字内容(waterMarkText)",-1),V=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"class"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"block"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"width: 100%; height: 400px;"'),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-watermark"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"width"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"100%"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"height"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"100%"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":options"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"options"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#6E6A86"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"ts"'),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"options"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  waterMarkText"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'6666666666'"),s("span",{style:{color:"#908CAA"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  textColor"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'red'"),s("span",{style:{color:"#908CAA"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  textWidth"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"170"),s("span",{style:{color:"#908CAA"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  textHeight"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"80"),s("span",{style:{color:"#908CAA"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  opacity"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"0.1"),s("span",{style:{color:"#908CAA"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  rotate"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'-20deg'"),s("span",{style:{color:"#908CAA"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#908CAA"}},"};")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#6E6A86"}},">")]),t(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"class"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"block"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"width: 100%; height: 400px;"'),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-watermark"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"width"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"100%"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"height"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"100%"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":options"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"options"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#9893A5"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"ts"'),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"options"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  waterMarkText"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'6666666666'"),s("span",{style:{color:"#797593"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  textColor"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'red'"),s("span",{style:{color:"#797593"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  textWidth"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"170"),s("span",{style:{color:"#797593"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  textHeight"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"80"),s("span",{style:{color:"#797593"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  opacity"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"0.1"),s("span",{style:{color:"#797593"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  rotate"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'-20deg'"),s("span",{style:{color:"#797593"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#797593"}},"};")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#9893A5"}},">")]),t(`
`),s("span",{class:"line"})])])],-1),N=k('<hr><h1 id="watermark-api" tabindex="-1">Watermark API <a class="header-anchor" href="#watermark-api" aria-hidden="true">#</a></h1><h2 id="watermark-属性" tabindex="-1">Watermark 属性 <a class="header-anchor" href="#watermark-属性" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>水印的宽度</td><td><code>string</code></td><td>-----------</td><td>100vw</td></tr><tr><td>height</td><td>水印的高度</td><td><code>string</code></td><td>-----------</td><td>100vh</td></tr><tr><td>options</td><td>水印配置项</td><td><code>Object</code></td><td>---------</td><td>-</td></tr></tbody></table></div><h2 id="options-属性" tabindex="-1">options 属性 <a class="header-anchor" href="#options-属性" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>waterMarkText</td><td>水印的内容</td><td><code>string</code></td><td>--------</td><td>kits-ui</td></tr><tr><td>textColor</td><td>水印的颜色(仅支持单词所支持的颜色,例如 red black)</td><td><code>string</code></td><td>-</td><td>black</td></tr><tr><td>textWidth</td><td>水印内容的宽度</td><td><code>string</code></td><td>-</td><td>150</td></tr><tr><td>textHeight</td><td>水印内容的高度</td><td><code>string</code></td><td>-</td><td>100</td></tr><tr><td>opacity</td><td>水印内容的透明度(0 - 1)</td><td><code>number</code></td><td>-</td><td>0.5</td></tr><tr><td>rotate</td><td>水印内容的旋转角度</td><td><code>string</code></td><td>-</td><td>-30deg</td></tr></tbody></table></div>',6);function T(e,n,a,c,r,p){const i=A("render-demo-0"),y=A("demo"),o=A("render-demo-1");return m(),D("div",null,[g,w,f,u(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark width="100%" height="100%"></k-watermark>
  </div>
</template>
`},{highlight:l(()=>[v]),default:l(()=>[u(i)]),_:1}),B,b,u(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark width="100%" height="100%" :options="options" />
  </div>
</template>

<script setup lang="ts">
const options = {
  waterMarkText: '6666666666',
  textColor: 'red',
  textWidth: 170,
  textHeight: 80,
  opacity: 0.1,
  rotate: '-20deg',
};
<\/script>
`},{description:l(()=>[W]),highlight:l(()=>[V]),default:l(()=>[u(o)]),_:1}),N])}const S=F(x,[["render",T]]);export{M as __pageData,S as default};