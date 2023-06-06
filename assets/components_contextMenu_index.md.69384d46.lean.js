import{V as p,_ as w,r as B,o as O,c as P,a as b,w as h,b as l,d as s,e as x}from"./app.562cdf23.js";const{defineComponent:R}=p,S=R({name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:i,resolveComponent:E,createVNode:r,openBlock:A,createElementBlock:u}=p;function F(o,a){const e=E("k-context-menu");return A(),u("div",null,[i("div",{class:"k-contextMenu-box",onContextmenu:a[0]||(a[0]=(...n)=>o.rightClick1&&o.rightClick1(...n))},"组件右击方式打开菜单",32),r(e,{open:o.isOpen1,"onUpdate:open":a[1]||(a[1]=n=>o.isOpen1=n),event:o.eventVal,menus:o.menusOtions.menus},null,8,["open","event","menus"]),r(e,{open:o.isOpen3,"onUpdate:open":a[2]||(a[2]=n=>o.isOpen3=n),event:o.eventVal,menus:o.menusOtions.menus},null,8,["open","event","menus"])])}const{defineComponent:y}=p,{nextTick:t,ref:c,shallowRef:D}=p;return{render:F,...y({setup(o,{expose:a}){a();const e=[{label:"返回(B)",tip:"Alt+向左箭头",click:()=>{window.history.back()}},{label:"点击不关闭菜单",tip:"不关闭菜单",click:()=>!1},{label:"前进(F)",tip:"Alt+向右箭头",disabled:!0},{label:"重新加载(R)",tip:"Ctrl+R",click:()=>location.reload(),divided:!0},{label:"另存为(A)...",tip:"Ctrl+S"},{label:"打印(P)...",tip:"Ctrl+P",click:()=>window.print()},{label:"投射(C)...",divided:!0,children:[{label:"返回(B)",tip:"Alt+向左箭头",click:()=>{window.history.back()}},{label:"点击不关闭菜单",tip:"不关闭菜单",click:()=>!1},{label:"前进(F)",tip:"Alt+向右箭头",disabled:!0},{label:"重新加载(R)",tip:"Ctrl+R",click:()=>location.reload(),divided:!0},{label:"另存为(A)...",tip:"Ctrl+S"},{label:"打印(P)...",tip:"Ctrl+P",click:()=>window.print()},{label:"投射(C)...",divided:!0},{label:"发送到你的设备",children:[{label:"iPhone"},{label:"iPad"},{label:"Windows 11"}]},{label:"为此页面创建二维码",divided:!0},{label:"使用网页翻译(F)",divided:!0,children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"},{label:"百度翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]},{label:"搜狗翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]},{label:"有道翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]}]},{label:"截取网页(R)"},{label:"查看网页源代码(U)",tip:"Ctrl+U"},{label:"检查(N)",tip:"Ctrl+Shift+I"}]},{label:"发送到你的设备",children:[{label:"iPhone"},{label:"iPad"},{label:"Windows 11"}]},{label:"为此页面创建二维码",divided:!0},{label:"使用网页翻译(F)",divided:!0,children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"},{label:"百度翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]},{label:"搜狗翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]},{label:"有道翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]}]},{label:"截取网页(R)",children:[{label:"返回(B)",tip:"Alt+向左箭头",click:()=>{window.history.back()}},{label:"点击不关闭菜单",tip:"不关闭菜单",click:()=>!1},{label:"前进(F)",tip:"Alt+向右箭头",disabled:!0},{label:"重新加载(R)",tip:"Ctrl+R",click:()=>location.reload(),divided:!0},{label:"另存为(A)...",tip:"Ctrl+S"},{label:"打印(P)...",tip:"Ctrl+P",click:()=>window.print()},{label:"投射(C)...",divided:!0},{label:"发送到你的设备",children:[{label:"iPhone"},{label:"iPad"},{label:"Windows 11"}]},{label:"为此页面创建二维码",divided:!0},{label:"使用网页翻译(F)",divided:!0,children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"},{label:"百度翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]},{label:"搜狗翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]},{label:"有道翻译",children:[{label:"翻译成繁体中文"},{label:"翻译成繁体中文"}]}]},{label:"截取网页(R)"},{label:"查看网页源代码(U)",tip:"Ctrl+U"},{label:"检查(N)",tip:"Ctrl+Shift+I"}]},{label:"查看网页源代码(U)",tip:"Ctrl+U"},{label:"检查(N)",tip:"Ctrl+Shift+I"}],n=c(!1),v=c(!1),C=c({});function m(f){n.value=!1,t(()=>{C.value=f,n.value=!0}),f.preventDefault()}const k=D({menus:e}),d={menus:e,isOpen1:n,isOpen3:v,eventVal:C,rightClick1:m,menusOtions:k,nextTick:t,ref:c,shallowRef:D};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}})}}()}}),T=JSON.parse('{"title":"鼠标右击弹窗","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]}],"relativePath":"components/contextMenu/index.md"}'),_=l("h1",{id:"鼠标右击弹窗",tabindex:"-1"},[s("鼠标右击弹窗 "),l("a",{class:"header-anchor",href:"#鼠标右击弹窗","aria-hidden":"true"},"#")],-1),g=l("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),U=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"class"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"k-contextMenu-box"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@contextmenu"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"rightClick1"'),l("span",{style:{color:"#6E6A86"}},">"),l("span",{style:{color:"#E0DEF4"}},"组件右击方式打开菜单"),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-context-menu")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model:open"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"isOpen1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":event"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"eventVal"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":menus"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"menusOtions.menus"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"></"),l("span",{style:{color:"#9CCFD8"}},"k-context-menu"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-context-menu"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model:open"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"isOpen3"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":event"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"eventVal"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":menus"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"menusOtions.menus"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"k-context-menu"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"<!--"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},' <div class="box" @contextmenu="($event) => contextmenu($event, menusOtions)">')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86","font-style":"italic"}},"      事件右击方式打开菜单")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86","font-style":"italic"}},"    </div> "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"-->")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"ts"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"import "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"nextTick"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"shallowRef"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#3E8FB0"}}," from "),l("span",{style:{color:"#F6C177"}},"'vue'"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," import {Top} from 'element-icon'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"menus"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'返回(B)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Alt+向左箭头'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"window"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"history"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"back"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'点击不关闭菜单'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'不关闭菜单'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#3E8FB0"}},"return"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"false"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'前进(F)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Alt+向右箭头'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    disabled"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'重新加载(R)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+R'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: SyncOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     spin: true,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"location"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"reload"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'另存为(A)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+S'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'打印(P)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+P'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: Top,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     color: 'red',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"window"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"print"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'投射(C)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'返回(B)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Alt+向左箭头'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"window"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"history"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"back"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'点击不关闭菜单'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'不关闭菜单'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#3E8FB0"}},"return"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"false"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'前进(F)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Alt+向右箭头'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        disabled"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'重新加载(R)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+R'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: SyncOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     spin: true,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"location"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"reload"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'另存为(A)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+S'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'打印(P)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+P'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: Printer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"window"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"print"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'投射(C)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'发送到你的设备'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: WindowsOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'iPhone'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'iPad'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Windows 11'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'为此页面创建二维码'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: QrcodeOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     style: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"       color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'使用网页翻译(F)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'百度翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'搜狗翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'有道翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'截取网页(R)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'查看网页源代码(U)'"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#E0DEF4"}}," tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+U'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'检查(N)'"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#E0DEF4"}}," tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+Shift+I'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'发送到你的设备'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: Top,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'iPhone'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'iPad'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Windows 11'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'为此页面创建二维码'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: QrcodeOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     style: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"       color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'使用网页翻译(F)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'百度翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'搜狗翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'有道翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'截取网页(R)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'返回(B)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Alt+向左箭头'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"window"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"history"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"back"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'点击不关闭菜单'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'不关闭菜单'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#3E8FB0"}},"return"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"false"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'前进(F)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Alt+向右箭头'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        disabled"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'重新加载(R)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+R'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: SyncOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     spin: true,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"location"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"reload"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'另存为(A)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+S'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'打印(P)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+P'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: Printer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        "),l("span",{style:{color:"#EA9A97"}},"click"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"window"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"print"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'投射(C)...'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'发送到你的设备'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: WindowsOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'iPhone'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'iPad'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Windows 11'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'为此页面创建二维码'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   node: QrcodeOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     style: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"       color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"        "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'使用网页翻译(F)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        divided"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'百度翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'搜狗翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'有道翻译'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"            children"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," ["),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'翻译成繁体中文'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"          "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'截取网页(R)'"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'查看网页源代码(U)'"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#E0DEF4"}}," tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+U'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'检查(N)'"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#E0DEF4"}}," tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+Shift+I'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    ]"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'查看网页源代码(U)'"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#E0DEF4"}}," tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+U'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," label"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'检查(N)'"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#E0DEF4"}}," tip"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#F6C177"}},"'Ctrl+Shift+I'"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"]"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"isOpen1"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#EA9A97"}},"false"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"isOpen3"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#EA9A97"}},"false"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"eventVal"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#908CAA"}},"{}"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"function"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"rightClick1"),l("span",{style:{color:"#908CAA"}},"("),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"event"),l("span",{style:{color:"#908CAA"}},")"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"isOpen1"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"false"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#EA9A97"}},"nextTick"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"eventVal"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"event"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"isOpen1"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"true"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"event"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"preventDefault"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"menusOtions"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"shallowRef"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  menus"),l("span",{style:{color:"#908CAA"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"menus"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"class"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"k-contextMenu-box"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"@contextmenu"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"rightClick1"'),l("span",{style:{color:"#9893A5"}},">"),l("span",{style:{color:"#575279"}},"组件右击方式打开菜单"),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-context-menu")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model:open"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"isOpen1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":event"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"eventVal"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":menus"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"menusOtions.menus"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"></"),l("span",{style:{color:"#56949F"}},"k-context-menu"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-context-menu"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model:open"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"isOpen3"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":event"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"eventVal"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":menus"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"menusOtions.menus"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"k-context-menu"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"<!--"),l("span",{style:{color:"#9893A5","font-style":"italic"}},' <div class="box" @contextmenu="($event) => contextmenu($event, menusOtions)">')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5","font-style":"italic"}},"      事件右击方式打开菜单")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5","font-style":"italic"}},"    </div> "),l("span",{style:{color:"#797593","font-style":"italic"}},"-->")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"ts"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"import "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"nextTick"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"ref"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"shallowRef"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#286983"}}," from "),l("span",{style:{color:"#EA9D34"}},"'vue'"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," import {Top} from 'element-icon'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"menus"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'返回(B)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Alt+向左箭头'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#575279","font-style":"italic"}},"window"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"history"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"back"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'点击不关闭菜单'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'不关闭菜单'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#286983"}},"return"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"false"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'前进(F)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Alt+向右箭头'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    disabled"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'重新加载(R)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+R'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: SyncOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     spin: true,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"location"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"reload"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'另存为(A)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+S'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'打印(P)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+P'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: Top,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     color: 'red',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"window"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"print"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'投射(C)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'返回(B)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Alt+向左箭头'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#575279","font-style":"italic"}},"window"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"history"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"back"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'点击不关闭菜单'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'不关闭菜单'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#286983"}},"return"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"false"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'前进(F)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Alt+向右箭头'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        disabled"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'重新加载(R)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+R'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: SyncOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     spin: true,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"location"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"reload"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'另存为(A)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+S'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'打印(P)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+P'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: Printer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"window"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"print"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'投射(C)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'发送到你的设备'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: WindowsOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'iPhone'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'iPad'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Windows 11'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'为此页面创建二维码'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: QrcodeOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     style: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"       color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'使用网页翻译(F)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'百度翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'搜狗翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'有道翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'截取网页(R)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'查看网页源代码(U)'"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#575279"}}," tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+U'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'检查(N)'"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#575279"}}," tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+Shift+I'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'发送到你的设备'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: Top,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'iPhone'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'iPad'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Windows 11'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'为此页面创建二维码'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: QrcodeOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     style: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"       color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'使用网页翻译(F)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'百度翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'搜狗翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'有道翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'截取网页(R)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'返回(B)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Alt+向左箭头'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#575279","font-style":"italic"}},"window"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"history"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"back"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'点击不关闭菜单'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'不关闭菜单'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#286983"}},"return"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"false"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'前进(F)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Alt+向右箭头'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        disabled"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'重新加载(R)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+R'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: SyncOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     spin: true,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"location"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"reload"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'另存为(A)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+S'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'打印(P)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+P'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: Printer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        "),l("span",{style:{color:"#D7827E"}},"click"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"window"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"print"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'投射(C)...'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'发送到你的设备'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: WindowsOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'iPhone'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'iPad'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Windows 11'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'为此页面创建二维码'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," icon: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   node: QrcodeOutlined,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   option: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     style: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"       color: 'aqua',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"        "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'使用网页翻译(F)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        divided"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'百度翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'搜狗翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'有道翻译'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"            children"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," ["),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'翻译成繁体中文'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"          "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'截取网页(R)'"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'查看网页源代码(U)'"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#575279"}}," tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+U'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'检查(N)'"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#575279"}}," tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+Shift+I'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    ]"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'查看网页源代码(U)'"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#575279"}}," tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+U'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," label"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'检查(N)'"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#575279"}}," tip"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#EA9D34"}},"'Ctrl+Shift+I'"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"]"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"isOpen1"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#D7827E"}},"false"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"isOpen3"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#D7827E"}},"false"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"eventVal"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#797593"}},"{}"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"function"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"rightClick1"),l("span",{style:{color:"#797593"}},"("),l("span",{style:{color:"#907AA9","font-style":"italic"}},"event"),l("span",{style:{color:"#797593"}},")"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#575279","font-style":"italic"}},"isOpen1"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"false"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#D7827E"}},"nextTick"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#575279","font-style":"italic"}},"eventVal"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"event"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#575279","font-style":"italic"}},"isOpen1"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"true"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#575279","font-style":"italic"}},"event"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"preventDefault"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"menusOtions"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"shallowRef"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  menus"),l("span",{style:{color:"#797593"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"menus"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),V=x('<hr><h1 id="contextmenu-属性" tabindex="-1">ContextMenu 属性 <a class="header-anchor" href="#contextmenu-属性" aria-hidden="true">#</a></h1><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>menus</td><td>菜单列表</td><td><code>array</code></td><td>{label: &#39;打印(P)...&#39;,tip: &#39;Ctrl+P&#39;, icon: {node: Top,option: {color: &#39;red&#39;,},},click: () =&gt; window.print(),}</td><td></td></tr><tr><td>menusStyle</td><td>菜单样式</td><td><code>Object</code></td><td>-</td><td></td></tr><tr><td>menusItemClass</td><td>菜单列表 class</td><td><code>string</code></td><td>-</td><td></td></tr><tr><td>position</td><td>偏移量</td><td><code>Object</code></td><td><code>{x: 0, y 0}</code></td><td></td></tr><tr><td>minWidth</td><td>最小宽度</td><td><code>Number, String</code></td><td>1</td><td>none</td></tr><tr><td>maxWidth</td><td>最大宽度</td><td><code>Number, String</code></td><td>1</td><td>none</td></tr><tr><td>zIndex</td><td></td><td><code>Number, String</code></td><td>1</td><td>3</td></tr><tr><td>direction</td><td>弹出位置</td><td><code>String</code></td><td>right,left</td><td>right</td></tr><tr><td>open</td><td>打开状态</td><td><code>Boolean</code></td><td>true, false</td><td>false</td></tr></tbody></table></div>',3);function N(i,E,r,A,u,F){const y=B("render-demo-0"),t=B("demo");return O(),P("div",null,[_,g,b(t,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <div class="k-contextMenu-box" @contextmenu="rightClick1">组件右击方式打开菜单</div>
    <k-context-menu
      v-model:open="isOpen1"
      :event="eventVal"
      :menus="menusOtions.menus"
    ></k-context-menu>
    <k-context-menu v-model:open="isOpen3" :event="eventVal" :menus="menusOtions.menus">
    </k-context-menu>

    <!-- <div class="box" @contextmenu="($event) => contextmenu($event, menusOtions)">
      事件右击方式打开菜单
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, shallowRef } from 'vue';
// import {Top} from 'element-icon'
const menus = [
  {
    label: '返回(B)',
    tip: 'Alt+向左箭头',
    click: () => {
      window.history.back();
    },
  },
  {
    label: '点击不关闭菜单',
    tip: '不关闭菜单',
    click: () => {
      return false;
    },
  },
  {
    label: '前进(F)',
    tip: 'Alt+向右箭头',
    disabled: true,
  },
  {
    label: '重新加载(R)',
    tip: 'Ctrl+R',
    // icon: {
    //   node: SyncOutlined,
    //   option: {
    //     spin: true,
    //   },
    // },
    click: () => location.reload(),
    divided: true,
  },
  {
    label: '另存为(A)...',
    tip: 'Ctrl+S',
  },
  {
    label: '打印(P)...',
    tip: 'Ctrl+P',
    // icon: {
    //   node: Top,
    //   option: {
    //     color: 'red',
    //   },
    // },
    click: () => window.print(),
  },
  {
    label: '投射(C)...',
    divided: true,
    children: [
      {
        label: '返回(B)',
        tip: 'Alt+向左箭头',
        click: () => {
          window.history.back();
        },
      },
      {
        label: '点击不关闭菜单',
        tip: '不关闭菜单',
        click: () => {
          return false;
        },
      },
      {
        label: '前进(F)',
        tip: 'Alt+向右箭头',
        disabled: true,
      },
      {
        label: '重新加载(R)',
        tip: 'Ctrl+R',
        // icon: {
        //   node: SyncOutlined,
        //   option: {
        //     spin: true,
        //     color: 'aqua',
        //   },
        // },
        click: () => location.reload(),
        divided: true,
      },
      {
        label: '另存为(A)...',
        tip: 'Ctrl+S',
      },
      {
        label: '打印(P)...',
        tip: 'Ctrl+P',
        // icon: {
        //   node: Printer,
        //   option: {
        //     color: 'aqua',
        //   },
        // },
        click: () => window.print(),
      },
      {
        label: '投射(C)...',
        divided: true,
      },
      {
        label: '发送到你的设备',
        // icon: WindowsOutlined,
        children: [
          {
            label: 'iPhone',
          },
          {
            label: 'iPad',
          },
          {
            label: 'Windows 11',
          },
        ],
      },
      {
        label: '为此页面创建二维码',
        divided: true,
        // icon: {
        //   node: QrcodeOutlined,
        //   option: {
        //     style: {
        //       color: 'aqua',
        //     },
        //   },
        // },
      },
      {
        label: '使用网页翻译(F)',
        divided: true,
        children: [
          { label: '翻译成繁体中文' },
          { label: '翻译成繁体中文' },
          {
            label: '百度翻译',
            children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
          },
          {
            label: '搜狗翻译',
            children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
          },
          {
            label: '有道翻译',
            children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
          },
        ],
      },
      {
        label: '截取网页(R)',
      },
      { label: '查看网页源代码(U)', tip: 'Ctrl+U' },
      { label: '检查(N)', tip: 'Ctrl+Shift+I' },
    ],
  },
  {
    label: '发送到你的设备',
    // icon: Top,
    children: [
      {
        label: 'iPhone',
      },
      {
        label: 'iPad',
      },
      {
        label: 'Windows 11',
      },
    ],
  },
  {
    label: '为此页面创建二维码',
    divided: true,
    // icon: {
    //   node: QrcodeOutlined,
    //   option: {
    //     style: {
    //       color: 'aqua',
    //     },
    //   },
    // },
  },
  {
    label: '使用网页翻译(F)',
    divided: true,
    children: [
      { label: '翻译成繁体中文' },
      { label: '翻译成繁体中文' },
      {
        label: '百度翻译',
        children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
      },
      {
        label: '搜狗翻译',
        children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
      },
      {
        label: '有道翻译',
        children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
      },
    ],
  },
  {
    label: '截取网页(R)',
    children: [
      {
        label: '返回(B)',
        tip: 'Alt+向左箭头',
        click: () => {
          window.history.back();
        },
      },
      {
        label: '点击不关闭菜单',
        tip: '不关闭菜单',
        click: () => {
          return false;
        },
      },
      {
        label: '前进(F)',
        tip: 'Alt+向右箭头',
        disabled: true,
      },
      {
        label: '重新加载(R)',
        tip: 'Ctrl+R',
        // icon: {
        //   node: SyncOutlined,
        //   option: {
        //     spin: true,
        //     color: 'aqua',
        //   },
        // },
        click: () => location.reload(),
        divided: true,
      },
      {
        label: '另存为(A)...',
        tip: 'Ctrl+S',
      },
      {
        label: '打印(P)...',
        tip: 'Ctrl+P',
        // icon: {
        //   node: Printer,
        //   option: {
        //     color: 'aqua',
        //   },
        // },
        click: () => window.print(),
      },
      {
        label: '投射(C)...',
        divided: true,
      },
      {
        label: '发送到你的设备',
        // icon: WindowsOutlined,
        children: [
          {
            label: 'iPhone',
          },
          {
            label: 'iPad',
          },
          {
            label: 'Windows 11',
          },
        ],
      },
      {
        label: '为此页面创建二维码',
        divided: true,
        // icon: {
        //   node: QrcodeOutlined,
        //   option: {
        //     style: {
        //       color: 'aqua',
        //     },
        //   },
        // },
      },
      {
        label: '使用网页翻译(F)',
        divided: true,
        children: [
          { label: '翻译成繁体中文' },
          { label: '翻译成繁体中文' },
          {
            label: '百度翻译',
            children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
          },
          {
            label: '搜狗翻译',
            children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
          },
          {
            label: '有道翻译',
            children: [{ label: '翻译成繁体中文' }, { label: '翻译成繁体中文' }],
          },
        ],
      },
      {
        label: '截取网页(R)',
      },
      { label: '查看网页源代码(U)', tip: 'Ctrl+U' },
      { label: '检查(N)', tip: 'Ctrl+Shift+I' },
    ],
  },
  { label: '查看网页源代码(U)', tip: 'Ctrl+U' },
  { label: '检查(N)', tip: 'Ctrl+Shift+I' },
];
const isOpen1 = ref(false);
const isOpen3 = ref(false);
const eventVal = ref({});
function rightClick1(event) {
  isOpen1.value = false;
  nextTick(() => {
    eventVal.value = event;
    isOpen1.value = true;
  });
  event.preventDefault();
}

const menusOtions = shallowRef({
  menus: menus,
});
<\/script>
`},{highlight:h(()=>[U]),default:h(()=>[b(y)]),_:1}),V])}const I=w(S,[["render",N]]);export{T as __pageData,I as default};